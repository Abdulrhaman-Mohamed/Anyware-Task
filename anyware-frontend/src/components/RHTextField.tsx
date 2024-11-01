// RHTextField.tsx
import React from "react";
import { TextField } from "@mui/material";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface RHTextFieldProps extends UseControllerProps<FieldValues> {
  label: string;
  helperText?: string;
  variant?: "outlined" | "filled" | "standard";
  type: "text" | "password";
}

const RHTextField: React.FC<RHTextFieldProps> = ({
  label,
  helperText,
  variant = "outlined",
  control,
  name,
  rules,
  defaultValue = "",
  type = "text",
}) => {
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={t(label)}
          variant={variant}
          helperText={error ? t(error.message as string) : t(helperText as string)}
          error={!!error}
          fullWidth
          type={type}
        />
      )}
    />
  );
};

export default RHTextField;
