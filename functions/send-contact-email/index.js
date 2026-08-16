import { Resend } from "resend";

export default async ({ req, res, log, error }) => {
  try {
    if (req.method !== "POST") {
      return res.json(
        {
          success: false,
          message: "Method not allowed",
        },
        405
      );
    }

    const { name, email, message } = JSON.parse(req.body || "{}");

    if (!name || !email || !message) {
      return res.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        400
      );
    }

    const resend = new Resend(process.env.RESEND_APIKEY);

    const { data, error: resendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["im.chaudharyshiva2919@gmail.com"],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (resendError) {
      error(resendError);

      return res.json(
        {
          success: false,
          message: "Failed to send email.",
        },
        500
      );
    }

    log(`Email sent successfully: ${data?.id}`);

    return res.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    error(err);

    return res.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      500
    );
  }
};