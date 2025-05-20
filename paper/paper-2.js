const questions = [
  {
    question:
      "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    options: [
      "AWS Organizations.",
      "AWS Trusted Advisor.",
      "IAM User Groups.",
      "AWS Config.",
    ],
    answer: ["a"],
  },
  {
    question: "Which service provides object-level storage in AWS?",
    options: [
      "Amazon EBS.",
      "Amazon Instance Store.",
      "Amazon EFS.",
      "Amazon S3.",
    ],
    answer: ["d"],
  },
  {
    question:
      "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
    options: [
      "AWS Elastic Load Balancer.",
      "AWS Budgets.",
      "AWS Auto Scaling.",
      "AWS Cost Explorer.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which S3 storage class is best for data with unpredictable access patterns?",
    options: [
      "Amazon S3 Intelligent-Tiering.",
      "Amazon S3 Glacier Flexible Retrieval.",
      "Amazon S3 Standard.",
      "Amazon S3 Standard-Infrequent Access.",
    ],
    answer: ["a"],
  },
  {
    question:
      "What is the AWS database service that allows you to upload data structured in key-value format?",
    options: [
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon RDS.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
    options: [
      "You have to pay a start-up fee when launching a new instance for the first time.",
      "The on-demand instances follow the AWS pay-as-you-go pricing model.",
      "With on-demand instances, no longer-term commitments or upfront payments are needed.",
      "When using on-demand Linux instances, you are charged per second based on an hourly rate.",
    ],
    answer: ["a"],
  },
  {
    question:
      "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
    options: [
      "AWS Trusted Advisor.",
      "Amazon Inspector.",
      "Amazon SNS.",
      "Amazon CloudWatch.",
      "Concierge Support Team.",
    ],
    answer: ["a", "b"],
  },
  {
    question:
      "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    options: ["Encrypted keys.", "Email verification.", "AWS KMS.", "AWS MFA."],
    answer: ["d"],
  },
  {
    question:
      "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
    options: [
      "AWS Knowledge Center.",
      "AWS Health Dashboard.",
      "Infrastructure Event Management.",
      "AWS Support Concierge Service.",
    ],
    answer: ["c"],
  },
  {
    question:
      "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
    options: [
      "Amazon RDS.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon CloudWatch.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the below is a best-practice when designing solutions on AWS?",
    options: [
      "Invest heavily in architecting your environment, as it is not easy to change your design later.",
      "Use AWS reservations to reduce costs when testing your production environment.",
      "Automate wherever possible to make architectural experimentation easier.",
      "Provision a large compute capacity to handle any spikes in load.",
    ],
    answer: ["c"],
  },
  {
    question:
      "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    options: [
      "Penetration testing is not allowed in AWS.",
      "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
      "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
      "The AWS customers are only allowed to perform penetration testing on services managed by AWS.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
    options: [
      "Amazon SQS.",
      "Amazon SES.",
      "AWS Direct Connect.",
      "Amazon Connect.",
    ],
    answer: ["a"],
  },
  {
    question:
      "The principle 'design for failure and nothing will fail' is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    options: [
      "Multi-factor authentication.",
      "Availability Zones.",
      "Elastic Load Balancing.",
      "Penetration testing.",
      "Vertical Scaling.",
    ],
    answer: ["b", "c"],
  },
  {
    question:
      "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    options: [
      "AWS VPN.",
      "AWS Subnets.",
      "AWS Dedicated Hosts.",
      "Amazon VPC.",
    ],
    answer: ["d"],
  },
  {
    question:
      "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "Managing environmental events of AWS data centers.",
      "Protecting the confidentiality of data in transit in Amazon S3.",
      "Controlling physical access to AWS Regions.",
      "Ensuring that the underlying EC2 host is configured properly.",
      "Patching applications installed on Amazon EC2.",
    ],
    answer: ["b", "e"],
  },
  {
    question:
      "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
    options: [
      "Amazon VPC.",
      "Amazon CloudWatch.",
      "Amazon S3.",
      "Amazon EC2.",
      "AWS Lambda.",
    ],
    answer: ["d", "e"],
  },
  {
    question:
      "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: [
      "Amazon EBS.",
      "Amazon SQS.",
      "Amazon S3.",
      "Amazon Instance store.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    options: ["Instance Password.", "Key pairs.", "Access Keys.", "MFA."],
    answer: ["c"],
  },
  {
    question: "What does Amazon ElastiCache provide?",
    options: [
      "In-memory caching for read-heavy applications.",
      "An Ehcache compatible in-memory data store.",
      "An online software store that allows Customers to launch pre-configured software with just few clicks.",
      "A domain name system in the cloud.",
    ],
    answer: ["a"],
  },
  {
    question:
      "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
    options: [
      "AWS WAF.",
      "AWS Trusted Advisor.",
      "AWS Organizations.",
      "Amazon Config.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    options: [
      "Dedicated Instances.",
      "Dedicated Hosts.",
      "On-demand Instances.",
      "Reserved Instances.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    options: [
      "Free support for all enterprise customers.",
      "Automatic data protection.",
      "Reduced Capital Expenditure (CapEx).",
      "AWS holds responsibility for managing customer applications.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    options: [
      "Always use Global Services in your architecture rather than Regional Services.",
      "Always choose to pay as you go.",
      "Treat servers as fixed resources.",
      "Automate wherever possible.",
      "Remove single points of failure.",
    ],
    answer: ["d", "e"],
  },
  {
    question:
      "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
    options: [
      "AWS Direct Connect.",
      "Amazon CloudFront.",
      "AWS Snowball.",
      "Amazon Route 53.",
    ],
    answer: ["a"],
  },
  {
    question:
      "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    options: [
      "Internet gateways.",
      "Virtual Private Cloud.",
      "Security Groups.",
      "Amazon CloudFront.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    options: ["Amazon Cognito.", "AWS IAM.", "Amazon Aurora.", "AWS WAF."],
    answer: ["d"],
  },
  {
    question:
      "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    options: ["Amazon EMR.", "Amazon MQ.", "Amazon SNS.", "Amazon SQS."],
    answer: ["a"],
  },
  {
    question:
      "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    options: [
      "Monitoring network performance.",
      "Installing software on EC2 instances.",
      "Creating hypervisors.",
      "Configuring Access Control Lists (ACLs).",
      "Hardware maintenance.",
    ],
    answer: ["c", "e"],
  },
  {
    question:
      "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    options: [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon EC2.",
      "Amazon RDS.",
    ],
    answer: ["c"],
  },
  {
    question:
      "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    options: [
      "MFA.",
      "Security tokens.",
      "A user name and password.",
      "Access keys.",
    ],
    answer: ["c"],
  },
  {
    question:
      "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    options: ["IAM.", "An internet gateway.", "EBS Snapshot.", "AMI."],
    answer: ["d"],
  },
  {
    question:
      "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
    options: [
      "Reserved Compute capacity.",
      "Eliminating Single Points of Failure (SPOFs).",
      "Distributed infrastructure.",
      "Virtualized compute resources.",
      "Dedicated hosting.",
    ],
    answer: ["b", "c"],
  },
  {
    question:
      "Which of the following aspects of security are managed by AWS? (Choose TWO)",
    options: [
      "Encryption of EBS volumes.",
      "VPC security.",
      "Access permissions.",
      "Hardware patching.",
      "Securing global physical infrastructure.",
    ],
    answer: ["d", "e"],
  },
  {
    question:
      "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "The ability of a system to recover gracefully from failure.",
      "The efficient use of computing resources to meet requirements.",
      "The ability to monitor systems and improve supporting processes and procedures.",
      "The ability to manage datacenter operations more efficiently.",
    ],
    answer: ["c"],
  },
  {
    question:
      "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    options: [
      "Edge locations are used by CloudFront to cache the most recent responses.",
      "Edge locations are used by CloudFront to improve your end users' experience when uploading files.",
      "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
      "Edge locations are used by CloudFront to distribute content to global users with low latency.",
    ],
    answer: ["c"],
  },
  {
    question:
      "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
    options: [
      "AWS CloudTrail.",
      "Amazon Comprehend.",
      "AWS Transit Gateway.",
      "AWS X-Ray.",
      "AWS Config.",
    ],
    answer: ["a", "e"],
  },
  {
    question:
      "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
    options: [
      "Amazon ECS.",
      "AWS Data Pipeline.",
      "AWS Cloud9.",
      "AWS Personal Health Dashboard.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following services will help businesses ensure compliance in AWS?",
    options: [
      "CloudFront.",
      "CloudEndure Migration.",
      "CloudWatch.",
      "CloudTrail.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Which of the following procedures will help reduce your Amazon S3 costs?",
    options: [
      "Use the Import/Export feature to move old files automatically to Amazon Glacier.",
      "Use the right combination of storage classes based on different use cases.",
      "Pick the right Availability Zone for your S3 bucket.",
      "Move all the data stored in S3 standard to EBS.",
    ],
    answer: ["b"],
  },
  {
    question:
      "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
    options: [
      "AWS Direct Connect.",
      "Amazon EC2 Auto Scaling.",
      "Elastic Load Balancer.",
      "CloudFormation.",
      "Network ACLs.",
    ],
    answer: ["b", "c"],
  },
  {
    question:
      "Which of the following activities may help reduce your AWS monthly costs?",
    options: [
      "Enabling Amazon EC2 Auto Scaling for all of your workloads.",
      "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
      "Removing all of your Cost Allocation Tags.",
      "Deploying your AWS resources across multiple Availability Zones.",
    ],
    answer: ["a"],
  },
  {
    question:
      "What is the AWS service/feature that takes advantage of Amazon CloudFront's globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    options: [
      "S3 Transfer Acceleration.",
      "AWS WAF.",
      "AWS Snowmobile.",
      "AWS Snowball.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    options: [
      "AWS X-Ray.",
      "Network ACL.",
      "Security Groups.",
      "VPC Flow logs.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
    options: [
      "AWS KMS.",
      "AWS Global accelerator.",
      "AWS Direct Connect.",
      "AWS Glue.",
      "Amazon CloudFront.",
    ],
    answer: ["b", "e"],
  },
  {
    question:
      "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
    options: [
      "Building the relational database schema.",
      "Performing backups.",
      "Managing the database settings.",
      "Patching the database software.",
      "Installing the database software.",
    ],
    answer: ["a", "c"],
  },
  {
    question:
      "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
    options: [
      "Amazon DynamoDB.",
      "Amazon SNS.",
      "Amazon RDS.",
      "Amazon ElastiCache.",
    ],
    answer: ["c"],
  },
  {
    question:
      "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    options: [
      "APN Consulting Partners.",
      "AWS TAM.",
      "APN Technology Partners.",
      "AWS Professional Services.",
    ],
    answer: ["a"],
  },
  {
    question:
      "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    options: [
      "Amazon LightSail.",
      "AWS Lambda.",
      "Amazon RDS instances.",
      "Amazon EC2 instances.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    options: [
      "She has properly built an elastic system.",
      "She has properly built a fault tolerant system.",
      "She has properly built an encrypted system.",
      "She has properly built a scalable system.",
    ],
    answer: ["b"],
  },
];
