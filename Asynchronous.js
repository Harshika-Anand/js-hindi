/*Js is Synchronous and single threaded, sequence mein hi chalega
Everything will be executed on a single thread, this is the default behaviour
Blocking code vs Non blocking code
B code blocks the flow of the entire program.(Read file Synchronous)
NB code does not.(Read file Asynchrnous, achieve other tasks, once the file is read, kernel will respond)
NB seems better but what if we encounter error while reading, user would already have gotten the success message by then, here we'll prefer the message to be sent only if Database gets the successful message entry, i.e. B code.
Take 2 components: JS engine, web api(browser)/environment(node)
Web api se we get DOM access, not through node. We also get a task queue(Makes js efficient) and promises(high priority queue).
asynchronous apis: set timeouts and all. These are found in node/web api.
Say a function is being called through asynchronous api, set timeout timeouts the function to be executed after a certain time period.
the register call back box registers this.
Now we also have a task queue (FIFO). the callback will be added to the call stack and then gets executed. 
Note that if you write 1, setTimeout(0), 2, order of execution: 1,2,setTimeout(0).
API is basically a communication medium for a frontend and a backend or 2 languages.
json formatter pe add the api, it will format and beautify the data. we can also view it as a tree.
*/
