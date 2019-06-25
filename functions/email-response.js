
exports.handler = function(event, context, callback) {

    var path = require("path");

    require('dotenv').config({path: path.join(__dirname, '.env')})
    var emailPassword = process.env.DB_PASS

    var nodemailer = require("nodemailer");

    const { name, email, company, message } = JSON.parse(event.body);


    app.post('/email-response', (req, res) => {
        const output = `
          <h2>Contact Us Details</h
          <hr style="margin-right:200px">
          <ul>  
            <li>Name: ${event.body.name}</li>
            <br>
            <li>Email: ${event.body.email}</li>
            <br>
            <li>Company: ${event.body.company}</li>
            </ul>
          <hr style="margin-right:200px">
          <h2>Message</h2>
          <p style="border: 2px solid steelblue; padding:25px; margin-right:200px">${event.body.message}</p>
        `;
      
        console.log("FROM SERVER: ", output)
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          service: 'gmail',
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
              user: 'rob.bridgeman@gmail.com', 
              pass: emailPassword
          },
          tls:{
            rejectUnauthorized:false
          }
        });
      
        // setup email data with unicode symbols
        let mailOptions = {
            from: event.body.email, // sender address
            to: '"Robert Bridgeman", <rob.bridgeman@gmail.com>', // list of receivers
            subject: `Job Opportunity from ${event.body.company}`, // Subject line
            html: output // html body
        };
        console.log(mailOptions);
        // send mail with defined transport object
        console.log("Sending Mail server side!");
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Mail sent successfully! ! !')
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
        });
      });

    
}