import { SQSBatchItemFailure, SQSEvent } from "aws-lambda";
import { CreateUserFromQueueUseCase } from "../useCase/create-user-from-queue-use-case";

export class CreateUserFromQueueController {
    constructor(private readonly _createUserFromQueueUseCase: CreateUserFromQueueUseCase) { }

    async exec(event: SQSEvent) {
        const { Records } = event;

        const batchItemFailures: SQSBatchItemFailure[] = [];

        const results = await Promise.allSettled(
            Records.map(async (record) => {
                const { body } = record;

                const returnResult = JSON.parse(body);

                return this._createUserFromQueueUseCase.exec(returnResult);
            })
        );

        results.forEach((result, i) => {
            if (result.status === 'rejected') {
                batchItemFailures.push({
                    itemIdentifier: Records[i].messageId,
                });
            }
        });

        return {
            batchItemFailures,
        };
    }
}