export const handler = (event: any, context: any, callback: any) => {
    console.log(`Event: ${JSON.stringify(event)}`);
    const response = {
        statusCode: 200,
        body: JSON.stringify({ ...event, requestDate: new Date().toISOString() })
    }
    callback(null, response);
};
