const express = require('express');
const router  = express.Router();

// GET - /api/
router.get('/', (req, res) => {
    res.json({
        test: 'test'
    });
});

// GET - /api/product
router.get('/:product', (req, res) => {
    res.json({ product });
});

module.exports = router;
