# Callbacks

- Callbacks in javascript allows us to execute asynchronous task in a synchronous single threaded environment.

- Callbacks helps us to write asynchronous code in javascript.

## Issues with Callbacks

### 1. Callback Hell

- Callback Hell is the nested callbacks stacked below one another forming a pyramid structure.

- The structure is known as pyramid of doom.

#### Callback Hell Consequences

- Code becomes unreadable and unmaintainable.

- Complexity of code increases.

### 2. Inversion of control

- Inversion of control means loosing control of our code while using callbacks.

- It happens whenever the callback function is passed to another function which gives control of callback function to another function. Now it is the responsibility of another function to call the callback function.
