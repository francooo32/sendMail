const nodeMailer = require('nodemailer')
exports.sendMail=(req, res)=>{
    console.log("req body", req.body);
    let userName = req.body.nombre;
    let userMail = req.body.email;
    let userMsj = req.body.msj;
    let fileBase64 = req.body.base64

    const attachments = fileBase64.map((base64)=>{
        return { path: base64 };
      });

    let transporter = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS,
        }
    })

    var message = {
        from:userMail,
        to:process.env.EMAIL,
        subject: "Contacto desde la Web",
        text:"Nombre: " + userName + "\n" + "Mail: " + userMail + "\n" + "Mensaje: " + userMsj,
        html: `<h1>Heading</h1>
        <p><Test nodemailer/p>`,
        attachments: attachments
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