import express from 'express';
import cors from 'cors';
import leetcodeRouter from './routes/leetcode.router';


const port = 5002;
const app = express(); 

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes 
app.use('/leetcode', leetcodeRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})