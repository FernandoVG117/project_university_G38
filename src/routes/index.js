const express = require('express');
const routerStudent = require('./student.router');
const routerCourse = require('./course.router');
const router = express.Router();

// Put your routes here:
router.use('/students', routerStudent);
router.use('/courses', routerCourse);

module.exports = router;