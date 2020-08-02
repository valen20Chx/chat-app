const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

router.get('/all', (req, res) => {
    res.send('All users');
});

router.get('/:id', (req, res) => {
    res.send(`User(${req.params.id})`);
});

router.post('/create', (req, res) => {
    console.log(req.body);
    const body = req.body;
    console.log('Creating user:', {
        id: body.id,
        username: body.username,
        email: body.email,
        joinedDate: new Date()
    });
    res.send(`Creating user:${{
        id: body.id,
        username: body.username,
        email: body.email,
        joinedDate: new Date()
    }}`);
});

module.exports = router;