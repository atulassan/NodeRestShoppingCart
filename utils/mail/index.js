const mailer = require('nodemailer');
const { welcome } = require("./welcome_template");
const { cusActivate } = require("./cusactivate_template");
const { purchase } = require("./purchase_template");
const { resetPass } = require("./resetpass_template");
require('dotenv').config();

const getEmailData = (to,name,token,template,actionData) => {

    let data = null;

    switch(template) {
        
        case "welcome":
            data = {
                from: "Waves <waves.guitars.rev@gmail.com>",
                to,
                subject: `Welcome to waves ${name}`,
                html: welcome()
            }
        break;
        case "cusActivate":
            data = {
                from: "Waves <waves.guitars.rev@gmail.com>",
                to,
                subject: `Activate Your Account ${name}`,
                html: cusActivate(actionData)
            }
        break;
        case "purchase":
            data = {
                from: "Waves <waves.guitars.rev@gmail.com>",
                to,
                subject: `Thanks for shopping with us ${name}`,
                html: purchase(actionData)
            }
        break;
        case "reset_password":
            data = {
                from: "Waves <waves.guitars.rev@gmail.com>",
                to,
                subject: `Hey ${name}, reset your pass`,
                html: resetPass(actionData)
            }
        break;
        default:
            data;
    }
    return data;
}


const sendEmail = (to,name,token,type,actionData = null) => {

    const smtpTransport = mailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        service:"Gmail",
        auth:{
            user: "freecoderhub@gmail.com",
            pass: "freecoder19c$&"
        }
    });

    const mail = getEmailData(to,name,token,type,actionData)

    smtpTransport.sendMail(mail,function(error,response){
        if(error){
            console.log(error);
        } else {
            cb()
        }
        smtpTransport.close();
    })
}

module.exports = { sendEmail }