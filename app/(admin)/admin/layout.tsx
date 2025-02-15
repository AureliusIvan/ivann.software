import "@styles/globals.css";

import type React from "react"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@components/ui/sidebar";
import Sidebar from "@components/Sidebar";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "Admin CMS",
    description: "Admin UI for Content Management System",
}

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
            <SidebarProvider>
                <Sidebar/>
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </SidebarProvider>
        </div>
        </body>
        </html>
    )
}
