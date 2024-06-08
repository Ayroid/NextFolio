import { TextField } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import { contactForm } from "./ContactForm";

interface Props {
  fieldName: keyof contactForm;
  placeholder: string;
  required: boolean;
  Icon: ReactNode;
  register: any;
}

const FormTextField = ({
  fieldName,
  placeholder,
  Icon,
  required,
  register,
}: Props) => {
  return (
    <TextField.Root
      placeholder={placeholder}
      variant="soft"
      color="gray"
      size="3"
      className="w-full"
      radius="large"
      {...register(fieldName, { required })}
    >
      <TextField.Slot>{Icon}</TextField.Slot>
    </TextField.Root>
  );
};

export default FormTextField;
