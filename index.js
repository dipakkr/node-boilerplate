import express from 'express';
import TestRouter from './api/TestRouter';
import './db/mongoose';

const app = express();

//Middleware 
app.use(express.json());

app.get('/test', (req, res)=>{
    res.send('Hello World');
});

app.use('/', TestRouter);

app.listen(3000, (req, res)=>{
    console.log('Server Started at 3000');
})