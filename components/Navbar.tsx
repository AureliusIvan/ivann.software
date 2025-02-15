"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NavbarComponent = () => {
    const pathname = usePathname();
    const [burgerOpen, setBurgerOpen] = useState(false);

    return (<>
        {/* Mobile Navigation */}
        {burgerOpen && (
            <div
                className="fixed flex justify-around items-center bg-darkPink opacity-75 w-full h-full z-50 md:hidden">
                <button className="absolute top-0 right-0 pb-3 pl-4 pr-4 m-2">
        <span
            className="text-4xl text-grayishRed"
            onClick={() => {
                setBurgerOpen(false);
            }}
        >
          x
        </span>
                </button>
                <div
                    className="absolute text-grayishRed font-lanche h-1/2 justify-around items-center flex flex-col">
                    <Link
                        className={`select-none text-4xl hover:bg-softOrange hover:text-darkPink pt-4 px-4 ${
                            pathname === "/" ? "bg-softOrange text-darkPink" : ""
                        }`}
                        href="/"
                    >
                        HOME
                    </Link>
                    <Link
                        className={`select-none text-4xl hover:bg-softOrange hover:text-darkPink pt-4 px-4 ${
                            pathname === "/about"
                                ? "bg-softOrange text-darkPink"
                                : ""
                        }`}
                        href="/about"
                    >
                        ABOUT
                    </Link>
                    <Link
                        className={`select-none text-4xl hover:bg-softOrange hover:text-darkPink pt-4 px-4 ${
                            pathname === "/gallery"
                                ? "bg-softOrange text-darkPink"
                                : ""
                        }`}
                        href="/gallery"
                    >
                        GALLERY
                    </Link>
                    <Link
                        className={`select-none text-4xl hover:bg-softOrange hover:text-darkPink pt-4 px-4 ${
                            pathname === "/contact"
                                ? "bg-softOrange text-darkPink"
                                : ""
                        }`}
                        href="/contact"
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        )}
        <nav className="fixed flex w-full justify-between items-center md:hidden mb-3 z-40 top-0">
            <div className="absolute w-full h-16">
                <Image
                    src="/images/ripped_textures/RectangleBig.png"
                    alt="bg"
                    fill={true}
                />
                <div className="absolute w-full h-5 top-14">
                    <Image
                        src="/images/ripped_textures/Ripped.svg"
                        alt="bg"
                        fill={true}
                    />
                </div>
            </div>
            <Link className="p-4 mx-2 inline-block z-10" href="/" legacyBehavior>
                <Image
                    src="/images/logo/Logo_Mobile.png"
                    alt="Logo"
                    width={30}
                    height={30}
                />
            </Link>
            <button
                className="p-4 mx-2 z-10"
                onClick={() => {
                    setBurgerOpen(true);
                }}
            >
                {!burgerOpen && (
                    <Image
                        src="/images/icon/Burger.png"
                        alt="Burger"
                        width={30}
                        height={30}
                    />
                )}
            </button>
        </nav>
        {/* Desktop Navigation */}
        <nav
            className="sticky to-0% hidden md:flex justify-between font-argentum-regular items-center text-grayishRed w-full h-20 mb-5 z-40">
            <div className="absolute w-full h-20">
                <Image
                    src="/images/ripped_textures/RectangleBig.png"
                    alt="bg"
                    fill={true}
                />
                <div className="absolute w-full h-10 top-16">
                    <Image
                        src="/images/ripped_textures/Ripped.svg"
                        alt="bg"
                        fill={true}
                    />
                </div>
            </div>
            <div className="w-1/3 flex justify-around z-10">
                <Link
                    className={`select-none hover:bg-softOrange hover:text-darkPink py-2 px-4 ${
                        pathname === "/" ? "bg-softOrange text-darkPink" : ""
                    }`}
                    href="/"
                >
                    HOME
                </Link>
                <Link
                    className={`select-none hover:bg-softOrange hover:text-darkPink py-2 px-4 ${
                        pathname === "/about" ? "bg-softOrange text-darkPink" : ""
                    }`}
                    href="/about"
                >
                    ABOUT
                </Link>
            </div>
            <div className="w-1/3 flex justify-around z-10">
                <h1 className="font-lanche text-4xl">
                    Works by Ivan
                </h1>
            </div>
            <div className="w-1/3 flex justify-around z-10">
                <Link
                    className={`select-none hover:bg-softOrange hover:text-darkPink py-2 px-4 ${
                        pathname === "/gallery"
                            ? "bg-softOrange text-darkPink"
                            : ""
                    }`}
                    href="/gallery"
                >
                    GALLERY
                </Link>
                <Link
                    className={`select-none hover:bg-softOrange hover:text-darkPink py-2 px-4 ${
                        pathname === "/contact"
                            ? "bg-softOrange text-darkPink"
                            : ""
                    }`}
                    href="/contact"
                >
                    CONTACT
                </Link>
            </div>
        </nav>
    </>);
};

export default NavbarComponent;
