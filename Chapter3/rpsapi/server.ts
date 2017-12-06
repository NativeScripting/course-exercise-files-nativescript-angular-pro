import * as express from "express";
import * as bodyParser from "body-parser";
import * as http from 'http';
import { Express, Router, Request, Response } from "express";

import * as mockgen from './app/data/mock-data-generator';
import { PtUserWithAuth } from './app/shared/models';
import { PtItemStatusType } from './app/shared/models/domain/types';
import { PtAuthToken, PtItem, PtTask, PtComment, PtRegisterModel, PtUser, PtLoginModel } from "./app/shared/models/domain";
import { newGuid } from "./app/util/guid";

const port = 8080;

const usersPerPage = 20;

const generatedPtUsers = mockgen.generateUsers();
const generatedPtItems = mockgen.generatePTItems(generatedPtUsers);

let currentPtUsers = generatedPtUsers.slice(0);
let currentPtItems = generatedPtItems.slice(0);

function paginateArray(array, pageSize, pageNumber) {
    --pageNumber; // because pages logically start with 1, but technically with 0
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}

function getNextIntergerId(arrayWithIdProp: Array<any>) {
    const newId = arrayWithIdProp.length > 0 ? (Math.max(...arrayWithIdProp.map(i => i.id))) + 1 : 1;
    return newId;
}

/*
const sslOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: 'Pa$$word1'
};
*/

const app: Express = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// ROUTES FOR OUR API
//=================================================================
const router: Router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hooray! welcome to our api!!' });
});

router.post('/auth', (req: Request, res: Response) => {
    if (req.body) {
        if (req.body.loginModel) {

            const loginModel = <PtLoginModel>req.body.loginModel;

            const foundUser = currentPtUsers.find(u => u.authInfo.email === loginModel.username && u.authInfo.password === loginModel.password);

            if (foundUser) {
                const now = new Date();
                const expireDate = new Date(now.setFullYear(now.getFullYear() + 1));
                const authToken: PtAuthToken = { dateExpires: expireDate, access_token: newGuid() };
                res.json({
                    user: foundUser,
                    authToken: authToken
                });
            } else {
                res.status(401);
                res.json(null);
            }


        } else {
            res.status(401);
            res.json(null);
        }
    } else {
        res.status(401);
        res.json(null);
    }
});

router.post('/register', (req: Request, res: Response) => {
    if (req.body) {
        if (req.body.registerModel) {
            const now = new Date();
            const expireDate = new Date(now.setFullYear(now.getFullYear() + 1));
            const authToken: PtAuthToken = { dateExpires: expireDate, access_token: newGuid() };

            const regModel = <PtRegisterModel>req.body.registerModel;

            const usernameExists = !!currentPtUsers.find(u => u.authInfo.email === regModel.username);

            if (usernameExists) {
                res.status(500);
                res.json('User exists');
            } else {
                const nextUserId = getNextIntergerId(currentPtUsers);

                const newUser = <PtUserWithAuth>{
                    id: nextUserId,
                    fullName: regModel.fullName,
                    authInfo: { email: regModel.username, password: regModel.password }
                };

                currentPtUsers = [...currentPtUsers, newUser];

                res.json({
                    user: newUser,
                    authToken: authToken
                });
            }
        } else {
            res.status(500);
            res.json('Registration failed');
        }
    } else {
        res.status(500);
        res.json('Bad request');
    }
});

router.get('/users', (req: Request, res: Response) => {
    res.json(currentPtUsers);
    //let currentPage = 1;
    //if (req.query && req.query.page) {
    //    currentPage = +req.query.page
    //}

    //const pagedData = paginateArray(currentPtUsers, usersPerPage, currentPage);
    /*
        res.json({
            currentPage: currentPage,
            pageSize: usersPerPage,
            totalItemCount: currentPtUsers.length,
            pageCount: Math.ceil(currentPtUsers.length / usersPerPage),
            data: pagedData
        });
        */
});


router.get('/backlog', (req: Request, res: Response) => {
    res.json(currentPtItems);
});

router.get('/myItems', (req: Request, res: Response) => {
    let userId: number;
    if (req.query && req.query.userId) {
        userId = parseInt(req.query.userId);
    }
    let found = false;

    if (currentPtUsers.findIndex(u => u.id === userId) >= 0) {
        found = true;
    }

    let filteredItems = currentPtItems.filter(i => i.assignee.id === userId && i.dateDeleted === undefined);

    if (!found) {
        res.status(404);
    }
    res.json(filteredItems);
});

router.get('/openItems', (req: Request, res: Response) => {
    let filteredItems = currentPtItems.filter((i: PtItem) => (i.status === 'Open' || i.status === 'ReOpened') && i.dateDeleted === undefined);
    res.json(filteredItems);
});

router.get('/closedItems', (req: Request, res: Response) => {
    let filteredItems = currentPtItems.filter(i => i.status === 'Closed' && i.dateDeleted === undefined);
    res.json(filteredItems);
});

router.get('/item/:id', (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);
    const foundItem = currentPtItems.find(i => i.id === itemId && i.dateDeleted === undefined);

    let found = false;
    if (foundItem) {
        found = true;
    }

    if (!found) {
        res.status(404);
        res.json(null);
    } else {
        res.json(foundItem);
    }
});

