import z, { string } from "zod";

const contactMailSchema = z.object({
  fullname: z
    .string()
    .min(3, "Name should be atleast 3 characters long")
    .max(100, "Name too long"),
  email: z
    .string()
    .email("Please provide a valid email")
    .max(100, "Email too long"),
  serviceType: string()
    .min(0, "Please provide a service type")
    .max(100, "Service type too long"),
  inquiryType: string()
    .min(0, "Please provide an inquiry type")
    .max(100, "Inquiry type too long"),
  message: z
    .string()
    .min(0, "Please provide a message")
    .max(5000, "Message too long"),
});

export { contactMailSchema };
