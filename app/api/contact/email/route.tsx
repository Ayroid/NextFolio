import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import WelcomeTemplate from "@/email/contactReply";
import { contactMailSchema } from "@/schemas/contactMailSchema";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "parko.user.assistance@gmail.com",
    pass: "esszpdjpxeozaayc",
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
    from: "parko.user.assistance@gmail.com",
    to: validation.data.email,
    subject: "Message Received!",
    html: emailHtml,
  };

  // Send the email
  await transporter.sendMail(options);

  // Return a success response
  return NextResponse.json("Mail Sent Successfully!");
};

export { POST };
