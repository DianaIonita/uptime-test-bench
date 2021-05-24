process.env.AWS_REGION = 'eu-west-1';
import { DynamoDB } from '@uptime.app/aws-sdk-helpers';
import fs from 'fs';

async function queryStagingDynamo() {
    const dynamo = new DynamoDB.DocumentClient();

    let params: any = {
        TableName: 'staging-hack-query-service-enriched-hack-cache',
        ProjectionExpression: 'id, v'
    }

    let hacks: any[] = [];
    do {
        const result = await dynamo.scan(params).promise();
        hacks = hacks.concat(result.Items);
        params.ExclusiveStartKey = result.LastEvaluatedKey;
    }
    while (params.ExclusiveStartKey);

    const sorted = hacks.sort((a, b) => a.id <= b.id ? -1 : 1);
    console.log(`Found ${sorted.length} hacks`);
    fs.writeFileSync('./staging-enriched-hack-cache.json', JSON.stringify(hacks));
}

queryStagingDynamo()
    .then(() => {
        console.log('Done');
    })
    .catch(error => {
        console.log(error);
        console.log(error.stack);
        process.exit(1);
    });
