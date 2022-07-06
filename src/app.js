import express from 'express';
import routes from './routes';

const app = express();
routes(app);

const port = 3000;

app.listen(port);