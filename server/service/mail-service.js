const nodemailer = require('nodemailer');

class MailService{

    transporter;

    constructor(){
        nodemailer.createTestAccount((err, account) => {
            this.transporter = nodemailer.createTransport({
                // host: account.smtp.host,
                // port: account.smtp.port,
                // secure: account.smtp.secure,
                service: 'yandex',
                auth: {
                    user: "",
                    pass: "",
                },
            });
        })
    }

    async sendActivationMale(email, link){
        try{
            await this.transporter.sendMail({
                from: '',
                to: ""+email,
                subject: `Активация аккаунта на GameSpace`,
                text: '',
                html: 
                    `
                        <div>
                            <h1>Для активации перейдите по ссылке</h1>
                            <a href="${link}">${link}</a>
                        </div>
                    `
            }, (err, info) => {
                if (err) {
                    console.log('Error occurred. ' + err.message);
                    return process.exit(1);
                }
        
                console.log('Message sent: %s', info.messageId);

                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            })
        }catch(e){
            console.log("error")
        }
    }

}

module.exports = new MailService();