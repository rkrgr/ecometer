const config = require('../config/emailConfig');

module.exports = (email, newPassword) => {
    var nodemailer = require('nodemailer');
    
    var transporter = nodemailer.createTransport(config);
    
    var mailOptions = {
      from: 'geschaeftsstelle@motzener-strasse.de',
      to: email,
      subject: 'Passwort zurückgesetzt',
      text: 'Ihr neues Passwort lautet: ' + newPassword
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
