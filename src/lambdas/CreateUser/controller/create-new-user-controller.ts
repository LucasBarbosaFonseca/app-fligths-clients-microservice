import { APIGatewayEvent } from 'aws-lambda';
import { CreateNewUserUseCase } from '../useCase/create-new-user-use-case';
import { Controller, Response } from '@common/interfaces';
import { InvalidInputError } from '../../../common/helpers/errors/InvalidInputError';

export class CreateNewUserController implements Controller<APIGatewayEvent, Response> {
    constructor(private readonly _CreateNewUserUseCase: CreateNewUserUseCase) { }

    async exec(event: APIGatewayEvent) {
        if (!event.body) throw new InvalidInputError('Request body is missing!');

        const body = JSON.parse(event.body);

        const result = await this._CreateNewUserUseCase.exec({ ...body });

        return {
            statusCode: 201,
            body: JSON.stringify(result),
        };
    }
}