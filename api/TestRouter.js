import express from 'express';

const testRouter = express.Router();

testRouter.get('/test', (req, res)=>{
    res.status(200).send("Test Router Working");
});

export default testRouter;