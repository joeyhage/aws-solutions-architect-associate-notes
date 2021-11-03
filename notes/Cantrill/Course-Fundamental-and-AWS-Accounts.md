# Course Fundamentals and AWS Accounts

## AWS Account Basics

- Root user account is the only identity that has permissions by default
- Permissions need to be explicitly granted to IAM identities
- Create separate accounts for different environments (e.g. sit, uat, prod) and different teams
  - helps contain the impact of errors/exploits
  - isolates identities and resources by default
- there is more potential for misconfiguration the older accounts are

## Identity and Access Management (IAM) Basics

- An AWS account and its root user are more or less the same thing
- Not possible to restrict access of root user
- 📝 Every account has its own copy of IAM (database) and IAM is always secure across all regions
  - full trust between an AWS account and its copy of IAM
- IAM Policies: applied to users and/or groups and/or roles
- IAM has No cost
- IAM is an identity provider that authenticates and authorizes
- IAM cannot control external accounts/users
- can facilitate identity federation and MFA

### IAM types

- **users**: humans or applications
  - can have IAM access keys
- **groups**: collection of related users
- **roles**: used by AWS services or for granting external access
  - generally used when there is an uncertain number of things that will be assigned to the role

### Best practices

- root user is only used for account setup
- create IAM admin user with same permissions as root user so root user is no longer used

## IAM Access Keys

- IAM user has a username and at most one password
  - password is optional if the IAM user is for programmatic access via an access key
- IAM user can have up to 2 access keys
- Access keys can be created, deleted, made active, or made inactive
- Secret access key can only be viewed once
- Access keys are a form of public key cryptography
  - Access keys are used to sign a request and AWS can verify the request using the public keys
- Access keys are not automatically rotated
