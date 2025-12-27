import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_APP_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: "bhanueatcharalara@gmail.com",
      replyTo: email,
      subject: "New Contact Form Message",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err: any) {
    console.error("GMAIL SMTP ERROR:", err);
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
