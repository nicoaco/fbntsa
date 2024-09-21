const path = require('path');

const servicesController = {
    services: (req,res)=> res.render(path.resolve(__dirname,'../views/services.ejs'))
};

module.exports = servicesController;