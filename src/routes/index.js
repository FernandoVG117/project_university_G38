const express = require('express');
const routerStudent = require('./student.router');
const router = express.Router();

// Put your routes here:
router.use('/students', routerStudent);

module.exports = router;