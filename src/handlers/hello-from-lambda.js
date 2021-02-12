/**
 * A Lambda function that returns a static string
 */
exports.helloFromLambdaHandler = async () => {
    const message = 'Hello from Lambda!';

    console.info(`${message}`);
    
    return message;
}
