# EwpDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Best Practices to be followed

#### Use Angular CLI - In Place

Angular CLI is one of the most powerful accessibility tools available when developing apps with Angular. Angular CLI makes it easy to create an application and follows all the best practices!

So instead of creating the files and folders manually, use Angular CLI to generate new components, directives, modules, services, and pipes.

#### Maintain proper folder structure - In Place

Creating a folder structure is an important factor we should consider before initiating our project. Our folder structure will easily adapt to the new changes during development.

```
-- app
|-- modules
|-- home
|-- [+] components
|-- [+] pages
|-- home-routing.module.ts
|-- home.module.ts
|-- core
|-- [+] authentication
|-- [+] footer
|-- [+] guards
|-- [+] http
|-- [+] interceptors
|-- [+] mocks
|-- [+] services
|-- [+] header
|-- core.module.ts
|-- ensureModuleLoadedOnceGuard.ts
|-- logger.service.ts
|
|-- shared
|-- [+] components
|-- [+] directives
|-- [+] pipes
|-- [+] models
|
|-- [+] configs
|-- assets
|-- scss
|-- [+] partials
|-- \_base.scss
|-- styles.scss
```

#### Follow consistent Angular coding styles

– Limit files to 400 Lines of code.- Define small functions and limit them to no more than 75 lines.- Have consistent names for all symbols. The recommended pattern is feature.type.ts.- If the values of the variables are intact, then declare it with ‘const’.
– Use dashes to separate words in the descriptive name and use dots to separate the descriptive name from the type.
– Names of properties and methods should always be in lower camel case.
– Always leave one empty line between imports and modules; such as third party and application imports and third-party modules and custom modules.

#### Use trackBy along with ngFor

When using ngFor to loop over an array in templates, use it with a trackBy function which will return a unique identifier for each DOM item.

When an array changes, Angular re-renders the whole DOM tree. But when you use trackBy, Angular will know which element has changed and will only make DOM changes only for that element.

#### Use Lazy Loading

Try to lazy load the modules in an Angular application whenever possible. Lazy loading will load something only when it is used. This will reduce the size of the application load initial time and improve the application boot time by not loading the unused modules.

#### Cache API calls

When making API calls, responses from some of them do not change frequently. In those cases, we can add a caching mechanism and store the value from an API. When another request to the same API is made, we get a response from the check, if there is no value available in the cache then we make an API call and store the result.

We can introduce a cache time for some API calls the value change, but not frequently. Caching API calls and avoiding unwanted duplicate API calls improves speed of the application and also ensures we do not download the same information repeatedly.

#### Use async pipe in templates

Observables can be directly used in templates with the async pipe, instead of using plain JS values. Under the hood, an observable would be unwrapped into plain value. When a component using the template is destroyed, the observable is automatically unsubscribed.

#### Declare safe strings

The variable of type string has only some set of values and we can declare the list of possible values as the type. So the variable will accept only the possible values. We can avoid bugs while writing the code during compile time itself.

#### Avoid any type

Declare variables or constants with proper types other than any. This will reduce unintended problems. Another advantage of having good typings in our application is that it makes refactoring easier.

#### Avoid logic in templates

All template logic will be extracted into a component. Which helps to cover that case in a unit test and reduce bugs when there is template change.

#### Break down into small reusable components.

This might be an extension of the Single responsibility principle. Large components are very difficult to debug, manage and test. If the component becomes large, break it down into more reusable smaller components to reduce duplication of the code, so that we can easily manage, maintain and debug with less effort.
