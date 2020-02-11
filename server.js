'use strict'

const path = require('path');
const fastify = require('fastify')();
const PORT = process.env.PORT || 3000;

fastify
    .register(require('fastify-static'), {
        root: path.join(__dirname, 'build')
    })
    .listen(PORT, err => {
        if(err) throw err;
    });