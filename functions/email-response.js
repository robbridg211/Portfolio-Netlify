require('dotenv').config({path: '.env'});

var nodemailer = require("nodemailer");

exports.handler = function(event, context, callback) {

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 200, // <-- Important!
      headers,
      body: "This was not a POST request!"
    };
  }

  var emailPassword = process.env.DB_PASS;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'rob.bridgeman@gmail.com', 
        pass: emailPassword
    }
  });
  try {
    const { data } = JSON.parse(event.body);
    console.log('data: ', data)
  }
  catch(err) {
    console.log('Error: ', err)
  }

  if (!data) {
    return callback(null, {
      statusCode: 400,
      body: 'Mailing details not provided'
    })
  }
    
  // setup email data with unicode symbols
  let mailOptions = {
      from: data.email, // sender address
      to: '"Robert Bridgeman", <rob.bridgeman@gmail.com>', // list of receivers
      subject: `Job Opportunity from ${data.company}`, // Subject line
      html: `
      <h2>Contact Us Details</h
      <hr style="margin-right:200px">
      <ul>  
        <li>Name: ${data.name}</li>
        <br>
        <li>Email: ${data.email}</li>
        <br>
        <li>Company: ${data.company}</li>
        </ul>
      <hr style="margin-right:200px">
      <h2>Message</h2>
      <p style="border: 2px solid steelblue; padding:25px; margin-right:200px">${data.message}</p>
    `  // html body
  };
  console.log(mailOptions);
  // send mail with defined transport object
  console.log("Sending Mail server side!");

  transporter.sendMail(mailOptions, (error, info) => {
    // handle errors
    if (error) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(error)
      });
    }

    // success!
    callback(null, {
      statusCode: 200,
      body: "mail sent"
    });

  });

    
}