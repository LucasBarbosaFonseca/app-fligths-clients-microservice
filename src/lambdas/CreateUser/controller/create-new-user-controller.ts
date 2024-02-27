import { SQSEvent, SQSBatchResponse, SQSBatchItemFailure } from 'aws-lambda';
import { CreateNewUserUseCase } from '../useCase/create-new-user-use-case';

export class CreateNewUserController {
    constructor(private readonly _CreateNewUserUseCase: CreateNewUserUseCase) { }

    async exec(event: SQSEvent): Promise<SQSBatchResponse> {
        const { Records } = event;

        const batchItemFailures: SQSBatchItemFailure[] = [];

        const results = await Promise.allSettled(
            Records.map(async (record) => {
                const { body } = record;

                const returnResult = JSON.parse(body);

                return this._CreateNewUserUseCase.exec();
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