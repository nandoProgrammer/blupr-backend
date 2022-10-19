const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const postsRoutes = require('./postRoutes');
const cors = require('cors');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(authRoutes);
    app.use(userRoutes);
    app.use(postsRoutes);
}