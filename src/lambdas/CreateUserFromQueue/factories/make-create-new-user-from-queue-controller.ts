import { UserModel } from "@common/infrastructure/dynamoose/User.model";
import { UserDynamooseRepository } from "@common/ports/repositories/UserDynamooseRepository";
import { CreateUserFromQueueUseCase } from "../useCase/create-user-from-queue-use-case";
import { CreateUserFromQueueController } from "../controller/create-user-from-queue-controller";

export function makeCreateNewUserFromQueue() {
    const userRepository = new UserDynamooseRepository(UserModel);

    const useCase = new CreateUserFromQueueUseCase(userRepository);

    const controller = new CreateUserFromQueueController(useCase);

    return controller;
}