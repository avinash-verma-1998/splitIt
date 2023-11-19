import express,{Express} from 'express';
import mongoose from 'mongoose';
import { userRouter } from './Routes/userRoutes';
import bodyParser from 'body-parser';
const app: Express = express();

//middleware

// parse application/json
app.use(bodyParser.json())
//routes
app.use('/api/user',userRouter);

//database connection
mongoose.connect('mongodb+srv://admin:1A%4056rsGiN@common.wqaibwj.mongodb.net/?retryWrites=true&w=majority')
.then((res)=>{
    console.log("db connected");
})
.catch(err => console.log(err))

//run the server
app.listen(8000,()=>{
    console.log("running on 8000");
})
