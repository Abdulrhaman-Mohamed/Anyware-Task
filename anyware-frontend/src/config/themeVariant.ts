import { Theme } from "@emotion/react";

export const buttonVariant :Theme = {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'contained' },
                            style: {
                               padding:"8px 30px",
                               borderRadius:'8px'
                               
                            },
                        },
                    ],

                },
            },
        },
    },
}