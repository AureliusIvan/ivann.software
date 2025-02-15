"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { lanceFont } from "@fonts/fonts";
import { cn } from "@lib/utils";

// Define nav items for mobile and desktop. For desktop,
// we split them into two groups while keeping the labels and paths concise.
const mobileNavItems = [
    {label: "HOME", path: "/"},
    {label: "ARTICLES", path: "/articles"},
    {label: "GALLERY", path: "/gallery"},
    {label: "CONTACT", path: "/contact"},
];

const desktopLeftNavItems = [
    {label: "HOME", path: "/"},
    {label: "ARTICLES", path: "/articles"},
];

const desktopRightNavItems = [
    {label: "GALLERY", path: "/gallery"},
    {label: "CONTACT", path: "/contact"},
];

const NavbarComponent = () => {
    const pathname = usePathname();
    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen((prev) => !prev);
    };

    // Helper to render a nav link.
    // The styling varies between mobile (using larger text) and desktop.
    const renderNavLink = useCallback((item: { label: string; path: string }, isMobile = false) => (
        <Link
            key={item.path}
            href={item.path}
            prefetch={true}
            onClick={handleNavToggle}
            className={cn(
                `font-argentum-regular select-none hover:bg-softOrange hover:text-darkPink`,
                isMobile ? "text-4xl pt-4 px-4" : "py-2 px-4",
                pathname === item.path && "bg-softOrange text-darkPink"
            )}
        >
            {item.label}
        </Link>
    ), [pathname]);

    return (
        <section className={cn(lanceFont.className, `sticky top-0 z-40`)}>

            {/* Mobile Navigation */}
            {navOpen && (
                <div
                    className="fixed inset-0 flex flex-col items-center bg-darkPink opacity-85 backdrop-blur-3xl z-50 md:hidden">

                    <button className="self-end p-4 m-2" onClick={handleNavToggle}>
                        <span className="text-4xl text-grayishRed">x</span>
                    </button>

                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        {mobileNavItems.map((item) => renderNavLink(item, true))}
                    </div>

                </div>
            )}

            <nav className="fixed flex items-center justify-between w-full top-0 z-40 md:hidden mb-3">

                {/* Logo */}
                <Link className="p-4 mx-2 z-10" href="/">
                    <Image
                        id={"logo-mobile-nav"}
                        src="/images/logo/logo-mobile.png"
                        alt="Logo"
                        width={30}
                        height={30}
                    />
                </Link>

                <button className="p-4 mx-2 z-10" onClick={handleNavToggle}>
                    {!navOpen && (
                        <Image
                            src="/images/icon/Burger.png"
                            alt="Burger"
                            width={30}
                            height={30}
                        />
                    )}
                </button>

                {/* Ripped Paper Decoration */}
                <div className="absolute w-full h-16">
                    <Image src="/images/ripped_textures/RectangleBig.png" alt="bg" fill/>
                    <div className="absolute w-full h-5 top-14">
                        <Image src="/images/ripped_textures/Ripped.svg" alt="bg" fill/>
                    </div>
                </div>

            </nav>

            {/* Desktop Navigation */}
            <nav
                className="hidden md:flex items-center justify-between text-grayishRed w-full h-20 bg-[#a4173e]">

                {/* Ripped Paper Decoration */}
                <div className="absolute w-full h-[3rem] top-16">
                    <Image src="/images/ripped_textures/Ripped.svg" alt="ripped-paper-decoration-bottom" fill/>
                </div>

                <div className="w-1/3 flex justify-around z-10">
                    {desktopLeftNavItems.map((item) => renderNavLink(item))}
                </div>
                <div className="w-1/3 flex justify-center z-10">
                    <h1 className="font-lanche text-4xl">Works by Ivan</h1>
                </div>
                <div className="w-1/3 flex justify-around z-10">
                    {desktopRightNavItems.map((item) => renderNavLink(item))}
                </div>
            </nav>
        </section>
    );
};

export default NavbarComponent;