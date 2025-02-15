import "@styles/globals.css";

import React from 'react'
import { Toaster } from "@components/ui/sonner";

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
        {children}
        <Toaster/>
        </body>
        </html>
    )
}
