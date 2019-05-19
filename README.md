### This project is following the tutorial of [aws-lambda-ses-forwarder library][aws-lambda-ses-forwarder-link] and made a little enhancement on it

#### Build
1. Run `npm install`
2. Run `npm build`
3. Then upload the aws-forward-email.zip to your AWS Lambda function

#### Current limitations
- Now ONLY support forwarding ONE email address defined in Route53 to ONE email from other email provider 

#### Available environment variables in AWS Lambda function
- S3_BUCKET_NAME: the S3 name used to store the email. e.g: your-s3-bucket
- FROM_EMAIL: the email address hosted on Route53. e.g: info@your-domain.com
- TO_EMAIL:  the email address used to receive the email form your client. e.g: your-name@gmail.com

#### Remarks
- Please read [aws-lambda-ses-forwarder library][aws-lambda-ses-forwarder-link] carefully

[aws-lambda-ses-forwarder-link]: https://github.com/arithmetric/aws-lambda-ses-forwarder
