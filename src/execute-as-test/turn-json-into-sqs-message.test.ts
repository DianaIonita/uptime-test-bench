import { SQSEvent } from 'aws-lambda';
import fs from 'fs';

describe('Turn json into an SQS message', () => {
    test('an UpdateSegment command', () => {
        const command = JSON.parse(fs.readFileSync('src/execute-as-test/update-segment-command.json', 'utf-8'));
        const wrapped = shapeAsSnsToSqsEvent(command);
        console.log(JSON.stringify(wrapped));
    });
});


const snsRecordFor = (event: any) => {
    const snsRecord = {
        Type: 'Notification',
        Message: JSON.stringify(event),
    };
    return snsRecord;
};

const shapeAsSnsToSqsEvent = (event: any): SQSEvent => {
    return {
        Records: [
            {
                body: JSON.stringify(snsRecordFor(event)),
                eventSource: 'aws:sqs',
                receiptHandle: '',
                attributes: {
                    ApproximateReceiveCount: '1',
                    ApproximateFirstReceiveTimestamp: '1',
                    SenderId: 'sender',
                    SentTimestamp: '123'
                },
                awsRegion: 'eu-west-1',
                messageId: 'messageId',
                eventSourceARN: 'arn',
                md5OfBody: 'md5',
                messageAttributes: {}
            }
        ]
    };
};
