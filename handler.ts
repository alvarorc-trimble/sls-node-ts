import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context): Promise<APIGatewayProxyResult> => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Testing!',
    input: event,
  }, null, 2),
})
