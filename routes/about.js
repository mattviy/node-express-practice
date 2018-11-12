const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("layouts/about", {title: 'About us'});
});

module.exports = router;