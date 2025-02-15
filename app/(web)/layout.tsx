import "@styles/globals.css";

import React from 'react'
import type { Metadata } from 'next'
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
    title: 'Ivan - Software Engineer',
    description: 'Hi, I am Ivan, a software engineer who loves to write about web development, technology, and life.',
}

export default function RootLayout(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <main
            id={'main-page'}
        >
            <Navbar/>
            {children}
            <Footer/>
        </main>
    )
}
