# Cloud Computing Fundamentals

## What is cloud computing?

5 characteristics per [NIST 800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf)

1. On-demand self-service
   a. 📝 Can provision/terminate capabilities using UI/CLI as needed without requiring human interaction
2. Broad network access
   a. 📝 Capabilities are available over the network, on any device, using standard protocols/mechanisms
3. Resource pooling
   a. Sense of location independence - no control or knowledge over exact location of the resources
   b. Resources are pooled to serve multiple consumers using a multi-tenant model
   c. 📝 Economies of scale, cheaper service
4. Rapid elasticity
   a. Capabilities (resources) can be elastically provisioned and released to scale rapidly outward and inward with demand
   b. To the consumer, capabilities available for provisioning _appear_ to be unlimited
   c. **In Cantrill's opinion, the most important characteristic of cloud computing**
   d. 📝 Scale up/out and down/in automatically in response to system load
5. Measured service
   a. Resource usage can be monitored, controlled, reported, and billed
   b. 📝 Usage is measured - pay for what you use

## Public vs private vs hybrid vs multi cloud

### Public cloud

- 📝 Available to the general public and meet 5 characteristics of cloud computing
- examples: AWS, Azure, Google

### Multi-Cloud

- 📝 Using multiple public cloud providers within a single system
- Can provide cloud provider resilience in case one fails
- Multi-Cloud environments are most effective when used for high availablity purposes
  - 💡 Cantrill says stay away from products/vendors that offer a single management window for multiple cloud platforms because it abstracts the unique features of each provider

### Private cloud

- Private cloud needs to meet 5 characteristics of cloud computing
  - 📝 main difference between public cloud is that it is dedicated to the customer and is located on-premises
- Examples: AWS Outposts, Azure Stack, Google Anthos
- Private cloud != on-premises infrastructure like VMWare

### Hybrid cloud

- 📝 Using public cloud and private cloud together as a single environment
- Use same tooling, interfaces, processes to interact with public and private components
- 💡 Hybrid environment/networking is different!
  - Definition: using public cloud with on-premises infrastructure

## Cloud service models

### Terms

- **Infrastructure stack:** collection of things needed by an application
  - example stack from bottom to top: facilities, infrastructure, servers, virtualization, O/S, container, runtime, data, application
  - parts consumer manages and parts the vendor manages
- **Unit of consumption:** what you pay for and at what point you manage everything upwards

### On-premises vs DC hosted

- **On-premises:** you own the entire infrastructure stack
- **DC hosted:** vendor supplies facilities. Unit of consumption is a server rack.

### Infrastructure as a Service (IaaS)

- Vendor supplies: facilities, infrastructure, servers, virtualization
- Unit of consumption: O/S

#### Why use IaaS?

- Pay for usage of the virtual machine by amount of time

### Platform as a Service (PaaS)

- Vendor supplies: facilities, infrastructure, servers, virtualization, O/S, container
- Unit of consumption: runtime

#### Why use PaaS?

- if a person is a developer and doesn't want to worry about everything below the runtime

### Software as a Service (SaaS)

- Vendor supplies: everything but the application
- Unit of consumption: application

### Others

- Function as a Service
- Container as a Service
- Database as a Service
- many more
