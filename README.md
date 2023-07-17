# **Challenge: Building a Support Ticket System**
## Backend

The main purpose of this implementation was to use all the solid, clean code and clean architecture principles, to build a scalable and maintainable system for a mid-long term.

The backend was constructed inspired by the following principles:
- Clean code
- Clean architecture
- SOLID

The Design Patterns used were:
- **Factory** (Present through the application. One of the principles used was in the main layer Building process)
- **Adapter** (Present through the application. One of the Clean architecture pillars)
- **Composite** (for validation)
- **Dependency** Injection (Present through the application. To decouple the components and respect the SOLID principles)
- **Abstract Server** 
- **Builder** 
- **Singleton** (Present in abstraction server)
- **Decorator** (Present in Application Logger)

The project is divided into 2 principle parts (scr and tests). I choose this approach to facilitate my building process.

The **scr** is divided into layers segregations.

### 1) Domain Layer
  Define the critical business rules of a domain. In our context, the ticket model with all the necessary information.

  This layer is also composed of Use Cases.

  The use cases contain all the application business rules. This abstraction is responsible for encapsulating and implementing all the use cases of the system. In our context, I created two of them: **add-ticket** and **load-tickets**

  Finally, the Domain layer doesn't have a dependency on external layers. But 2 other layers have a relation with it: The data layer and the presentation layer.
  
### 2) Data Layer
  The main objective for the data Layer is to provide a dependency injection for the domain layer and the infra layer (more external layer) by following all the interface protocols and use-cases.
  For example, the DbAddTicket implements an interface called AddTicketRepo (A repo for the use-case AddTicket). Furthermore, the TicketMongoRepo also implements the AddTicketRepo interface. This is useful for uncoupling the domain for external tools (like Mongoose, elasticSearch, or any other infra implementation).
  Another detail about this layer is the fact that I created a separate Collection for Logger.

### 3) Infra Layer
  Responsible for adapting our infra systems to our application.
  
### 3) Presentation Layer
  I segregated controllers, errors, helpers, and protocols.
  The presentation layer is responsible for providing our controllers for the Main Layer. So, they are responsible for implementing all the protocols and interfaces for our external entities and tools used. For example, uncoupling the Request and Response HTTP protocols with the Express.js HTTP protocols.
  This is necessary because if in the mid-long term, the express lib became deprecated, we can just change the express adapter for another lib, and all our internal HTTP protocols are regarded.
  
### 4) Main layer
  Responsible for fitting all the parts of the project basically with Factories Patterns. So, this Layer has connections with all the other layers, regarding the
  Domain Layer.
  Also, is very important to maintain this layer without any dependencies with other layers. So, The Presentation, Infra, Data, and Domain Layers can't have direct dependencies with the Main Layer.
  I created a config folder for building the app, all the middleware, and the routes. And they are separated into another folder with their own responsibilities.
  For this layer, I created an integration test (despite the unit test for all other layers).
  I also created one Decorator example for the log controller (the main objective was not to have dependencies of the log into the controllers).
  Finally, the factories' directory makes all the magic. The factors are responsible for building and integrating all the layers.

  
### Other considerations.
- For improving the consistency of the code, I designed one layer to do all the validations necessary using Composite Pattern.
- Also, the *tests* folder contains all the unit and integrated tests used, with the TDD approach.
- I also tried to use atomic commits for consistency and use a standard for [commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Further implementations
Unfortunately, I didn't finish all the requirements, but the next steps for the project are:
- [ ] Finish the route save-ticket-by-id
- [ ] Implements CI/CD tools (like Travis and coveralls) beyond husky and lint-staged. 
- [ ] Documents the backend with Swagger.

Thank you for your consideration and time.
