import { User } from "@common/domain/User";

export interface UserRepository {
    create(user: User): Promise<User>;
};