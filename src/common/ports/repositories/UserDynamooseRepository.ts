import { UserRepository } from "@common/interfaces/repositories/UserRepository";
import { ModelType } from 'dynamoose/dist/General';
import { DynamooseExtendedUser } from '../../infrastructure/dynamoose/User.model';
import { UserMapper } from '../../mappers/UserMapper';
import { User } from "@common/domain/User";

export class UserDynamooseRepository implements UserRepository {
    constructor(private readonly _userModel: ModelType<DynamooseExtendedUser>) { }

    async create(user: User): Promise<User> {
        try {
            console.log('[UserDynamooseRepository][create] Creating user');

            const persistenceUser = UserMapper.toPersistence(user);

            const userCreated = await this._userModel.create(persistenceUser);

            console.log('[UserDynamooseRepository][create] User created');

            return UserMapper.toDomain(userCreated);
        } catch (error) {
            console.log('[UserDynamooseRepository][create] Error on create method ');
            console.error(error);

            throw new Error('Internal Server Error');
        }
    }
}