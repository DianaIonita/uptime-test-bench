process.env.AWS_REGION = 'eu-west-1';
import { DynamoDB } from '@uptime.app/aws-sdk-helpers';
import fs from 'fs';

async function queryProdDynamo() {
    const dynamo = new DynamoDB.DocumentClient();

    let params: any = {
        TableName: 'prod-hack-enrichment-service-enriched-hacks',
        ProjectionExpression: 'id, v'
        // FilterExpression: 'attribute_not_exists(#s.overview.speech[0].withoutHeading.timestamps)',
        // ExpressionAttributeNames: {
        //     '#s': 'segments'
        // }
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
    fs.writeFileSync('./enriched-hacks.json', JSON.stringify(hacks));
}

queryProdDynamo()
    .then(() => {
        console.log('Done');
    })
    .catch(error => {
        console.log(error);
        console.log(error.stack);
        process.exit(1);
    });