router.post('/item', (req: Request, res: Response) => {
    if (req.body) {
        if (req.body.item) {
            const newItem = <PtItem>req.body.item;
            newItem.id = getNextIntergerId(currentPtItems);
            const newItems = [newItem, ...currentPtItems];
            currentPtItems = newItems;
            res.json(newItem);
        } else {
            res.json(null);
        }
    }
});

router.put('/item/:id', (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);

    if (req.body) {
        if (req.body.item) {
            let found = false;
            const modifiedItem = <PtItem>req.body.item;

            const foundItem = currentPtItems.find(i => i.id === itemId && i.dateDeleted === undefined);

            if (foundItem) {
                found = true;
                const updatedItems = currentPtItems.map(i => {
                    if (i.id === itemId) { return modifiedItem; } else { return i; }
                });

                currentPtItems = updatedItems;
            }
            if (!found) {
                res.status(404);
            }
            res.json(modifiedItem);
        }
    }
});

router.delete('/item/:id', (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id);
    const foundItem = currentPtItems.find(i => i.id === itemId && i.dateDeleted === undefined);
    if (foundItem) {
        const itemToDelete = Object.assign({}, foundItem, { dateDeleted: new Date() });
        const updatedItems = currentPtItems.map(i => {
            if (i.id === itemId) { return itemToDelete; } else { return i; }
        });
        currentPtItems = updatedItems;
        res.json({
            id: itemId,
            result: true
        });

    } else {
        res.status(404);
        res.json({
            id: itemId,
            result: false
        });
    }
});


router.post('/task', (req: Request, res: Response) => {
    if (req.body) {
        if (req.body.task && req.body.itemId) {

            const newTask = <PtTask>req.body.task;
            const itemId = parseInt(req.body.itemId);

            const foundItem = currentPtItems.find(i => i.id === itemId && i.dateDeleted === undefined);

            newTask.id = getNextIntergerId(foundItem.tasks);

            const updatedTasks = [newTask, ...foundItem.tasks];

            const updatedItem = Object.assign({}, foundItem, { tasks: updatedTasks });

            const updatedItems = currentPtItems.map(i => {
                if (i.id === itemId) { return updatedItem; } else { return i; }
            });

            currentPtItems = updatedItems;

            res.json(newTask);
        } else {
            res.json(null);
        }
    }
});

router.put('/task/:id', (req: Request, res: Response) => {
    const taskId = req.params.id;

    if (req.body) {
        if (req.body.task && req.body.itemId) {
            let found = false;
            const modifiedTask = <PtTask>req.body.task;
            const itemId = parseInt(req.body.itemId);

            const foundItem = currentPtItems.find(i => i.id === itemId && i.dateDeleted === undefined);

            const updatedTasks = foundItem.tasks.map(t => {
                if (t.id === modifiedTask.id) {
                    found = true;
                    return modifiedTask;
                } else { return t; }
            });

            const updatedItem = Object.assign({}, foundItem, { tasks: updatedTasks });

            const updatedItems = currentPtItems.map(i => {
                if (i.id === itemId) { return updatedItem; } else { return i; }
            });

            currentPtItems = updatedItems;

            if (!found) {
                res.status(404);
            }
            res.json({
                id: taskId,
                result: modifiedTask
            });
        }
    }
});

router.post('/comment', (req: Request, res: Response) => {
    if (req.body) {
        if (req.body.comment && req.body.itemId) {

            const newComment = <PtComment>req.body.comment;
            const itemId = parseInt(req.body.itemId);

            const foundItem = currentPtItems.find(i => i.id === itemId && i.dateDeleted === undefined);

            newComment.id = getNextIntergerId(foundItem.comments);

            const updatedComments = [newComment, ...foundItem.comments];

            const updatedItem = Object.assign({}, foundItem, { comments: updatedComments });

            const updatedItems = currentPtItems.map(i => {
                if (i.id === itemId) { return updatedItem; } else { return i; }
            });

            currentPtItems = updatedItems;

            res.json(newComment);
        } else {
            res.json(null);
        }
    }
});

router.get('/photo/:id', (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const user = currentPtUsers.find(u => u.id === userId && u.dateDeleted === undefined);
    console.log(user);

    let found = false;
    if (user) {
        found = true;
    }

    if (!found) {
        res.status(404);
        res.json(null);
    } else {
        //res.setHeader('Content-Type', 'image/png');
        res.sendFile(`${__dirname}/${user.avatar}`);
    }
});

router.delete('/users/:id', (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);

    const user = currentPtUsers.find(u => u.id === userId && u.dateDeleted === undefined);

    if (user) {
        user.dateDeleted = new Date();
        res.json({
            id: userId,
            result: true
        });
    } else {
        res.status(404);
        res.json({
            id: userId,
            result: false
        });
    }
});

router.put('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    const modifiedUser = req.body;

    let found = false;

    const newUsers = currentPtUsers.map(user => {
        if (user.id === userId && user.dateDeleted === undefined) {
            found = true;
            return modifiedUser;
        } else {
            return user;
        }
    });
    currentPtUsers = newUsers;

    if (!found) {
        res.status(404);
    }
    res.json({
        id: userId,
        result: modifiedUser
    });
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


const httpServer = http.createServer(app);
//const httpsServer = https.createServer(sslOptions, app);

httpServer.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
});
//httpsServer.listen(8443);
