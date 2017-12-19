const { OperationHelper } = require('apac');

const opHelper = new OperationHelper({
    awsId: process.env.AWS_ID,
    awsSecret: process.env.AWS_Secret,
    assocId: process.env.Associate_ID
});

module.exports = {
    getProducts: function(i) {
        // executes an ItemSearch to Amazon products
        // returns a Promise
        return opHelper.execute('ItemSearch', {
            'SearchIndex': 'Electronics',
            'ItemPage': i,
            'Keywords': 'laptop',
            'ResponseGroup': 'Images,ItemAttributes,Offers'
        });
    }
}
