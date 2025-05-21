const questions = [
  {
    question: "Where can you store files in AWS? (Choose TWO)",
    options: [
      "Amazon EFS.",
      "Amazon SNS.",
      "Amazon EBS.",
      "Amazon ECS.",
      "Amazon EMR.",
    ],
    answer: ["a", "c"],
  },
  {
    question:
      "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
    options: [
      "Amazon Simple Queue Service.",
      "AWS Storage Gateway.",
      "Amazon Simple Email Service.",
      "Amazon Simple Storage Service.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
    options: [
      "Pay less as AWS grows.",
      "Pay as you go.",
      "Pay less by using more.",
      "Save when you reserve.",
    ],
    answer: ["d"],
  },
  {
    question:
      "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
    options: [
      "Right-size before and after migration.",
      "Use a Multi-Region Active-Passive architecture.",
      "Combine On-demand Capacity Reservations with Saving Plans.",
      "Use a Multi-Region Active-Active architecture.",
    ],
    answer: ["a"],
  },
  {
    question:
      "What is the primary storage service used by Amazon RDS database instances?",
    options: ["Amazon Glacier.", "Amazon EBS.", "Amazon EFS.", "Amazon S3."],
    answer: ["b"],
  },
  {
    question:
      "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
    options: [
      "AWS CodePipeline.",
      "AWS X-Ray.",
      "Amazon Inspector.",
      "AWS CloudTrail.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
    options: [
      "Amazon Redshift.",
      "AWS Snowball.",
      "Amazon Simple Storage Service.",
      "Amazon EBS.",
      "Amazon DynamoDB.",
    ],
    answer: ["c", "e"],
  },
  {
    question:
      "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
    options: [
      "AWS Regions.",
      "Multi-AZ Deployment.",
      "Automatic patching.",
      "Read Replicas.",
      "Edge Locations.",
    ],
    answer: ["b", "d"],
  },
  {
    question:
      "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application's traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
    options: [
      "Replicate the current resources across multiple Availability Zones within the same region.",
      "Migrate the application to a hosting provider in Asia.",
      "Recreate the website content.",
      "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.",
    ],
    answer: ["d"],
  },
  {
    question:
      "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
    options: [
      "AWS Identity and Access Management.",
      "Amazon RDS.",
      "Network Access Control Lists.",
      "Amazon EMR.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Using Amazon EC2 falls under which of the following cloud computing models?",
    options: ["Iaas & SaaS.", "IaaS.", "SaaS.", "PaaS."],
    answer: ["b"],
  },
  {
    question:
      "Which of the below is a best-practice when building applications on AWS?",
    options: [
      "Strengthen physical security by applying the principle of least privilege.",
      "Ensure that the application runs on hardware from trusted vendors.",
      "Use IAM policies to maintain performance.",
      "Decouple the components of the application so that they run independently.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: [
      "Amazon EBS.",
      "Amazon SQS.",
      "Amazon Instance store.",
      "Amazon S3.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
    options: [
      "Active archives.",
      "Dynamic websites' assets.",
      "Long-term analytic data.",
      "Active databases.",
      "Cached data.",
    ],
    answer: ["a", "c"],
  },
  {
    question: "What does Amazon Elastic Beanstalk provide?",
    options: [
      "A PaaS solution to automate application deployment.",
      "A compute engine for Amazon ECS.",
      "A scalable file storage solution for use with AWS and on-premises servers.",
      "A NoSQL database service.",
    ],
    answer: ["a"],
  },
  {
    question:
      "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    options: [
      "Amazon Kinesis.",
      "Security groups.",
      "Amazon Inspector.",
      "AWS Network Access Control Lists.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
    options: [
      "Patch management controls.",
      "Database controls.",
      "Awareness & Training.",
      "Environmental controls.",
      "Physical controls.",
    ],
    answer: ["d", "e"],
  },
  {
    question:
      "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
    options: [
      "Reserved instances - No Upfront.",
      "Reserved instances - Partial Upfront.",
      "On-Demand instances.",
      "Spot Instances.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users' experience?",
    options: [
      "Elasticity.",
      "Global reach.",
      "Data durability.",
      "High availability.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
    options: [
      "AWS Batch.",
      "AWS Outposts.",
      "Amazon Lightsail.",
      "Amazon EC2.",
      "AWS Lambda.",
    ],
    answer: ["d", "e"],
  },
  {
    question:
      "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
    options: [
      "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
      "Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
      "Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
      "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Which statement is correct with regards to AWS service limits? (Choose TWO)",
    options: [
      "You can contact AWS support to increase the service limits.",
      "Each IAM user has the same service limit.",
      "There are no service limits on AWS.",
      "You can use the AWS Trusted Advisor to monitor your service limits.",
      "The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.",
    ],
    answer: ["a", "d"],
  },
  {
    question:
      "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
    options: [
      "AWS Console.",
      "AWS Service Catalog.",
      "AWS OpsWorks.",
      "AWS CLI.",
    ],
    answer: ["d"],
  },
  {
    question:
      "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
    options: [
      "AWS Artifact.",
      "AWS Cloud9.",
      "AWS Direct Connect.",
      "AWS CloudTrail.",
      "AWS VPN.",
    ],
    answer: ["c", "e"],
  },
  {
    question:
      "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
    options: [
      "AWS EC2 Auto Recovery.",
      "AWS Auto Scaling.",
      "AWS Network Load Balancer.",
      "AWS Application Load Balancer.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
    options: [
      "Amazon Neptune.",
      "Amazon Aurora.",
      "Amazon RDS for SQL Server.",
      "Amazon RDS for PostgreSQL.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
    options: [
      "AWS CloudHSM.",
      "Security Groups.",
      "AWS Batch.",
      "AWS IAM.",
      "Network Access Control Lists (Network ACLs).",
    ],
    answer: ["b", "e"],
  },
  {
    question:
      "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
    options: [
      "Amazon Redshift.",
      "Amazon Kinesis.",
      "Amazon DynamoDB.",
      "Amazon RDS.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
    options: [
      "Application development.",
      "Market research.",
      "Business analysis.",
      "Physical hardware.",
    ],
    answer: ["d"],
  },
  {
    question: "How are AWS customers billed for Linux-based Amazon EC2 usage?",
    options: [
      "EC2 instances will be billed on one second increments, with a minimum of one minute.",
      "EC2 instances will be billed on one hour increments, with a minimum of one day.",
      "EC2 instances will be billed on one minute increments, with a minimum of one hour.",
      "EC2 instances will be billed on one day increments, with a minimum of one month.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
    options: [
      "Instance type.",
      "The Availability Zone where the instance is provisioned.",
      "Load balancing.",
      "Number of buckets.",
      "Number of private IPs.",
    ],
    answer: ["a", "b"],
  },
  {
    question:
      "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
    options: [
      "By creating an AWS Config template from the old instance and launching a new instance from it.",
      "By creating an EBS Snapshot of the old instance.",
      "By installing Aurora on EC2 and launching a new instance from it.",
      "By creating an AMI from the old instance and launching a new instance from it.",
    ],
    answer: ["d"],
  },
  {
    question:
      "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
    options: [
      "IAM Principals.",
      "AWS Service Control Policies (SCPs).",
      "IAM policies.",
      "AWS Fargate.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which of the following statements describes the AWS Cloud's agility?",
    options: [
      "AWS allows you to host your applications in multiple regions around the world.",
      "AWS provides customizable hardware at the lowest possible cost.",
      "AWS allows you to provision resources in minutes.",
      "AWS allows you to pay upfront to reduce costs.",
    ],
    answer: ["c"],
  },
  {
    question:
      "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
    options: [
      "Lower administrative burden.",
      "Complete control over the underlying host.",
      "Resizable compute capacity.",
      "Scales automatically to larger or smaller instance types.",
      "Supports the document and key-value data structure.",
    ],
    answer: ["a", "c"],
  },
  {
    question:
      "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
    options: [
      "Internet Gateway.",
      "AWS IQ.",
      "AWS Direct Connect.",
      "AWS Site-to-Site VPN.",
    ],
    answer: ["d"],
  },
  {
    question:
      "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
    options: [
      "Enterprise Support.",
      "Developer Support.",
      "Basic Support.",
      "Business Support.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Which of the following is used to control network traffic in AWS? (Choose TWO)",
    options: [
      "Network Access Control Lists (NACLs).",
      "Key Pairs.",
      "Access Keys.",
      "IAM Policies.",
      "Security Groups.",
    ],
    answer: ["a", "e"],
  },
  {
    question:
      "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
    options: [
      "Reserved instances.",
      "Spot Instances.",
      "On-Demand instances.",
      "Dedicated instances.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
    options: [
      "AWS Service Health Dashboard.",
      "AWS Management Console.",
      "Amazon CloudWatch.",
      "AWS Personal Health Dashboard.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which AWS service or feature can be used to call AWS Services from different programming languages?",
    options: [
      "AWS Software Development Kit.",
      "AWS Command Line Interface.",
      "AWS CodeDeploy.",
      "AWS Management Console.",
    ],
    answer: ["a"],
  },
  {
    question: "Which AWS Service can be used to register a new domain name?",
    options: [
      "Amazon Personalize.",
      "Amazon Route 53.",
      "AWS KMS.",
      "AWS Config.",
    ],
    answer: ["b"],
  },
  {
    question:
      "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
    options: [
      "AWS CloudFormation.",
      "AWS Migration Hub.",
      "AWS IAM.",
      "AWS Elastic Beanstalk.",
      "Amazon Macie.",
    ],
    answer: ["a", "d"],
  },
  {
    question: "Which AWS service provides cost-optimization recommendations?",
    options: [
      "AWS Trusted Advisor.",
      "AWS Pricing Calculator.",
      "Amazon QuickSight.",
      "AWS X-Ray.",
    ],
    answer: ["a"],
  },
  {
    question:
      "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    options: [
      "VPC Peering.",
      "AWS Transit Gateway.",
      "Amazon Connect.",
      "Security Groups.",
    ],
    answer: ["b"],
  },
  {
    question:
      "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
    options: [
      "Instances can be shut down by AWS at any time with no notification.",
      "Reserved instances require at least a one-year pricing commitment.",
      "There is no additional charge for using dedicated instances.",
      "Reserved instances provide a significant discount compared to on-demand instances.",
      "Reserved instances are best suited for periodic workloads.",
    ],
    answer: ["b", "d"],
  },
  {
    question: "Why does every AWS Region contain multiple Availability Zones?",
    options: [
      "Multiple Availability Zones allows you to build resilient and highly available architectures.",
      "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
      "Multiple Availability Zones allows for data replication and global reach.",
      "Multiple Availability Zones within a region increases the storage capacity available in that region.",
    ],
    answer: ["a"],
  },
  {
    question:
      "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    options: [
      "On-Demand Instances.",
      "Spot Instances.",
      "Reserved Instances - All Upfront.",
      "Reserved Instances - No Upfront.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following is a benefit of running an application in multiple Availability Zones?",
    options: [
      "Allows you to exceed AWS service limits.",
      "Reduces application response time between servers and global users.",
      "Increases available compute capacity.",
      "Increases the availability of your application.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    options: [
      "AWS sells the old devices to other hosting providers.",
      "AWS destroys the old devices in accordance with industry-standard practices.",
      "AWS sends the old devices for remanufacturing.",
      "AWS stores the old devices in a secure place.",
    ],
    answer: ["b"],
  },
];
