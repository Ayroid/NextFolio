"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Text, TextArea } from "@radix-ui/themes";
import { useForm, FormProvider } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { z } from "zod";

import {
  FormErrorMessage,
  FormSelectField,
  FormTextField,
  LoadingSpinner,
} from "@/app/components";
import { contactSchema } from "@/schemas";
import { useState } from "react";

export type contactForm = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const formMethods = useForm<contactForm>({
    resolver: zodResolver(contactSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { label: "Web Development", value: "WebDevelopment" },
    { label: "Frontend Development", value: "FrontendDevelopment" },
    { label: "Backend Development", value: "BackendDevelopment" },
    { label: "DevOps", value: "DevOps" },
    { label: "Consulting", value: "Consulting" },
    { label: "Other", value: "Other" },
  ];

  const inquiryOptions = [
    { label: "General Inquiry", value: "General" },
    { label: "Hiring", value: "Hiring" },
    { label: "Project Proposal", value: "Project Proposal" },
    { label: "Collaboration", value: "Collaboration" },
    { label: "Feedback", value: "Feedback" },
    { label: "Other", value: "Other" },
  ];

  const submitContactForm = async (data: contactForm) => {
    setIsSubmitting(true);
    console.log(data);
    setIsSubmitting(false);
  };

  return (
    <Flex
      direction="column"
      className="bg-neutral-900 rounded-2xl top-light-shadow py-6 px-8 w-[23rem] md:w-[47.5rem]"
    >
      <Text className="text-xl font-semibold">React out to me!</Text>
      <FormProvider {...formMethods}>
        <form
          className="space-y-5 flex flex-col justify-center align-middle"
          onSubmit={handleSubmit(submitContactForm)}
        >
          <Flex
            mt="5"
            gap="5"
            wrap={{
              initial: "wrap",
              md: "nowrap",
            }}
          >
            <Flex direction="column" className="w-full">
              <FormTextField
                fieldName="fullname"
                placeholder="Full Name"
                required
                Icon={<FaUser color="gray" />}
                register={register}
              />
              <FormErrorMessage>{errors.fullname?.message}</FormErrorMessage>
            </Flex>
            <Flex direction="column" className="w-full">
              <FormTextField
                fieldName="email"
                placeholder="Email"
                required
                Icon={<LuMail color="gray" />}
                register={register}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </Flex>
          </Flex>
          <Flex
            mt="5"
            gap="5"
            wrap={{
              initial: "wrap",
              md: "nowrap",
            }}
          >
            <Flex direction="column" className="w-full">
              <FormSelectField
                fieldName="serviceType"
                placeholder="Select Service Type"
                required
                Icon={<MdOutlineDesignServices color="gray" />}
                options={serviceOptions as { value: string; label: string }[]}
              />
              <FormErrorMessage>{errors.serviceType?.message}</FormErrorMessage>
            </Flex>
            <Flex direction="column" className="w-full">
              <FormSelectField
                fieldName="inquiryType"
                placeholder="Select Inquiry Type"
                required
                Icon={<RiSettings4Line color="gray" />}
                options={inquiryOptions as { value: string; label: string }[]}
              />
              <FormErrorMessage>{errors.inquiryType?.message}</FormErrorMessage>
            </Flex>
          </Flex>

          <Flex direction="column" className="w-full">
            <TextArea
              variant="soft"
              color="gray"
              size="3"
              placeholder="Type your message here..."
              radius="large"
              className="h-52"
              {...register("message", { required: true })}
            />
            <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
          </Flex>

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="soft"
            radius="large"
            size="3"
          >
            {"Submit Form"} {isSubmitting && <LoadingSpinner />}
          </Button>
        </form>
      </FormProvider>
    </Flex>
  );
};

export default ContactForm;
