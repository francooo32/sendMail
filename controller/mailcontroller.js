const nodeMailer = require('nodemailer')
exports.sendMail=(req, res)=>{
    console.log("req body", req.body);
    let userName = req.body?.nombre;
    let userPhone = req.body?.telefono;
    let userMail = req.body?.email;
    let userMsj = req.body?.msj;
    let fileBase64 = req.body?.base64
    let userCarData = req.body?.carDataForm
    let attachments = "";
    if(fileBase64 != undefined && fileBase64 != null){
        attachments = fileBase64.map((base64)=>{
            return { path: base64 };
        });
    }else{
        attachments = ""
    }

    let transporter = nodeMailer.createTransport({
        service:'Hotmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS,
        }
    })

    var message = {
        from:userMail,
        to:process.env.EMAIL,
        subject: "Contacto desde la Web",
        text: "Nombre: " + userName + "\n" + "Telefono: " + userPhone +"\n" + "Mail: " + 
        userMail + "\n" + "Mensaje: " + userMsj + 
        "\n" + "Datos del vehículos: " + "\n" 
                                       + "Año: " + userCarData?.year + "\n"
                                       + "Marca: " + userCarData?.brand + "\n" 
                                       + "Modelo: " + userCarData?.model + "\n" 
                                       + "Versión: " + userCarData?.version + "\n"
                                       + "Combustible: " + userCarData?.fuel + "\n"
                                       + "Puertas: " + userCarData?.door + "\n"
                                       + "Transmisión: " + userCarData?.transmission + "\n"
                                       + "Motor: " + userCarData?.engine + "\n"
                                       + "Carrocería: " + userCarData?.body + "\n"
                                       + "Color: " + userCarData?.color + "\n"
                                       + "Kilometraje: " + userCarData?.km,
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