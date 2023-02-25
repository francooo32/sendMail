require('dotenv').config();
const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')

const Mail=require('./routes/mailroute')

const port = process.env.PORT;
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", Mail)

app.listen(port, () => {
    console.log('Server running at port', port)
})