import { Stack, StackProps, CfnOutput } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export class Ec2Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "VPC", {
      maxAzs: 1,
      subnetConfiguration: [
        {
          name: "private",
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

    const ec2Sg = new ec2.SecurityGroup(this, "ssh-ec2-security-group", {
      vpc,
    });
    ec2Sg.addIngressRule(ec2.Peer.ipv4("217.180.228.168/32"), ec2.Port.tcp(22));

    const ec2Instance = new ec2.Instance(this, "LinuxEc2Instance", {
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T2,
        ec2.InstanceSize.MICRO
      ),
      machineImage: ec2.MachineImage.latestAmazonLinux(),
      keyName: "cdk-ec2",
      securityGroup: ec2Sg,
      vpc,
    });

    new CfnOutput(this, "LinuxEc2InstanceID", {
      exportName: "LinuxEc2InstanceID",
      value: ec2Instance.instanceId,
    });

    new CfnOutput(this, "LinuxEc2InstancePublicDns", {
      exportName: "LinuxEc2InstancePublicDns",
      value: ec2Instance.instancePublicDnsName,
    });
  }
}
