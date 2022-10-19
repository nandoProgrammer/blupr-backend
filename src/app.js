import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
routes(app);

const port = process.env.PORT;

app.listen(port);