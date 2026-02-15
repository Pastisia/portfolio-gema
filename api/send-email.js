import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { from_name, from_email, subject, message } = req.body;

  // Validate input
  if (!from_name || !from_email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create transporter dengan Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "nugrohogemasatya@gmail.com",
      replyTo: from_email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #3B82F6;">Pesan Baru dari Portfolio</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Dari:</strong> ${from_name}</p>
            <p><strong>Email:</strong> ${from_email}</p>
            <p><strong>Subjek:</strong> ${subject}</p>
          </div>
          
          <h3>Pesan:</h3>
          <div style="background-color: #fafafa; padding: 15px; border-left: 4px solid #3B82F6; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Balasan akan dikirim ke: ${from_email}
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true,
      message: "Email sent successfully" 
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ 
      success: false,
      message: "Failed to send email",
      error: error.message 
    });
  }
}
