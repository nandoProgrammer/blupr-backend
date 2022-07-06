//const database = require('../models');

class authController{
    static async hello(req, res){
        return res.status(200).send("Hello");
    }
}

module.exports = authController;