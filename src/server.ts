import express,{Express} from 'express';
import mongoose from 'mongoose';

const app: Express = express();
app.get("/",(req,res)=>{
    res.send("hello spldssdti");
})


mongoose.connect('mongodb+srv://admin:1A%4056rsGiN@common.wqaibwj.mongodb.net/?retryWrites=true&w=majority')
.then((res)=>{
    console.log("success");

})
.catch(err => console.log(err))




app.listen(8000,()=>{
    console.log("running on 8000");
})
