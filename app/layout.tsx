import "@styles/globals.css";

import React from 'react'
import { Toaster } from "@components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout(
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    {children}
                    <Toaster/>
                </body>
            </html>
        </ClerkProvider>
    )
}
