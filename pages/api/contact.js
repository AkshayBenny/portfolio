import nodemailer from 'nodemailer'
export default async function handler(req, res) {
  const { name, email, message } = req.body
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NEXT_USER,
      pass: process.env.NEXT_PASSWORD,
    },
    secure: true,
  })

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'akshaybennyworkajh@gmail.com',
      subject: `New Message from Contact Form from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      `,
    })
  } catch (error) {}
  res.status(200).json(req.body)
}
