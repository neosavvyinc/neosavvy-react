const express = require('express');
const SampleController = require('./api/rest/sample.controller');

const router = express.Router();

router.get('/search', SampleController.search);

module.exports = router;
