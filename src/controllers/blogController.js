const path = require('path');
const blogModelo = require("../models/blog");

const blogController = {
    blog: (req,res)=> res.render(path.resolve(__dirname,'../views/blogs/blog-main.ejs'), {articulos : blogModelo.todos()}),
    detail: (req,res)=> res.render(path.resolve(__dirname,'../views/blogs/blog-detail.ejs'),{ articulo : blogModelo.buscar( 'id' , req.params.id)} )
};

module.exports = blogController;