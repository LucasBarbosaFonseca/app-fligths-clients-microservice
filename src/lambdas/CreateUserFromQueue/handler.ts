import { SQSBatchResponse, SQSEvent } from "aws-lambda";
import { makeCreateNewUserFromQueue } from "./factories/make-create-new-user-from-queue-controller";

const controller = makeCreateNewUserFromQueue();

// sls invoke local -f CreateUserFromQueue --stage develop -p ./src/events/CreateUserFromQueueEvents/partialBatchEvent.json
export const handler = async (event: SQSEvent): Promise<SQSBatchResponse> => {
    const response = await controller.exec(event);

    return response;
}