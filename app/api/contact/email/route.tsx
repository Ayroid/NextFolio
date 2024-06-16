import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import WelcomeTemplate from "@/email/contactReply";
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

  const emailHtml = render(
    <WelcomeTemplate
      fullname={validation.data.fullname}
      inquiryType={validation.data.inquiryType}
      serviceType={validation.data.serviceType}
      message={validation.data.message}
    />,
  );

  const options = {
    from: process.env.EMAIL_USER,
    to: validation.data.email,
    subject: "Message Received!",
    html: emailHtml,
  };

  await transporter.sendMail(options);
  return NextResponse.json("Mail Sent Successfully!");
};

export { POST };
