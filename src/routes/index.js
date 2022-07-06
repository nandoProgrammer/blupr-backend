const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(authRoutes);
}