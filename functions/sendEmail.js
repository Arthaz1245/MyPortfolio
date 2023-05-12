const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
  const { name, email, message } = JSON.parse(event.body);
  const myemail = process.env.GMAIL_USER;
  const msg = {
    to: `${myemail}`, // Replace with your email address
    from: `${email}`, // Replace with the sender email address
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: "Email sent successfully",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
