import "@styles/globals.css";

import React from 'react'
import type { Metadata } from 'next'
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
}

export default function RootLayout(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <html lang="en">
        <body className="bg-softRed m-0 p-0 relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}