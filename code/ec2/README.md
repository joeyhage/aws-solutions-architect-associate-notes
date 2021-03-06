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

## EC2 management - AWS CLI

- Start: `aws ec2 start-instances --instance-ids i-123`
- Stop: `aws ec2 stop-instances --instance-ids i-123`
- Terminate: `aws ec2 terminate-instances --instance-ids i-123`
