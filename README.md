# sendMail
A generic mail sender service to consume

Config importante--> 

Encontraran en el ".env" las siguientes constante vacias

PORT=5000
EMAIL=
PASS=

esto se debe a que deben poner su direccion de mail y password, sin embargo, para Gmail, la password debe ser un toquen;
para ello deben ir a la configuracion de seguridad de su cuenta, activar la verificacion en 2 pasos, una vez
que la tengan les aparecera la opcion "contraseñas de aplicaciones", en la misma clickearan sobre "seleccionar app"--> "otra, nombre personalizado", pongan el que mas les guste, yo puse "nodemailer", les generará un toquen, peguen el mismo en pass, les quedara algo asi:

PORT=5000
EMAIL=usuario@gmail.com
PASS=gbhjwnfhrnkxkjue

con esto ya podran enviar mail a su casilla de gmail.

Para hotmail esto parece no ser necesario por el momento.

Sobre attachments:
Recibe las imagenes en base64, luego las carga como attachments y las envia, tiene un limite de peso que se puede setear en en el index.js --> app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));  

Ojala les sirva! 
Consultas a franco.nic.ch@hotmail.com
