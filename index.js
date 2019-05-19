// https://github.com/arithmetric/aws-lambda-ses-forwarder

var LambdaForwarder = require("aws-lambda-ses-forwarder");

exports.handler = function(event, context, callback) {
    // See aws-lambda-ses-forwarder/index.js for all options.
    const s3BucketName = process.env.S3_BUCKET_NAME;
    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    const overrides = {
        config: {
            fromEmail: fromEmail,
            emailBucket: s3BucketName,
            emailKeyPrefix: "",
            forwardMapping: {
                [fromEmail]: [
                    toEmail
                ]
            }
        }
    };
    LambdaForwarder.handler(event, context, callback, overrides);
};