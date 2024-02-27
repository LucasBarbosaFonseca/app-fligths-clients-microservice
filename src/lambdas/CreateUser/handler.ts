import { SQSBatchResponse, SQSEvent } from 'aws-lambda';
import { makeCreateNewUser } from './factories/make-create-new-user-controller';

const controller = makeCreateNewUser();

// sls invoke local -f RequestNewSaleDraft --stage develop -p ./src/events/requestNewSaleDraft/partialBatchEvent.json
export const handler = async (event: SQSEvent): Promise<SQSBatchResponse> => {
  const response = await controller.exec(event);

  return response;
}
