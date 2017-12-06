
//nativescript imports
import * as fileSystemModule from 'fs';

//3rd party imports
import * as faker from 'faker';
import * as _ from 'lodash';


//app imports
import { toTitleCase } from "../util/string-utils";
import { PtUserWithAuth, PtUserAuthInfo } from '../shared/models';
import {
    PtItem,
    PtTask,
    PtComment
} from '../shared/models/domain';
import { PriorityEnum, StatusEnum, GenderEnum, ItemTypeEnum } from '../shared/models/domain/enums';
import { PtItemType } from '../shared/models/domain/types';


const NUM_PT_ITEMS = 50;
const NUM_USERS = 20;


export function generatePTItems(users: Array<PtUserWithAuth>): Array<PtItem> {
    const items = _.times(NUM_PT_ITEMS, (index: number) => {
        return generatePTItem(index, users);
    });
    return items;
}

export function generatePTItem(index: number, users: Array<PtUserWithAuth>): PtItem {
    const date = faker.date.past(1);
    const title = toTitleCase(faker.company.bs());

    const typeStr = faker.random.arrayElement(Object.getOwnPropertyNames(ItemTypeEnum));
    const type = <ItemTypeEnum>typeStr;

    const priorityStr = faker.random.arrayElement(Object.getOwnPropertyNames(PriorityEnum));
    const priority = <PriorityEnum>priorityStr;

    const statusStr = faker.random.arrayElement(Object.getOwnPropertyNames(StatusEnum));
    const status = <StatusEnum>statusStr;

    const ptItem: PtItem = {
        id: index + 1,
        title: title,
        description: faker.lorem.sentence(10, 10),
        dateCreated: date,
        dateModified: date,
        type: type,
        estimate: _.random(1, 24),
        priority: priority,
        status: status,
        assignee: _.sample(users),
        tasks: generateTasks(),
        comments: generateComments(users)
    };

    return ptItem;
}

export function generateTasks(): Array<PtTask> {
    const numTasks = _.random(5, 20);
    const tasks = _.times(numTasks, (index: number) => {
        return generateTask(index);
    });
    return tasks;
}

export function generateTask(index: number): PtTask {
    const date = faker.date.past(1);
    const title = toTitleCase(faker.company.bs());
    const task: PtTask = {
        id: index + 1,
        title: title,
        dateCreated: date,
        dateModified: date,
        completed: faker.random.boolean()
    };
    return task;
}

export function generateUsersBase64Avatars(): Array<PtUserWithAuth> {
    const avatarsMenBase64 = getUserAvatars('app/images/avatars/base64/men.txt');
    const avatarsWomenBase64 = getUserAvatars('app/images/avatars/base64/women.txt');

    const users = _.times(NUM_USERS, (index: number) => {
        return generateUserBase64Avatar(index, avatarsMenBase64, avatarsWomenBase64);
    });
    const userMe = getMeUserBase64(users.length);
    users.unshift(userMe);
    return users;
}

export function generateUsers(): Array<PtUserWithAuth> {
    const users = _.times(NUM_USERS, (index: number) => {
        return generateUser(index);
    });

    const userMe = getMeUser(users.length);
    users.unshift(userMe);
    return users;
}

export function getMeUserBase64(index: number): PtUserWithAuth {
    const avatarMe = getUserAvatars('app/images/avatars/base64/me.txt')[0];
    const date = faker.date.past(1);
    const userMe: PtUserWithAuth = {
        id: index + 1,
        fullName: 'Alex Ziskind',
        avatar: avatarMe,
        gender: GenderEnum.Male,
        dateCreated: date,
        dateModified: date
    };
    return userMe;
}

export function getMeUser(index: number): PtUserWithAuth {
    const date = faker.date.past(1);
    const userMe: PtUserWithAuth = {
        id: index + 1,
        fullName: 'Alex Ziskind',
        avatar: 'app/images/avatars/me/me.png',
        gender: GenderEnum.Male,
        dateCreated: date,
        dateModified: date,
        authInfo: { email: 'alex@email.com', password: 'nuvious' }
    };
    return userMe;
}

export function generateUserBase64Avatar(index: number, avatarsMen: string[], avatarsWomen: string[] = []): PtUserWithAuth {
    const genderBool = faker.random.boolean();
    const firstName = faker.name.firstName(genderBool ? 1 : 0);
    const lastName = faker.name.lastName(genderBool ? 1 : 0);
    const date = faker.date.past(1);
    var avatar;
    if (avatarsWomen) {
        avatar = genderBool ? _.sample(avatarsMen) : _.sample(avatarsWomen);
    } else {
        avatar = _.sample(avatarsMen);
    }

    const user: PtUserWithAuth = {
        id: index + 1,
        fullName: firstName + ' ' + lastName,
        avatar: avatar,
        gender: genderBool ? GenderEnum.Male : GenderEnum.Female,
        dateCreated: date,
        dateModified: date
    };
    return user;
}

export function generateUser(index: number): PtUserWithAuth {
    const genderBool = faker.random.boolean();
    const firstName = faker.name.firstName(genderBool ? 1 : 0);
    const lastName = faker.name.lastName(genderBool ? 1 : 0);
    const date = faker.date.past(1);

    const avatar = `app/images/avatars/${genderBool ? 'males' : 'females'}/image-${index + 1}.png`;

    const authInfo: PtUserAuthInfo = {
        email: `${firstName}.${lastName}@${faker.internet.domainName}`,
        password: 'nuvious',
    };

    const user: PtUserWithAuth = {
        id: index + 1,
        fullName: firstName + ' ' + lastName,
        avatar: avatar,
        gender: genderBool ? GenderEnum.Male : GenderEnum.Female,
        dateCreated: date,
        dateModified: date,
        authInfo: authInfo
    };
    return user;
}

export function generateComments(users: Array<PtUserWithAuth>): Array<PtComment> {
    const numComments = _.random(0, 5);
    const comments = _.times(numComments, (index: number) => {
        return generateComment(index, users);
    });
    return comments;
}

export function generateComment(index: number, users: Array<PtUserWithAuth>): PtComment {
    const date = faker.date.past(1);
    const commentText = toTitleCase(faker.lorem.sentence(20, 40));

    const comment: PtComment = {
        id: index + 1,
        title: commentText,
        dateCreated: date,
        dateModified: date,
        user: _.sample(users)
    };
    return comment;
}

export function getUserAvatars(path) {
    const avatarList: Array<string> = [];

    const fileBuffer = fileSystemModule.readFileSync(path);
    const fileText = fileBuffer.toString();

    const lines = fileText.split('\n');
    for (let i = 0; i < lines.length; i++) {
        avatarList.push('data:image/png;base64,' + lines[i]);
    }
    return avatarList;
}

