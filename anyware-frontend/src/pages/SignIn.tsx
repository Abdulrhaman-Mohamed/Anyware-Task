import { Box, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import RHTextField from "../components/RHTextField";
import { Link,  useNavigate } from "react-router-dom";
import { signIn } from "../service/authService";
import { useTranslation } from "react-i18next";

type Props = {};

type FormValues = {
  email: string;
  password: string;
};

export default function SignIn({}: Props) {
  const { control, handleSubmit } = useForm<FormValues>();
  const { t } = useTranslation();
  const Navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const dataRes = await signIn(data);
    if(dataRes?.message == "success") Navigate('/dashboard')
  };
  return (
    <>
      <Box
        component={"main"}
        height={"90vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            border: "1px solid",
            borderColor: "primary.main",
            padding: 3,
            width: "95%",
            borderRadius: 1,
          }}
        >
          <Box padding={"20px 0"}>
            <Typography variant="h2" fontWeight={700}>
              {t('sign-in')}
            </Typography>
            <Typography variant="subtitle2" color="third">
              {t('welcome-to')} Study.com
            </Typography>
          </Box>

          <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            <RHTextField
              name="email"
              label="email"
              control={control}
              rules={{
                required: "email-is-required",
                minLength: { value: 3, message: "minimum-3-characters" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "email-validation",
                },
              }}
              helperText="enter-your-email"
            />

            <RHTextField
              name="password"
              label="password"
              control={control}
              rules={{
                required: "password-is-required",
                minLength: { value: 6, message: "minimum-6-characters" },
                maxLength: { value: 16, message: "maxmum-16-characters" },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[@$!%*?&]).*$/,
                  message:
                    "password-pattern",
                },
              }}
              helperText="enter-your-password"
              type="password"
            />

            <Button type="submit" variant="contained" sx={{ width: "25%" }}>
              {t("submit")}
            </Button>
          </Box>

          <Box padding={"20px 0"}>
            <Typography variant="subtitle2">
              {t('you-can-sign-up-from-here')}{" "}
              <Typography
                component={"span"}
                sx={{ textDecoration: "underline" }}
                variant="subtitle2"
                color="third"
              >
                <Link to={"/sign-up"}>{" "}{t("create-account")}</Link>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
