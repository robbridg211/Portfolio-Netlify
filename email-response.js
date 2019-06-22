
require('dotenv').config({path: path.join(__dirname, '.env')})
var emailPassword = process.env.DB_PASS

const nodemailer = require('nodemailer');


exports.handler = function(event, context, callback) {
    const user = JSON.parse(event.body).user;
    const { name, email, company, message } = user;
}

const output = `
  <h2>Contact Us Details</h
  <hr style="margin-right:200px">
  <ul>  
    <li>Name: ${user.name}</li>
    <br>
    <li>Email: ${user.email}</li>
    <br>
    <li>Company: ${user.company}</li>
    </ul>
  <hr style="margin-right:200px">
  <h2>Message</h2>
  <p style="border: 2px solid steelblue; padding:25px; margin-right:200px">${user.message}</p>
`;

console.log(output)


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


    // Parse data sent in form hook (email, name etc)
    const { data } = JSON.parse(event.body);

    // make sure we have data and email
    if (!data || !data.email) {
        return callback(null, {
        statusCode: 400,
        body: 'Mailing details not provided'
        })
    }


  // setup email data with unicode symbols
  let mailOptions = {
      from: user.email, // sender address
      to: '"Robert Bridgeman", <rob.bridgeman@gmail.com>', // list of receivers
      subject: `Job Opportunity from ${user.company}`, // Subject line
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