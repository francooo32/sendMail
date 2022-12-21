require('dotenv').config();
const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')

const Mail=requiere('./routes/mailroute')

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", Mail)

app.listen(port, () => {
    console.log('Server running at port', port)
})