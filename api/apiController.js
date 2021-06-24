const express = require('express');
const router = express.Router();
const userService = require('./apiService');

// routes
router.post('/authenticate', authenticate);
router.get('/nbi/wdl/ata', getResult);
router.post('/nbi/device/5ef9a217291ff37768d49ab3/download/file/5ef9a217291ff37768d49ab3', postResult);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getResult(req, res, next) {
    userService.getResult()
        .then(resultGet => res.send(resultGet))
        .catch(err => next(err));
}

function postResult(req, res, next) {
    userService.postResult()
        .then(resultPost => res.send(resultPost))
        .catch(err => next(err));
}
