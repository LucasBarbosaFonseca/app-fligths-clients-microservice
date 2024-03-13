import { Item } from 'dynamoose/dist/Item';
import * as dynamoose from 'dynamoose';

import { UserSchema } from './User.schema';
import { User } from '../../domain/User';

export interface DynamooseExtendedUser extends Item, User { }

export const UserModel = dynamoose.model<DynamooseExtendedUser>('App-Travels-Clients-Microservice-Users-develop', UserSchema, {
    create: false,
    waitForActive: false
});