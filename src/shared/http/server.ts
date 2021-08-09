import express from 'express';
import cors from 'cors';
import routes from './routes';
import 'reflect-metadata';
import '../typeorm/index';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3003, () => {
    console.log('Server is running');
});