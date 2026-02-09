/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "white",
                foreground: "black",
                primary: {
                    yellow: "#fdf101",
                    red: "#ed1c24",
                    green: "#4fad40",
                    pink: "#ec008c",
                    blue: "#2e3192",
                },
            },
        },
    },
    plugins: [],
}
