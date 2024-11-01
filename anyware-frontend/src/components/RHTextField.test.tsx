import { fireEvent, render, screen } from "@testing-library/react";
import RHTextField from "./RHTextField";
import { FormProvider, useForm } from "react-hook-form";
import i18n from "../i18n/config";
import { I18nextProvider } from "react-i18next";
import React, { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Wrapper: React.FC = ({ children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </FormProvider>
  );
};

describe("Check RHFTextField Component", () => {
  it.only("Check Component appear with field", () => {
    render(
      <MemoryRouter>
        <Wrapper>
          <RHTextField
            name="email"
            label="email"
            defaultValue=""
            type="text"
            helperText="enter-your-email"
          />
        </Wrapper>
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/enter your email/i)).toBeInTheDocument();
  });
  
});
