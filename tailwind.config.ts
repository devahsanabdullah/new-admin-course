import type { Config } from 'tailwindcss';
import plugin from "tailwindcss/plugin";

const config: Config = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './templates/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            "3xl": { max: "1419px" },
            // => @media (max-width: 1419px) { ... }
            "2xl": { max: "1339px" },
            // => @media (max-width: 1339px) { ... }
            xl: { max: "1179px" },
            // => @media (max-width: 1179px) { ... }
            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }
            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }
            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }
        },
        extend: {
            colors: {
                primary: "#6C5DD3",
                secondary: "#3F8CFF",
                accent: {
                    1: "#FFA2C0",
                    2: "#FFCE73",
                },
                black: "#1B1D21",
                grey: "#808191",
                "grey-light": "#E4E4E4",
                green: "#7FBA7A",
                dark: {
                    1: "#1F2128",
                    2: "#242731",
                    3: "#000",
                },
                orange: "#FF754C",
                link: "#5F75EE",
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            spacing: {
                0.25: "0.0625rem",
                0.75: "0.1875rem",
                4.5: "1.125rem",
                5.5: "1.375rem",
                6.5: "1.75rem",
                7.5: "1.875rem",
                8.5: "2.125rem",
                9.5: "2.375rem",
                13: "3.25rem",
                15: "3.75rem",
                17: "4.25rem",
                18: "4.5rem",
                19: "4.75rem",
                21: "5.25rem",
                22: "5.5rem",
                26: "6.5rem",
                30: "7.5rem",
                34: "8.5rem",
                38: "9.5rem",
                42: "10.5rem",
                54: "13.5rem",
                58: "14.5rem",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            opacity: {
                15: ".15",
                25: ".25",
                85: ".85",
                95: ".95",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
                0: "0",
                2: "0.125rem",
                4: "0.25rem",
                8: "0.5rem",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                poppins: ["var(--font-poppins)"],
            },
            fontSize: {
                0: ["0px", "0px"],
            },
        },
    },
    plugins: [
        require("@headlessui/tailwindcss")({ prefix: "ui" }),
        require('tailwind-scrollbar'),
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({
                html: {
                    "@apply text-[1rem]": {},
                },
            });
            addComponents({
                ".container": {
                    "@apply w-[calc(100%-26.625rem)] px-16 3xl:w-[calc(100%-24rem)] 3xl:px-12 2xl:w-auto 2xl:px-0":
                        {},
                },
                ".sidebar": {
                    "@apply shrink-0 w-[26.625rem] px-16 3xl:w-[24rem] 3xl:px-12 2xl:w-auto 2xl:px-0":
                        {},
                },
                ".sidebar-border": {
                    "@apply sidebar border-l border-grey-light 2xl:border-l-0 dark:border-grey-light/10":
                        {},
                },
                ".card-shadow": {
                    "@apply relative rounded-3xl before:absolute before:-z-1 before:top-7 before:left-3.5 before:right-4.5 before:-bottom-7 before:rounded-3xl before:bg-[#E3E6EC]/90 before:blur-[4.5rem] dark:before:blur-[2.8rem] dark:before:bg-dark-3/50":
                        {},
                },
                ".btn": {
                    "@apply inline-flex items-center justify-center h-14 px-5 text-button rounded-2xl transition-all":
                        {},
                },
                ".btn-primary": {
                    "@apply btn bg-primary text-white hover:bg-[#4F3ECA]":
                        {},
                },
                ".btn-secondary": {
                    "@apply btn bg-secondary text-white hover:bg-[#216BD9]":
                        {},
                },
                ".btn-black": {
                    "@apply btn bg-black text-white hover:bg-primary":
                        {},
                },
                ".btn-white": {
                    "@apply btn bg-white text-black hover:text-primary dark:bg-dark-2 dark:text-white dark:hover:bg-[#1B1C1C] dark:hover:text-white":
                        {},
                },
                ".btn-grey": {
                    "@apply btn bg-grey-light text-black hover:bg-[#CBCACA] dark:bg-grey-light/10 dark:text-white dark:hover:bg-grey-light/5":
                        {},
                },
                ".btn-circle": {
                    "@apply w-12 h-12 rounded-full bg-white transition-shadow hover:shadow-[0_0.32rem_1.25rem_rgba(227,230,236,0.85)] dark:bg-transparent dark:hover:shadow-[0_0.32rem_1.25rem_rgba(0,0,0,0.3)]":
                        {},
                },
                ".text-d1": {
                    "@apply font-poppins text-[6rem] leading-[7.5rem] font-semibold -tracking-[.0625rem]":
                        {},
                },
                ".text-d2": {
                    "@apply font-poppins text-[4.5rem] leading-[5.5rem] font-semibold -tracking-[.0625rem]":
                        {},
                },
                ".text-d3": {
                    "@apply font-poppins text-[4rem] leading-[4.5rem] font-semibold -tracking-[.0625rem]":
                        {},
                },
                ".text-h1": {
                    "@apply font-poppins text-[3.5rem] leading-[4rem] font-semibold -tracking-[.0625rem]":
                        {},
                },
                ".text-h2": {
                    "@apply font-poppins text-[3rem] leading-[4.5rem] font-semibold -tracking-[.0625rem]":
                        {},
                },
                ".text-h3": {
                    "@apply font-poppins text-[2.5rem] leading-[3.75rem] font-semibold -tracking-[.0625rem]":
                        {},
                },
                ".text-h4": {
                    "@apply font-poppins text-[2rem] leading-[3rem] font-medium -tracking-[.0625rem]":
                        {},
                },
                ".text-h5": {
                    "@apply font-poppins text-[1.5rem] leading-[2rem] font-medium":
                        {},
                },
                ".text-h6": {
                    "@apply font-poppins text-[1.125rem] leading-[1.5rem] font-medium":
                        {},
                },
                ".text-menu": {
                    "@apply text-[0.875rem] leading-[1.25rem] font-semibold":
                        {},
                },
                ".text-title": {
                    "@apply text-[1rem] leading-[1.1875rem] font-semibold":
                        {},
                },
                ".text-caption-1": {
                    "@apply text-[0.8125rem] leading-[1.125rem] font-semibold":
                        {},
                },
                ".text-caption-2": {
                    "@apply text-[0.75rem] leading-[1rem] font-medium":
                        {},
                },
                ".text-body": {
                    "@apply text-[0.875rem] leading-[1.5rem]":
                        {},
                },
                ".text-body-sm": {
                    "@apply text-[0.8125rem] leading-[1.5rem]":
                        {},
                },
                ".text-button": {
                    "@apply text-[0.875rem] leading-[1.25rem] font-bold":
                        {},
                },
                ".text-button-sm": {
                    "@apply text-[0.8125rem] leading-[1.25rem] font-bold":
                        {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
            });
        }),
    ],
}
export default config
