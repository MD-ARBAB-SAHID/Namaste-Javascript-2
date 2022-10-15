# Javascript Promise

- Promise is a Javascript object representing eventual completion or failure of an asynchronous operation or event.

- It handles asynchronous events.

- Promise object is immutable.

- **PromiseState** : Represents the current state of the promise.

- **PromiseResult** : Contains the actual data after completion of an event.

## States Of Promise

1. **Pending** : It is the initial state of the promise.
2. **Fulfilled** : It states that the event has been successfully completed.
3. **Rejected** : It states that event or operation has been failed.

## .then(callback)

- Promises can be resolved by attaching a then function with it which basically takes a callback which has to be executed after the successful completion of an asynchronous task.

- Javascript gurantees that the callback passed to **then()** will be executed only once after the successful completion of an asynchronous task (100%).

## Advantages of Promise

1. It helps us to get rid of callback hell.
2. Solves the inversion of control issue.
3. Code becomes readable and maintainable.
4. It gives control back to the developer.
