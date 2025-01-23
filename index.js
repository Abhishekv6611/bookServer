const jsonServer =require('json-server')

const MPServer=jsonServer.create()
const middleware=jsonServer.defaults()
const PORT=3000
const route=jsonServer.router('db.json')

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log("server is running");
    
})