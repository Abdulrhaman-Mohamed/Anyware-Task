import { Box, Button, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import RHTextField from "../components/RHTextField";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../service/authService";
import { useTranslation } from "react-i18next";

type Props = {};

type FormValues = {
  username: string;
  email: string;
  password: string;
};

export default function SignUp({}: Props) {
  const { control, handleSubmit } = useForm<FormValues>();
  const Navigate = useNavigate()

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const dataRes = await signUp(data);
    if (dataRes === "User is Created") {
      alert("User is Created");
      Navigate('/sign-in');
    }

  };

  return (
    <>
      <Box
        component={"main"}
        height={"100vh"}
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
              {t("sign-up")}
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
              name="username"
              label="username"
              control={control}
              rules={{
                required: "username-is-required",
                minLength: { value: 3, message: "minimum-3-characters" },
              }}
              helperText="enter-your-username"
            />

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

            <Button type="submit" variant="contained" sx={{width:"25%"}}>
            {t("submit")}
            </Button>
          </Box>

          <Box padding={"20px 0"}>
            <Typography variant="subtitle2">
              {t("you-can-sign-in-from")}{" "}
              <Typography
                component={"span"}
                sx={{ textDecoration: "underline" }}
                variant="subtitle2"
                color="third"
              >
                <Link to={"/sign-in"}>{t("here")}!</Link>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
