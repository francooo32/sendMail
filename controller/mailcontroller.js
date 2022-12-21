const nodeMailer = require('nodemailer')
exports.sendMail=(req, res)=>{
    console.log("req body", req.body);
    let userMail = req.body.email;
    let userMsj = req.body.msj;

    let transporter = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS,
        }
    })

    var message = {
        from:process.env.EMAIL,
        to:userMail,
        subject: "This is a test",
        text:msj
    };

    transporter.sendMail(message, (err, info) => {
        if(err){
            console.log("Error while sending the mail", err)
            return res.status(400).json({
                message:`error while sending the mail ${err}`
            })
        }else{
            console.log("The mail was sended succesfully", info)
            return res.json({
                message:info
            })
        }
    })
}