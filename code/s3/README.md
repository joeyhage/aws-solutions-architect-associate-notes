# Welcome to your CDK TypeScript project

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## S3 management - AWS CLI


- List buckets: `aws s3api list-buckets`
- List bucket objects: `aws s3api list-objects-v2 --bucket bucket_name`
- Delete bucket: `aws s3api delete-bucket --bucket bucket_name`
- Empty bucket: `aws s3 rm s3://bucket-name --recursive`
