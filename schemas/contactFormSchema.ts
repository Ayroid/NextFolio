import z, { string } from "zod";

enum InquiryType {
  General = "General Inquiry",
  Hiring = "Hiring",
  Support = "Project Proposal",
  Collaboration = "Collaboration",
  Feedback = "Feedback",
  Other = "Other",
}

enum ServiceType {
  WebDevelopment = "Web Development",
  FrontendDevelopment = "Frontend Development",
  BackendDevelopment = "Backend Development",
  DevOps = "DevOps",
  Consulting = "Consulting",
  Other = "Other",
}

const contactSchema = z.object({
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

export { contactSchema, ServiceType, InquiryType };
