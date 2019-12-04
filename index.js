const server = require('./api/server.js')

server.listen(4001, () => {
  console.log('\n*** Server Running on http://localhost:4001 ***\n');
});
