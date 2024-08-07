const transporter = require('../Middleware/Nodemailer')

const sendOtp = async (req, res,next) => {
console.log(process.env.EMAIL_USER)
    const { email,password,website} = req.body;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `${website} credentials` ,
      html: `
      <p>New login,</p>
      <p>these are the credentials  below :</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>`
    }
    try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'login successfully' });
    } catch (err) {
    next(err);
    }};

    module.exports = {sendOtp}