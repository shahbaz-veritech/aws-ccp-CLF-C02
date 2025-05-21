const questions = [
  {
    question:
      "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
    options: [
      "Least Privilege.",
      "Pilot Light.",
      "Fault Tolerance.",
      "Multi-threading.",
    ],
    answer: ["c"],
  },
  {
    question:
      "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
    options: [
      "All up-front reservation.",
      "All reserved instance payment options provide the same discount level.",
      "Partial up-front reservation.",
      "No up-front reservation.",
    ],
    answer: ["a"],
  },
  {
    question:
      "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
    options: [
      "Access control.",
      "Physical MFA devices.",
      "Data encryption.",
      "Unlimited storage.",
      "Load balancing.",
    ],
    answer: ["a", "c"],
  },
  {
    question:
      "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
    options: [
      "3 hours for the Linux instance and 5 hours for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
      "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
    ],
    answer: ["c"],
    explanation:
      "Pricing is per instance-hour consumed for each instance, from the time an instance is launched until it is terminated or stopped. Each partial instance-hour consumed will be billed per-second for Linux, Windows, Windows with SQL Enterprise, Windows with SQL Standard, and Windows with SQL Web Instances, and as a full hour for all other instance types.",
  },
  {
    question:
      "What is the AWS Support feature that allows customers to manage support cases programmatically?",
    options: [
      "AWS Trusted Advisor.",
      "AWS Operations Support.",
      "AWS Support API.",
      "AWS Personal Health Dashboard.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
    options: [
      "AWS CLI.",
      "AWS Security Groups.",
      "AWS SDKs.",
      "AWS Network Access Control Lists.",
      "AWS CodeCommit.",
    ],
    answer: ["a", "c"],
  },
  {
    question:
      "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
    options: [
      "AWS Resource Groups.",
      "IAM Policies.",
      "IAM Roles.",
      "IAM Users.",
      "AWS Organizations.",
    ],
    answer: ["c", "d"],
  },
  {
    question:
      "Which of the following Amazon RDS features facilitates offloading of database read activity?",
    options: [
      "Database Snapshots.",
      "Multi-AZ Deployments.",
      "Automated Backups.",
      "Read Replicas.",
    ],
    answer: ["d"],
  },
  {
    question:
      "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    options: [
      "Using the AWS ACM service.",
      "Using Security Bulletins.",
      "Using the AWS Management Console.",
      "Using Compliance Resources.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    options: ["IAM Users.", "Key Pair.", "IAM Roles.", "IAM Groups."],
    answer: ["c"],
  },
  {
    question:
      "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
    options: [
      "AWS Global Accelerator.",
      "AWS Application Load Balancer (ALB).",
      "Amazon CloudFront.",
      "Transit VPC.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
    options: [
      "Use Software test automation tools.",
      "Use AWS CodeDeploy to build and automate your AWS environment.",
      "Use code to provision and operate your AWS infrastructure.",
      "Migrate all of your applications to a dedicated host.",
    ],
    answer: ["c"],
  },
  {
    question:
      "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
    options: [
      "Restrict any API call made through SDKs or CLI.",
      "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
      "Require Multi-Factor Authentication (MFA) for all IAM User access.",
      "Set up two login passwords.",
    ],
    answer: ["c"],
  },
  {
    question: "Which AWS Service offers volume discounts based on usage?",
    options: [
      "Amazon VPC.",
      "Amazon S3.",
      "Amazon Lightsail.",
      "AWS Cost Explorer.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
    options: [
      "The AWS Region's security level.",
      "Data sovereignty.",
      "Cost.",
      "The planned number of VPCs.",
      "Geographic proximity to the company's location.",
    ],
    answer: ["b", "c"],
  },
  {
    question:
      "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
    options: ["Amazon EFS.", "Amazon Neptune.", "Amazon ElastiCache.", "DAX."],
    answer: ["c"],
  },
  {
    question:
      "What are the advantages of using Auto Scaling Groups for EC2 instances?",
    options: [
      "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
      "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
      "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
      "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.",
    ],
    answer: ["b"],
  },
  {
    question:
      "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
    options: [
      "AWS helps customers invest more in capital expenditures.",
      "AWS automates all infrastructure operations, so customers save more on human resources costs.",
      "AWS continues to lower the cost of cloud computing for its customers.",
      "AWS secures AWS resources at no additional charge.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which of the following are examples of the customer's responsibility to implement 'security IN the cloud'? (Choose TWO)",
    options: [
      "Building a schema for an application.",
      "Replacing physical hardware.",
      "Creating a new hypervisor.",
      "Patch management of the underlying infrastructure.",
      "File system encryption.",
    ],
    answer: ["a", "e"],
  },
  {
    question:
      "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
    options: [
      "AWS CloudHSM.",
      "U2F Security Key.",
      "AWS Access Keys.",
      "AWS Key Pair.",
    ],
    answer: ["b"],
  },
  {
    question:
      "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
    options: [
      "Amazon SNS.",
      "AWS Elastic Beanstalk.",
      "AWS Systems Manager.",
      "AWS Trusted Advisor.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
    options: [
      "The amount of time the instances will be running.",
      "Number of security groups.",
      "Allocated Elastic IP Addresses.",
      "Number of Hosted Zones.",
      "Number of instances.",
    ],
    answer: ["b", "d"],
  },
  {
    question:
      "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
    options: [
      "AWS Data Pipeline.",
      "AWS Storage Gateway.",
      "Amazon Aurora.",
      "Amazon EFS.",
    ],
    answer: ["b"],
  },
  {
    question:
      "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
    options: [
      "Amazon Simple Storage Service.",
      "Amazon Elastic Block Store.",
      "Amazon Elastic Container Service.",
      "AWS Storage Gateway.",
    ],
    answer: ["a"],
  },
  {
    question:
      "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
    options: [
      "EBS and S3 are accessible only to the root account owner.",
      "The systems administrator must contact AWS Support first to activate his new IAM account.",
      "There is not enough space in S3 to store the snapshots.",
      "There is a non-explicit deny to all new users.",
    ],
    answer: ["d"],
  },
  {
    question:
      "An external auditor is requesting a log of all accesses to the AWS resources in the company's account. Which of the following services will provide the auditor with the requested information?",
    options: [
      "AWS CloudTrail.",
      "Amazon CloudFront.",
      "AWS CloudFormation.",
      "Amazon CloudWatch.",
    ],
    answer: ["a"],
  },
  {
    question: "Which of the below options is true of Amazon Cloud Directory?",
    options: [
      "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
      "Amazon Cloud Directory enables the analysis of video and data streams in real time.",
      "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
      "Amazon Cloud Directory allows for registration and management of domain names.",
    ],
    answer: ["a"],
  },
  {
    question:
      "A user has opened a 'Production System Down' support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
    options: ["12 hours.", "15 minutes.", "24 hours.", "One hour."],
    answer: ["d"],
  },
  {
    question:
      "Which of the below options is a best practice for making your application on AWS highly available?",
    options: [
      "Deploy the application to at least two Availability Zones.",
      "Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
      "Deploy the application code on at least two servers in the same Availability Zone.",
      "Rewrite the application code to handle all incoming requests.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
    options: [
      "Labor and IT costs.",
      "Cooling and power consumption.",
      "Amazon EBS computing power.",
      "Software architecture.",
      "Software compatibility.",
    ],
    answer: ["a", "b"],
  },
  {
    question:
      "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
    options: [
      "AWS Basic Support.",
      "AWS Developer Support.",
      "AWS Business Support.",
      "AWS Enterprise Support.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Which of the following AWS offerings are serverless services? (Choose TWO)",
    options: [
      "Amazon EC2.",
      "AWS Lambda.",
      "Amazon DynamoDB.",
      "Amazon EMR.",
      "Amazon RDS.",
    ],
    answer: ["b", "c"],
  },
  {
    question:
      "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
    options: ["Amazon GuardDuty.", "AWS ACM.", "Amazon Detective.", "AWS WAF."],
    answer: ["b"],
  },
  {
    question:
      "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
    options: [
      "AWS Config.",
      "AWS OpsWorks.",
      "AutoScaling.",
      "AWS CloudFormation.",
    ],
    answer: ["b"],
  },
  {
    question:
      "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
    options: [
      "Amazon EBS.",
      "Amazon EFS.",
      "Amazon S3.",
      "Amazon Instance Store.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
    options: [
      "AWS WAF.",
      "Amazon CloudWatch.",
      "AWS Cloud9.",
      "AWS CloudTrail.",
    ],
    answer: ["b"],
  },
  {
    question:
      "A company is migrating a web application to AWS. The application's compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
    options: [
      "On-demand Instances.",
      "Dedicated Hosts.",
      "Spot Instances.",
      "Reserved Instances.",
    ],
    answer: ["d"],
  },
  {
    question:
      "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
    options: [
      "Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
      "Create an IAM role and attach a policy with Administrator access permissions.",
      "Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
      "Create an IAM user and attach a policy with Administrator access permissions.",
    ],
    answer: ["c"],
  },
  {
    question:
      "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
    options: [
      "Generate new IAM access keys every time you delegate permissions.",
      "Store the required AWS credentials directly within the application code.",
      "Use temporary security credentials (IAM roles) instead of long-term access keys.",
      "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.",
    ],
    answer: ["c"],
  },
  {
    question:
      "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
    options: [
      "Use servers instead of managed services.",
      "Use existing third-party software licenses on AWS.",
      "Migrate production workloads to AWS edge locations instead of AWS Regions.",
      "Use AWS Outposts to run all workloads in a cost-optimized environment.",
    ],
    answer: ["b"],
  },
  {
    question:
      "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
    options: [
      "Amazon SQS.",
      "Virtual Private Gateway.",
      "AWS Artifact.",
      "Amazon CloudFront.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
    options: [
      "Amazon Connect.",
      "AWS CLI.",
      "AWS Identity and Access Management (IAM).",
      "Amazon SNS.",
      "Amazon Virtual Private Cloud.",
    ],
    answer: ["b", "c"],
  },
  {
    question:
      "According to best practices, which of the below options is best suited for processing a large number of binary files?",
    options: [
      "Vertically scaling EC2 instances.",
      "Running RDS instances in parallel.",
      "Vertically scaling RDS instances.",
      "Running EC2 instances in parallel.",
    ],
    answer: ["d"],
  },
  {
    question:
      "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
    options: [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS Cost & Usage Report.",
    ],
    answer: ["b"],
  },
  {
    question:
      "What should you do if you see resources, which you don't remember creating, in the AWS Management Console? (Choose TWO)",
    options: [
      "Stop all running services and open an investigation.",
      "Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.",
      "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.",
      "Open an investigation and delete any potentially compromised IAM users.",
      "Change your AWS root account password and the passwords of any IAM users.",
    ],
    answer: ["d", "e"],
  },
  {
    question:
      "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
    options: [
      "Elastic coupling.",
      "Loosely coupling.",
      "Scalable coupling.",
      "Tightly coupling.",
    ],
    answer: ["b"],
  },
  {
    question:
      "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
    options: [
      "Amazon Elastic File System.",
      "Amazon Simple Storage Service.",
      "Amazon Elastic Block Store.",
      "AWS Storage Gateway.",
    ],
    answer: ["a"],
  },
  {
    question:
      "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
    options: [
      "Create private connection to your data center.",
      "Achieve global high availability.",
      "Automate the process of provisioning new compute resources.",
      "Make synchronous replication of your data possible.",
    ],
    answer: ["d"],
  },
  {
    question:
      "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
    options: [
      "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.",
      "Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
      "Lambda is AWS' proprietary programming language for microservices.",
      "Lambda doesn't support programming languages; it is a serverless compute service.",
      "Lambda can support any programming language using an API.",
    ],
    answer: ["b", "e"],
  },
  {
    question: "What are the capabilities of AWS X-Ray? (Choose TWO)",
    options: [
      "Automatically decouples application components.",
      "Facilitates tracking of user requests to identify application issues.",
      "Helps improve application performance.",
      "Deploys applications to Amazon EC2 instances.",
      "Deploys applications to on-premises servers.",
    ],
    answer: ["b", "c"],
  },
];
