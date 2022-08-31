# Covergo exercise

## 1. Tech Stack

- Vue 3
- Vite
- Vitest
- Composition API and Vue Composable functions
- Typescript
- TailwindCSS
- Eslint, husky and lint-staged for automatic linting on commit
- Conventional commit

## 2. Architechture

### Folder structure

```md
- src
  - assets : for storing all static files (images, css)
  - components
    - multistep-form : components related to the wizard form
    - form : contains form input elements
    - shared : components that can be used accross different pages and modules
  - composable : reusable stateful logic with Vue Composition API
  - core-component : components that will only be used in a particular module
  - data: store static data related to business logic
  - modules : core pages of the application
  - types : TypeScript files
  - utils : reusable functions
  - view : stores screens of the application
```

#### Premium calculation

- The `premium` value will not be calculated until the required values (age, rate) are passed in

#### Test coverage

- I chose Vitest [Vitest](https://vitest.dev) bacause it is blazing fast and it has similar, performant and works perfectly with Vite. I wrote test for the most important business logic of the app, the premium calculation feature.

#### TypeScript support

- The application is fully typed making it easy to scale and also to maintain. I created types for `ALL` data used in the application to have a much more predictable app

##### Error handling

- If there was more time given, I would have worked with a declarative form validation library like `vee-validate`. Currently form errors are triggered on button click and also by watching reactive `refs`

##### Constants

```md
- src
  - utils
    - constant.ts
```

This is a fully typed file contains all the constant data like `max age, currency, stepper status` of the entire application. It prevents typo and also improves code readability.
