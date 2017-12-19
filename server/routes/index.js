const express = require('express');
const path = require('path');
const router = express.Router();

// for any routes at /api/, use ./apiRoutes router
router.use('/api', require('./apiRoutes'));

router.get('*', (req, res) => {
    let build;
    if (process.env.NODE_ENV === 'production') {
        build = 'build';
    } else {
        build = 'public';
    }
    res.sendFile(path.resolve(__dirname, '../../client', build, 'index.html'));
});

module.exports = router;
