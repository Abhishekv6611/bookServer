const jsonServer = require('json-server');
const MPServer = jsonServer.create();
const middleware = jsonServer.defaults();
const route = jsonServer.router('db.json');
const PORT = process.env.PORT || 3000;

MPServer.use(middleware);
MPServer.use(route);

MPServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
