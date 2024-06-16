import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import prisma from "@/prisma/client";
import axios from "axios";

const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = contactFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const data = await prisma.contact.create({
    data: {
      fullName: body.fullname,
      email: body.email,
      serviceType: body.serviceType,
      inquiryType: body.inquiryType,
      message: body.message,
    },
  });

  if (!data) {
    return NextResponse.json("Error Sending Mail", { status: 400 });
  }

  axios.post("http://localhost:3000/api/contact/email", {
    fullname: body.fullname,
    email: body.email,
    serviceType: body.serviceType,
    inquiryType: body.inquiryType,
    message: body.message,
  });

  return NextResponse.json(data, { status: 201 });
};

export { POST };
