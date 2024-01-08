//1 import json-server
const jsonServer = require('json-server');

//2 create a server application using json-server
const doctorServer = jsonServer.create()

//setup path for db.json 
const router = jsonServer.router('db.json')

//return a middilware instance used by json-server
const middilware =jsonServer.defaults()

//setup port for db.json
const port = 3001

//use in server
doctorServer.use(middilware)
doctorServer.use(router)

//to run the server(restserver)
doctorServer.listen(port,()=>{
    console.log("rest server listening on port" +port);
})
