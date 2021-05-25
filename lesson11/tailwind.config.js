module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            roboto: [
                "-apple-system",
                "BlinkMacSystemFont",
                "Roboto",
                "Helvetica",
                "Arial",
                "sans-serif",
            ],
        },
        extend: {
            colors: {
                black: "rgb(10,10,10)",
                "dodger-blue": {
                    DEFAULT: "#1DA1F2",
                    50: "#F6FBFE",
                    100: "#DEF1FD",
                    200: "#AEDDFA",
                    300: "#7DC9F8",
                    400: "#4DB5F5",
                    500: "#1DA1F2",
                    600: "#0C85D0",
                    700: "#0967A0",
                    800: "#064870",
                    900: "#04293F",
                },
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },
    plugins: [],
};