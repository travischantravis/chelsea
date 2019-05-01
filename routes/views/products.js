var keystone = require('keystone');


//available outside of this file
exports = module.exports = function(req, res){
    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Set locals
    locals.section = 'store';

    // Load Products
    view.query('products', keystone.list('Product').model.find());

    // Render View
    view.render('products');
}
