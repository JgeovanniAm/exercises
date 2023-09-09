const nodemailer = require('nodemailer');
module.exports = class Email {
    constructor(data) {
        this.data = data
        this.ExprEmail()
    }

    ExprEmail() {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'geovanniam171078@gmail.com',
                pass: 'rmroihzuihsdarjw'
            }
        });
        const object = {
            from: JSON.parse(this.data).email,
            to: 'geovanniam171078@gmail.com',
            subject: JSON.parse(this.data).nombre,
            text: JSON.parse(this.data).mensaje
        }
        this.transport(transporter, object)
    }

    transport(transporter, object) {
        transporter.sendMail(object, (error, info) => {
            if (error) return console.log(error);
            console.log('Mensaje enviado: ' + info.response);
            transporter.close();
        });
    }
}