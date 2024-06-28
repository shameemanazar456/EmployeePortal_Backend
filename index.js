const server = require('json-server')

const employeeServer = server.create()

const router = server.router("db.json")

const middleWare = server.defaults()

employeeServer.use(middleWare)
employeeServer.use(router)

const PORT = 3000 || process.env.PORT

employeeServer.listen(PORT,()=>{
    console.log(`Server running successfully at port number ${PORT}`);
})