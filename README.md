# Challenge: Building a Support Ticket System
## Backend

The main objective of this implementation was to apply SOLID principles, clean code practices, and clean architecture to build a scalable and maintainable system for the mid to long-term.

The backend was developed with inspiration from the following principles:
- Clean code
- Clean architecture
- SOLID

The design patterns used in this project include:
- **Factory** (Used throughout the application, especially in the main layer building process)
- **Adapter** (Present throughout the application as one of the pillars of clean architecture)
- **Composite** (Used for validation)
- **Dependency Injection** (Applied to decouple components and respect SOLID principles)
- **Abstract Server**
- **Builder**
- **Singleton** (Used in the abstraction server)
- **Decorator** (Present in the Application Logger)

The project is divided into two main parts: `src` and `tests`. This approach was chosen to facilitate the building process.

The **src** directory is divided into different layers:

### 1) Domain Layer
This layer defines the critical business rules of the domain. In our context, it includes the ticket model with all the necessary information.

The domain layer also contains the Use Cases. These encapsulate and implement all the application's business rules. In our context, two use cases were created: **add-ticket** and **load-tickets**.

The Domain layer does not have dependencies on external layers. However, two other layers have relationships with it: the data layer and the presentation layer.

### 2) Data Layer
The main objective of the data layer is to provide dependency injection for the domain layer and the infra layer (an external layer). This is achieved by following interface protocols and use cases.

For example, `DbAddTicket` implements an interface called `AddTicketRepo`, which is a repository for the `AddTicket` use case. Additionally, `TicketMongoRepo` also implements the `AddTicketRepo` interface. This decouples the domain from external tools such as Mongoose, Elasticsearch, or any other infrastructure implementation.

Another detail about this layer is that a separate collection for logging was created.

### 3) Infra Layer
This layer is responsible for adapting our infrastructure systems to our application.

### 4) Presentation Layer
The presentation layer is responsible for providing controllers for the Main Layer. It implements protocols and interfaces for external entities and tools. For example, it decouples the Request and Response HTTP protocols from the Express.js HTTP protocols.

This decoupling is necessary because if, in the mid to long term, the Express library becomes deprecated, we can easily replace the Express adapter with another library, and all our internal HTTP protocols remain intact.

### 5) Main Layer
The main layer is responsible for connecting all the parts of the project using Factory Patterns. It has connections with all the other layers, especially the Domain Layer.

It is crucial to maintain this layer without any dependencies on other layers. The Presentation, Infra, Data, and Domain Layers should not have direct dependencies on the Main Layer.

The `config` folder contains the app configuration, middleware, and routes. They are organized into separate folders with their own responsibilities.

For this layer, an integration test was created (in addition to the unit tests for all other layers). A Decorator example was also implemented for the log controller to avoid dependencies of logging within the controllers.

The magic happens in the `factories` directory, where the factories are responsible for building and integrating all the layers.

### Other Considerations
- To improve code consistency, I designed a separate layer using the Composite Pattern for all necessary validations.
- The `tests` folder contains unit and integration tests implemented using the TDD approach.
- Atomic commits were used for consistency, following a standard for [commits](https://www.conventionalcommits.org/en/v1.0.0/).

## How to Run the Project
To run the project locally, please follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. Install the required dependencies:
   ```
   cd <project-folder>
   npm install
   ```

3. Configure the environment variables. Create a `.env.local` file in the root of the project and provide the necessary configurations for the build using docker. For running locally, you can access the `backend/main/config/env.ts` and replace the `mongoUrl` and `port`  with yours variables.

Here's an example if you have a MongoDB running locally:

```
export default {
  mongoUrl: 'mongodb://127.0.0.1:27017/notificationsDB',
  port: 5050
}
```

If you want to connect with virtual MongoDB, I suggest the [Atlas MongoDB](https://www.mongodb.com/pt-br/cloud/atlas/efficiency) cloud service.

4. Start the application:

   ```
   npm run build
   ```

   ```
   npm run start
   ```

5. The backend should now be running on the specified port.


Please note that you may need to adjust the configurations and environment variables according to your specific setup.

### Further Implementations
Unfortunately, not all the requirements were completed. The next steps for the project are as follows:
- [ ] Finish the `save-ticket-by-id` route
- [ ] Implement CI/CD tools (such as Travis and Coveralls) in addition to Husky and lint-staged
- [ ] Document the backend using Swagger

If you have any questions or need further assistance, please feel free to reach out.

Thank you for your consideration and time.
