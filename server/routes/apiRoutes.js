const express = require('express');
const parser = require('xml2json');
const _ = require('lodash');
const router  = express.Router();
const { getProducts } = require('../controllers/productController');

// GET - /api/
router.get('/', (req, res) => {
    // initialize an empty array to store promises,
    // and empty array to store Amazon items
    let promises = [];
    let items = [];

    // requirement was to have 50 items
    // each Amazon query returns 10 items, so we loop 5 times
    for (let i = 1; i < 6; i++) {
        // getProducts() returns a promise,
        // so we push each promise into promises array
        promises.push(getProducts(i));
    }

    // when all promises have finished...
    Promise.all(promises).then(values => {
        // loop through values
        values.forEach(value => {
            // value includes various data, including 10 items (from 1 of the 5 queries)
            // pull the items array (Item) nested in value
            let newItems = value.result.ItemSearchResponse.Items.Item;
            // concatenate our items array with the array of newItems pulled from value
            items = _.concat(items, newItems);
        });
        // after finishing created array of 50 items...send them as json to react app
        res.json({ items });
    });
});

// GET - /api/product
router.get('/:product', (req, res) => {
    res.json({ product });
});

module.exports = router;
