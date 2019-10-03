const express = require('express');

const server = express();

server.use(express.json());

const shout = [];

server.get('/', (req, res) => {
  res.status(200).json({ Hello: 'This is my first Heroku App Deployment' });
});

//for heroku we need a dynamic port
// we can read the port value added by the environment
const port = process.env.PORT || 8001;

server.listen(port, () => console.log(`\n** api running on port ${port}`));
