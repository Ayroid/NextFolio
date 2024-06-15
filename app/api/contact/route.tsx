import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/schemas/contactFormSchema";
import prisma from "@/prisma/client";

const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = contactSchema.safeParse(body);

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

  return NextResponse.json(data, { status: 201 });
};

export { POST };
