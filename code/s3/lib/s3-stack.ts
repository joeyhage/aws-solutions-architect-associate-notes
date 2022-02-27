import { Stack, StackProps, CfnOutput } from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class S3Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, "s3-koala-campaign-bucket", {
      bucketName: "koala-campaign-joeyhage-1",
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    new CfnOutput(this, "s3-koala-campaign-bucket-arn", {
      exportName: "s3-koala-campaign-bucket-arn",
      value: s3Bucket.bucketArn,
    });
  }
}
