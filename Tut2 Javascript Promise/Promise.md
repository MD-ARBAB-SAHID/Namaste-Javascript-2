# Javascript Promise

- Promise is a Javascript object representing eventual completion or failure of an asynchronous operation or event.

- It handles asynchronous events.

- Promise object is immutable.

<img width="339" alt="Screenshot 2022-10-16 at 3 21 50 AM" src="https://user-images.githubusercontent.com/63171580/196009499-96f79753-34e3-4c11-ad7c-bfc1da43f28e.png">

- **PromiseState** : Represents the current state of the promise.

- **PromiseResult** : Contains the actual data after completion of an event.

## States Of Promise

1. **Pending** : It is the initial state of the promise.
2. **Fulfilled** : It states that the event has been successfully completed.
3. **Rejected** : It states that event or operation has been failed.

## .then(callback)

- Promises can be resolved by attaching a then function with it which basically takes a callback which has to be executed after the successful completion of an asynchronous task.

- Javascript gurantees that the callback passed to **then()** will be executed only once after the successful completion of an asynchronous task (100%).
<img width="1074" alt="Screenshot 2022-10-16 at 3 39 50 AM" src="https://user-images.githubusercontent.com/63171580/196009509-71b6574f-1ede-4300-9f80-ddb2ac1730e7.png">

## Advantages of Promise

1. It helps us to get rid of callback hell.
2. Solves the inversion of control issue.
3. Code becomes readable and maintainable.
4. It gives control back to the developer.
