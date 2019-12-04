const express = require('express');
const hubsRouter = require('../hubs/hubs-router.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('/api/hubs', hubsRouter)

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

module.exports = server;