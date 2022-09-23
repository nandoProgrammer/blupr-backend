import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
routes(app);

const port = 3000;

app.listen(port);