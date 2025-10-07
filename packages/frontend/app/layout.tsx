// =====================================================
// File: packages/frontend/app/layout.tsx (DEFINITIVE & FIXED)
// =====================================================

import type { Metadata } from "next";
import "../scss/main.scss";

export const metadata: Metadata = {
    title: "Orchis Project Portfolio | Roy Natsir - Full Stack Web3 Developer",
    description: "Roy Natsir's On-Chain Professional Portfolio showcasing Web3 development skills and blockchain-based projects.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
        {/* THIS IS THE CRITICAL FIX: Add the Font Awesome stylesheet link here */}
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous" // Use camelCase for crossOrigin in JSX
        referrerPolicy="no-referrer"
        />
        </head>
        <body>{children}</body>
        </html>
    );
}
