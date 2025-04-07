// Copyright 2023 Open Text.

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        "bg-[#E5004C]",
        "bg-[#FF454F]",
        "bg-[#E57828]",
        "bg-[#FFB000]",
        "bg-[#737582]",
        "bg-[#3398FF]",
        "bg-[#D7235A]",
        "bg-[#33C180]",
        "text-[#E5004C]",
        "text-[#FF454F]",
        "text-[#E57828]",
        "text-[#FFB000]",
        "text-[#737582]",
        "text-[#3398FF]",
        "text-[#D7235A]",
        "text-[#33C180]",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#E5004C",
                secondary: "#FF454F",
                warning: "#E57828",
                caution: "#FFB000",
                neutral: "#737582",
                info: "#3398FF",
                danger: "#D7235A",
                success: "#33C180",
            },
            screens: {
                xs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                "3xl": "1900px",
                "4xl": "3000px",
            },
            spacing: {
                18: "4.5rem",
                26: "6.5rem",
                72: "18rem",
                84: "21rem",
                96: "24rem",
            },
            borderRadius: {
                "4xl": "2rem",
                "5xl": "2.5rem",
            },
            fontFamily: {
                sans: ["Inter", "Arial", "sans-serif"],
                mono: ["Menlo", "Monaco", "Courier New", "monospace"],
            },
        },
    },
    plugins: [],
};
