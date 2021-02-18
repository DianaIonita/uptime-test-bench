import { logger } from '@uptime.app/logger';

export const handler = () => {
    const context = {
        transactionId: 'transactionId',
        invocationId: 'invocationId',
        causationId: 'causationId',
        correlationIds: []
    };
    logger.log('Log message', context);
    logger.debug('Debug message', context);
    logger.info(`MONITORING|{"namespace":"uptime-test-bench","data":{"unit":"Count","value":1,"name":"error-on-something","timestamp":${Date.now()}}}`, context);
};
