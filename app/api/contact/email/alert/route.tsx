import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import ContactAlertMail from "@/emails/contactAlert";
import { contactMailSchema } from "@/schemas/contactMailSchema";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = contactMailSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const emailHtml = render(<ContactAlertMail {...body} />);

  const options = {
    from: process.env.EMAIL_USER,
    to: "ayushsk0000@gmail.com",
    subject: "New Query Received!",
    html: emailHtml,
  };

  await transporter.sendMail(options);
  return NextResponse.json("Mail Sent Successfully!");
};

export { POST };
