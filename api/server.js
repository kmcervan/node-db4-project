const express = require('express');
const RecipesRouter = require('./Recipes/recipes-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res)=>{
    res.status(200).json({ api: 'is up and running!'})
})

module.exports = server;
