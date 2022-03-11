## Russia Sanctions - CloudFront (AWS Serverless Application Model)

This mini application deploys a single AWS Lambda function (with
associated resources) which scans CloudFront Viewer Request events for
Russian or Belarusian IP addresses. If the client IP matches, the
request is blocked and a message explaining the war and these sanctions
is displayed.

For all other requests, the viewer request is not amended in any way.

### Installation

#### Via CLI

Locally:

```
aws cloudformation create-stack --stack-name <value> \
  --template-body file://template.yaml
```

Via S3:

```
aws cloudformation create-stack --stack-name <value> \
  --template-url s3://russia-sanctions/template.yaml
```

#### Via the Console

[Here](https://console.aws.amazon.com/lambda/home?region=us-east-1#/create/app?applicationId=arn:aws:serverlessrepo:us-east-1:761449685630:applications/Russia-Sanctions)
 
 Once deployed, add the created Lambda function to any desired
 CloudFront Distribution's *Viewer Request* Association.
