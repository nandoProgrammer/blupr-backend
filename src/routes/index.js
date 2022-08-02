const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes');
const cors = require('cors');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(authRoutes);
}