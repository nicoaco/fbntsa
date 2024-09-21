const path = require('path');

const mainController = {
    index : (req,res)=> res.render(path.resolve(__dirname,'../views/index.ejs')),
    contact : (req,res)=> res.render(path.resolve(__dirname,'../views/contact.ejs')),
    about: (req,res)=> res.render(path.resolve(__dirname,'../views/about.ejs'))
    /*,
    services: (req,res)=> res.sendFile(path.resolve(__dirname,'../views/services.html')),
    blog: (req,res)=> res.sendFile(path.resolve(__dirname,'../views/blog.html'))*/
};

module.exports = mainController;
