const questions = [
  {
    question: "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
    options: [
      "Amazon Route 53.",
      "AWS ACM.",
      "AWS Directory Service.",
      "AWS Identity & Access Management.",
      "AWS Data Pipeline."
    ],
    answer: ["a", "b"]
  },
  {
    question: "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
    options: [
      "Amazon EC2.",
      "Amazon S3.",
      "AWS Lambda.",
      "Amazon EMR.",
      "Amazon EBS."
    ],
    answer: ["b", "c"]
  },
  {
    question: "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
    options: [
      "Application management.",
      "Capacity management.",
      "Access control.",
      "Operating system maintenance.",
      "Data management."
    ],
    answer: ["b", "d"]
  },
  {
    question: "How do ELBs improve the reliability of your application?",
    options: [
      "By distributing traffic across multiple S3 buckets.",
      "By replicating data to multiple availability zones.",
      "By creating database Read Replicas.",
      "By ensuring that only healthy targets receive traffic."
    ],
    answer: ["d"]
  },
  {
    question: "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
    options: [
      "On-demand instances.",
      "Spot instances.",
      "Dedicated instances.",
      "Reserved instances."
    ],
    answer: ["c"]
  },
  {
    question: "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
    options: [
      "Snowball.",
      "S3 Transfer Acceleration.",
      "Snowmobile.",
      "Amazon VPC."
    ],
    answer: ["c"]
  },
  {
    question: "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
    options: [
      "Amazon S3 Glacier.",
      "Amazon EFS.",
      "Amazon S3 Standard.",
      "Amazon EBS."
    ],
    answer: ["a"]
  },
  {
    question: "Which AWS Service is used to manage user permissions?",
    options: [
      "Security Groups.",
      "Amazon ECS.",
      "AWS IAM.",
      "AWS Support."
    ],
    answer: ["c"]
  },
  {
    question: "Which support plan includes AWS Support Concierge Service?",
    options: [
      "Premium Support.",
      "Business Support.",
      "Enterprise Support.",
      "Standard Support."
    ],
    answer: ["c"]
  },
  {
    question: "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
    options: [
      "AWS Config.",
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS CloudFormation."
    ],
    answer: ["c"]
  },
  {
    question: "What are the benefits of using an AWS-managed service? (Choose TWO)",
    options: [
      "Provides complete control over the virtual infrastructure.",
      "Allows customers to deliver new solutions faster.",
      "Lowers operational complexity.",
      "Eliminates the need to encrypt data.",
      "Allows developers to control all patching related activities."
    ],
    answer: ["b", "c"]
  },
  {
    question: "Which of the following are use cases for Amazon S3? (Choose TWO)",
    options: [
      "Hosting static websites.",
      "Hosting websites that require sustained high CPU utilization.",
      "Cost-effective database and log storage.",
      "A media store for the CloudFront service.",
      "Processing data streams at any scale."
    ],
    answer: ["a", "d"]
  },
  {
    question: "What is the AWS' recommendation regarding access keys?",
    options: [
      "Delete all access keys and use passwords instead.",
      "Only share them with trusted people.",
      "Rotate them regularly.",
      "Save them within your application code."
    ],
    answer: ["c"]
  },
  {
    question: "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
    options: [
      "Key Pair.",
      "Access Keys.",
      "SDK.",
      "MFA."
    ],
    answer: ["d"]
  },
  {
    question: "What is the benefit of using an API to access AWS Services?",
    options: [
      "It improves the performance of AWS resources.",
      "It reduces the time needed to provision AWS resources.",
      "It reduces the number of developers necessary.",
      "It allows for programmatic management of AWS resources."
    ],
    answer: ["d"]
  },
  {
    question: "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
    options: [
      "AWS Storage Gateway.",
      "Amazon S3.",
      "Amazon EBS.",
      "Amazon Glacier."
    ],
    answer: ["c"]
  },
  {
    question: "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
    options: [
      "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
      "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
      "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
      "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
    ],
    answer: ["c"]
  },
  {
    question: "What is the AWS service that provides five times the performance of a standard MySQL database?",
    options: [
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Neptune."
    ],
    answer: ["a"]
  },
  {
    question: "What does AWS Service Catalog provide?",
    options: [
      "It enables customers to quickly find descriptions and use cases for AWS services.",
      "It enables customers to explore the different catalogs of AWS services.",
      "It simplifies organizing and governing commonly deployed IT services.",
      "It allows developers to deploy infrastructure on AWS using familiar programming languages."
    ],
    answer: ["c"]
  },
  {
    question: "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
    options: [
      "Protecting credentials.",
      "Logging access activity.",
      "Patching the database software.",
      "Operating system maintenance.",
      "Creating access policies."
    ],
    answer: ["c", "d"]
  },
  {
    question: "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
    options: [
      "AWS Snowball Migration Service.",
      "AWS Application Discovery Service.",
      "AWS DMS.",
      "AWS Migration Hub."
    ],
    answer: ["b"]
  },
  {
    question: "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
    options: [
      "Amazon Machine Image.",
      "AWS Cost Explorer.",
      "AWS Cost & Usage Report.",
      "Amazon CloudWatch."
    ],
    answer: ["c"]
  },
  {
    question: "Which statement best describes the concept of an AWS region?",
    options: [
      "An AWS Region is a geographical location with a collection of Edge locations.",
      "An AWS Region is a virtual network dedicated only to a single AWS customer.",
      "An AWS Region is a geographical location with a collection of Availability Zones.",
      "An AWS Region represents the country where the AWS infrastructure exist."
    ],
    answer: ["c"]
  },
  {
    question: "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
    options: [
      "SNS logs.",
      "SQS logs.",
      "CloudWatch Logs.",
      "CloudTrail logs."
    ],
    answer: ["d"]
  },
  {
    question: "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
    options: [
      "Availability Zones.",
      "Data sovereignty.",
      "The number of reads and writes per second.",
      "The nature of the queries.",
      "Software bugs."
    ],
    answer: ["c", "d"]
  },
  {
    question: "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
    options: [
      "Quickly identify resources that belong to a specific project.",
      "Quickly identify software solutions on AWS.",
      "Track API calls in your AWS account.",
      "Quickly identify deleted resources and their metadata.",
      "Track AWS spending across multiple resources."
    ],
    answer: ["a", "e"]
  },
  {
    question: "What are AWS shared controls?",
    options: [
      "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
      "Controls that a customer inherits from AWS.",
      "Controls that apply to both the infrastructure layer and customer layers.",
      "Controls that the customer and AWS collaborate together upon to secure the infrastructure."
    ],
    answer: ["d"]
  },
  {
    question: "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
    options: [
      "Build multi-region architectures to better serve global customers.",
      "Apply security at all layers.",
      "Implement strong Identity and Access controls.",
      "Use serverless architectures.",
      "Enable audit logging."
    ],
    answer: ["a", "d"]
  },
  {
    question: "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
    options: [
      "Protecting sensitive data.",
      "Patching of the underlying infrastructure.",
      "Setup and operation of managed databases.",
      "Maintaining consistent hardware components.",
      "Installing and configuring third-party software."
    ],
    answer: ["a", "e"]
  },
  {
    question: "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
    options: [
      "Free commercial software licenses.",
      "Free technical support.",
      "Elastic resources.",
      "On-site visits for auditing.",
      "Cost Savings."
    ],
    answer: ["c", "e"]
  },
  {
    question: "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
    options: [
      "Amazon Inspector.",
      "AWS Virtual Private Gateway.",
      "AWS Batch.",
      "Amazon ECS.",
      "AWS Config."
    ],
    answer: ["a", "e"]
  },
  {
    question: "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
    options: [
      "Amazon EC2 is considered a Serverless Web Service.",
      "Amazon EC2 eliminates the need to invest in hardware upfront.",
      "Amazon EC2 can launch as many or as few virtual servers as needed.",
      "Amazon EC2 offers scalable computing."
    ],
    answer: ["a"]
  },
  {
    question: "What is the AWS Compute service that executes code only when triggered by events?",
    options: [
      "AWS Lambda.",
      "Amazon CloudWatch.",
      "AWS Transit Gateway.",
      "Amazon EC2."
    ],
    answer: ["a"]
  },
  {
    question: "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers' requirements. What is the name of these virtual servers in AWS?",
    options: [
      "Amazon EBS Snapshots.",
      "Amazon VPC.",
      "AWS Managed Servers.",
      "Amazon EC2 Instances."
    ],
    answer: ["d"]
  },
  {
    question: "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
    options: [
      "AWS Secrets Manager.",
      "AWS WAF.",
      "AWS CAF.",
      "Amazon EFS."
    ],
    answer: ["c"]
  },
  {
    question: "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
    options: [
      "AWS Cost Explorer.",
      "AWS TCO Calculator.",
      "AWS Budgets.",
      "AWS Pricing Calculator."
    ],
    answer: ["b"]
  },
  {
    question: "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "Using AWS Trusted Advisor to find underutilized resources.",
      "Using AWS CloudTrail to record user activities.",
      "Using AWS CloudFormation to manage infrastructure as code.",
      "Deploying an application in multiple Availability Zones."
    ],
    answer: ["c"]
  },
  {
    question: "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
    options: [
      "AWS allows them to pay later when their business succeed.",
      "AWS can build complete data centers faster than any other Cloud provider.",
      "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
      "AWS removes the need to invest in operational expenditure.",
      "Using AWS allows companies to replace large capital expenditure with low variable costs."
    ],
    answer: ["c", "e"]
  },
  {
    question: "What are the benefits of using DynamoDB? (Choose TWO)",
    options: [
      "Automatically scales to meet required throughput capacity.",
      "Provides resizable instances to match the current demand.",
      "Supports both relational and non-relational data models.",
      "Offers extremely low (single-digit millisecond) latency.",
      "Supports the most popular NoSQL database engines such as CouchDB and MongoDB."
    ],
    answer: ["a", "d"]
  },
  {
    question: "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
    options: [
      "Versioning.",
      "Deduplication.",
      "Permissions.",
      "Decryption.",
      "Conversion."
    ],
    answer: ["a", "c"]
  },
  {
    question: "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
    options: [
      "AWS Partners.",
      "AWS Artifact.",
      "AWS Professional Services.",
      "Amazon Athena.",
      "Amazon PinPoint."
    ],
    answer: ["a", "c"]
  },
  {
    question: "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
    options: [
      "Deleting unused EBS volumes after terminating an EC2instance.",
      "Deleting unused AutoScaling launch configuration.",
      "Deleting unused Elastic Load Balancers.",
      "Releasing unused Elastic IPs after terminating an EC2instance."
    ],
    answer: ["b"]
  },
  {
    question: "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
    options: [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS Consolidated Billing."
    ],
    answer: ["a"]
  },
  {
    question: "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
    options: [
      "Running penetration tests.",
      "Reserving capacity.",
      "Data center operations.",
      "Auditing and regulatory compliance.",
      "Infrastructure security."
    ],
    answer: ["c", "e"]
  },
  {
    question: "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
    options: [
      "Amazon Simple Email Service (Amazon SES).",
      "Amazon Simple Storage Service (Amazon S3).",
      "Amazon Simple Notification Service (Amazon SNS).",
      "Amazon Simple Queue Service (Amazon SQS)."
    ],
    answer: ["c"]
  },
  {
    question: "Which of the following allows you to create new RDS instances? (Choose TWO)",
    options: [
      "AWS CodeDeploy.",
      "AWS Quick Starts.",
      "AWS CloudFormation.",
      "AWS DMS.",
      "AWS Management Console."
    ],
    answer: ["c", "e"]
  },
  {
    question: "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
    options: [
      "Low monthly instance maintenance costs.",
      "Low-cost instance tagging.",
      "Per-second instance billing.",
      "Low instance start-up fees."
    ],
    answer: ["c"]
  },
  {
    question: "Which AWS Group assists customers in achieving their desired business outcomes?",
    options: [
      "AWS Security Team.",
      "AWS Professional Services.",
      "AWS Trusted Advisor.",
      "AWS Concierge Support Team."
    ],
    answer: ["b"]
  },
  {
    question: "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
    options: [
      "AWS KMS.",
      "AWS Service Control Policies (SCPs).",
      "Multi-Factor Authentication (MFA).",
      "Amazon Macie."
    ],
    answer: ["a"]
  },
  {
    question: "Which AWS Service allows customers to download AWS SOC & PCI reports?",
    options: [
      "AWS Well-Architected Tool.",
      "AWS Artifact.",
      "AWS Glue.",
      "Amazon Chime."
    ],
    answer: ["b"]
  }
];