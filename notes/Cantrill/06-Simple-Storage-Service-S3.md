# Simple Storage Service (S3)

## S3 Security

- private by default
- only root user of account has access by default

## S3 bucket policies

- form of resource policy
- like identity policies, but inverse
  - identity policies cannot grant an identity from another account any access
- resource policies are attached to resources and can allow/deny access from same or different aws accounts
- resource policies can allow/deny anonymous principles
- `Principal`: which identities (who) the policy applies to
- explicit deny takes precedence over allow
- block public access - no matter what the policy says, these settings apply to public access (anonymous principals)

## ACLs on objects and bucket

- subresource
- legacy (not recommended)
- very limited flexibility / customization of access

## 📝 Identity vs Resource policies

- Choose Identity when:
  - controlling multiple resources (easier and not all resource types support resource policies)
  - you prefer using IAM
  - same account access
- Resource policy (bucket policy)
  - just controlling s3 access
  - anonymous or cross-account

## Static website hosting

- allows access via HTTP (blogs)
- index and error documents are set
- good for: offloading static images/media from a dynamic page
- out of band pages: host maintenance, status, error, fallback pages to provide a better customer experience if EC2 server was offline

## Object versioning

- controlled at bucket level
- 📝 cannot be disabled once enabled
  - can be suspended but that doesn't delete anything
- without versioning, objects are replaced if an object with the same key (name) is uploaded
- with versioning, operations which would modify objects instead generate a new version
- previous objects can be retrieved from s3 - defaults to latest/current object though
- deletion by default results in aws creating a delete marker - can be undone
- version delete: specify version id when deleting an object (deletes permanently)

## MFA Delete

- Enabled in versioning configuration
- MFA is required to change bucket versioning state and to delete versions
  - API call requires serial id of MFA and code