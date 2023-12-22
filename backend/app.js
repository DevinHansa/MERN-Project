const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');


app.use(cors());

app.use(
    express.urlencoded({
        extended: true,

    })
);

app.use(express.json());

app.get('/users', (req, res) => {
    var resObj = [];
    controller.getUsers(users => {
        res.send(users);
    });
});

app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUserbyId(id, user => {
        res.send(user);
    });
});


module.exports = app;