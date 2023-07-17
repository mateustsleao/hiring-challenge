# **Challenge: Building a Support Ticket System**
## Backend

The main purpose of this implementation was to use all the solid, clean code and clean architecture principles, to build a scalable and maintainable system for a mid-long term.

The backend was constructed inspired by the following principles:
- Clean code
- Clean architecture
- SOLID

The Design Patterns used were:
- Factory (Present through the application. One of the principles used was in the main layer Building process)
- Adapter (Present through the application. One of the Clean architecture pillars)
- Composite (for validation)
- Dependency Injection (Present through the application. To decouple the components and respect the SOLID principles)
- Abstract Server 
- Builder 
- Singleton (Present in abstraction server)
- Decorator (Present in the Logger)

The project is divided into 2 principle parts (scr and tests). I choose this approach to facilitate my building process.

The scr is divided into layers segregations.

### 1) Domain Layer
  Define the critical business rules of a domain. In our context, the ticket model with all the necessary information.

  This layer is also composed of Use Cases.

  The use cases contain all the application business rules. This abstraction is responsible for encapsulating and implementing all the use cases of the system.
  Also, can be described by the high-level user operations.

  Finally, the Domain layer doesn't have a dependency on external layers. But 2 other layers have a relation with it: The data layer and the presentation layer.
  
### 2) Data Layer
  The main objective for the data Layer is to provide a dependency injection for the domain layer and the infra layer (more external layer).
  For example, the DbAddTicket implements an interface called AddTicketRepo (A repo for the use-case AddTicket). Furthermore, the TicketMongoRepo also implements
  the AddTicketRepo interface. This is useful for uncoupling the domain for external tools (like MongoDB).

### 3) Presentation Layer
  The presentation layer is responsible for providing our controllers for the Main Layer. So, they are responsible for implementing all the protocols and interfaces
  for our external entities and tools used. For example, uncoupling the Request and Response HTTP protocols with the Express.js HTTP protocols. This is necessary
because if in the mid-long term, the express lib became deprecated, we can just change the express adapter for another lib, and all our internal HTTP protocols are
regarded.

### 4) Main layer
  Responsible for fitting all the parts of the project basically with Factories Patterns. So, this Layer has connections with all the other layers, regarding the
  Domain Layer.

### Other considerations.
- For improving the consistency of the code, I designed one layer to do all the validations necessary.
- Also, the *tests* folder contains all the unit and integrated tests used, with the TDD approach.
- I also tried to use atomic commits for consistency and use a standard for [commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Further implementations
Unfortunately, I didn't finish all the requirements, but the next steps for the project are:
- [ ] Finish the API routes
- [ ] Implements Docker  compose
- [ ] Implements CI/CD tools (like travis and coveralls) beyond husky and lint-staged. 
- [ ] Documents the backend with Swagger.

Thank you for your consideration and time.

## FrontEnd

Unfortunately, I didn't create the frontend yet.
