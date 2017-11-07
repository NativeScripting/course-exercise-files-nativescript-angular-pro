import * as express from 'express';
import { Express, Router, Request, Response } from 'express';
import * as http from 'http';
import { MessageObject } from 'app/models/domain/message-object.model';

const app: Express = express();

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const messageObject: MessageObject = {
        message: 'Hi there, welcome to NativeScripting!'
    };
    res.json(messageObject);
});

//RPS API functions ...
router.get('/backlog', (req: Request, res: Response) => {
    //return backlog items...
});

app.use('/api', router);

const httpServer = http.createServer(app);
const port = 8080;

httpServer.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
});
