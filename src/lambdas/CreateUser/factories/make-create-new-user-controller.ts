import { UserDynamooseRepository } from "@common/ports/repositories/UserDynamooseRepository";
import { UserModel } from "@common/infrastructure/dynamoose/User.model";
import { CreateNewUserUseCase } from "../useCase/create-new-user-use-case";
import { CreateNewUserController } from "../controller/create-new-user-controller";

export function makeCreateNewUser() {
    const userRepository = new UserDynamooseRepository(UserModel);

    const useCase = new CreateNewUserUseCase(userRepository);

    const controller = new CreateNewUserController(useCase);

    return controller;
}