"use client";
// import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import  Providers  from "./providers";

const poppins = Poppins({
    weight: ["500", "600"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-poppins",
});

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

// export const metadata: Metadata = {
//     title: "Unity",
//     description: "Unity Dashboard Kit",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Description no longer than 155 characters */}
                <meta name="description" content="Unity Dashboard Kit" />
                {/* Product Name */}
                <meta name="product-name" content="Unity Dashboard Kit" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:title" content="Unity Dashboard Kit" />
                <meta
                    name="twitter:description"
                    content="Ultimate Multipurpose Dashboard Kit including Design + Code"
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.jpg"
                />

                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="Unity Dashboard Kit" />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/unity-dashboard-kit"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.jpg"
                />
                <meta
                    property="og:description"
                    content="Ultimate Multipurpose Dashboard Kit including Design + Code"
                />
                <meta property="og:site_name" content="Unity Dashboard Kit" />
                <meta property="fb:admins" content="132951670226590" />

                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="Unity Dashboard Kit" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/unity-dashboard-kit"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Ultimate Multipurpose Dashboard Kit including Design + Code"
                />

                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="Unity Dashboard Kit" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/unity-dashboard-kit"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Ultimate Multipurpose Dashboard Kit including Design + Code"
                />
            </head>
            <body
                className={`${poppins.variable} ${inter.variable} bg-white font-sans text-body antialiased text-black dark:bg-dark-2 dark:text-white`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
