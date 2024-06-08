import { Select, Flex, Box } from "@radix-ui/themes";
import { contactForm } from "./ContactForm";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  fieldName: keyof contactForm;
  placeholder: string;
  required: boolean;
  Icon: React.ReactNode;
  options: { value: string; label: string }[];
}

const FormSelectField = ({
  fieldName,
  placeholder,
  required,
  Icon,
  options,
}: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <Box className="w-full">
          <Select.Root
            size="3"
            value={field.value}
            onValueChange={field.onChange}
          >
            <Select.Trigger
              variant="soft"
              color="gray"
              radius="large"
              style={{ width: "100%" }}
              placeholder={
                (
                  <Flex align="center" gap="2">
                    {Icon}
                    {placeholder}
                  </Flex>
                ) as any
              }
            />
            <Select.Content variant="soft" position="item-aligned">
              <Select.Group>
                {options.map((option) => (
                  <Select.Item key={option.value} value={option.value}>
                    <Flex align="center" gap="2">
                      {Icon}
                      {option.label}
                    </Flex>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Box>
      )}
    />
  );
};

export default FormSelectField;
