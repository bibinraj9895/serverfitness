// 1 Import json server
const jsonServer = require('json-server')

// 2 Create an app using json server
const fitnessServer = jsonServer.create()

// 3 Creating a router for your json server
const router = jsonServer.router('db.json')

// 4 Creating a middleware used for parsing json-js
const middleware = jsonServer.defaults()

// 5 Define port
const PORT = 3000

// 6 This means that any incoming HTTP requests to your server will go through these middlewares and be handled by the router.
fitnessServer.use(middleware)
fitnessServer.use(router)

// 7 Server is up and running, It logs a message to the console indicating that the JSON server is listening on the specified port
fitnessServer.listen(PORT,()=>{
    console.log("Fitness Tracker Server running on the port",PORT);
    
})