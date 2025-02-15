import "@styles/globals.css";

import type React from "react"
import { redirect } from 'next/navigation'
import { SidebarProvider } from "@components/ui/sidebar";
import Sidebar from "@components/Sidebar";
import { RedirectToSignIn, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkRole } from "@utils/roles";

export const metadata = {
    title: "Admin CMS",
    description: "Admin UI for Content Management System",
}

export default async function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {

    // check role
    if (!await checkRole('admin')) {
        redirect('/auth')
    }

    return (
        <main className="flex h-screen bg-gray-100">
            <SidebarProvider>
                <Sidebar/>
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </SidebarProvider>
        </main>
    )
}
