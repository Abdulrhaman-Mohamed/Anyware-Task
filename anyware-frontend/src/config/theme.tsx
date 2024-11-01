import { createTheme } from "@mui/material";
import { themeColor } from "./themeColor";
import { buttonVariant } from "./themeVariant";

export const theme = createTheme({
    ...themeColor,
    ...buttonVariant
})