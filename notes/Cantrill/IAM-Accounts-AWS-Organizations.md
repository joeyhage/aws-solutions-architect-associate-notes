# IAM, Accounts and AWS Organizations

## IAM identity policies

### IAM policy document

- 1+ statements
- allow or deny
- if no explicit allow, then implicitly denied
- rule precedence
  - explicit denies -> explicit allows -> implicitly denied
  - i.e. deny -> allow -> deny

### Managed IAM policies

- best practice because reusable
- two types: AWS defined and customer defined
- normal, default "business" rights
- low management overhead
- use inline policies for exceptions

## IAM users

- 📝 identity used for long-term access to AWS account
  - 📝 used 99% of the time for named, tangible things that need access
  - 📝 could be humans, applications, service accounts
- authenticates via one of two ways: username and password (human) or access keys (app/service account)

## ARNs

- syntax:
  - `arn:partition:service:region:account-id:resource-id`
  - `arn:partition:service:region:account-id:resource-type/resource-id`
  - `arn:partition:service:region:account-id:resource-type:resource-id`
- partition is almost always `aws` except beijing/china is `aws-cn`
- sometimes region/account-id can be omitted
  - `arn:aws:s3:::catgifs` - no region or account id needed because S3 buckets are globally unique
- ❗ common gotchas with ARNs
  - `arn:aws:s3:::catgifs` is very different from `arn:aws:s3:::catgifs/*`
  - `arn:aws:s3:::catgifs` grants access to bucket and operations on bucket
  - `arn:aws:s3:::catgifs/*` grants access to objects in bucket and operations on those objects
  - these two **do not** overlap

### IAM exam tips

- 📝 5,000 IAM users per account
- 📝 IAM user can be member of max 10 groups
- can be a system design limit
  - 📝 alternatives: IAM roles and identity federation

## IAM groups

- containers for IAM users - used for organization and to ease management
  - 📝 cannot login to a group
- 📝 could have all 5,000 IAM users in an account in one IAM group
- 📝 no "all users" IAM group
- 📝 cannot nest IAM groups, groups within groups
- soft limit of 300 groups per account, can be increased by support
- 📝 groups are not a true identity, cannot be referred to as a Principal or from an IAM policy

## IAM roles
