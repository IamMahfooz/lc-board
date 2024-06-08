"use client"
import {MainNav} from "./main-nav"
import {ModeToggle} from "./mode-toogle"
import {MobileNav} from "./mobile-nav"
import Link from "next/link"

export function SiteHeader() {
    return (
        <header
            className="sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MainNav/>
                <MobileNav/>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <Link
                        href="/login"
                        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                    >
                        Login
                    </Link>
                    <nav className="flex items-center">
                        <ModeToggle/>
                    </nav>
                </div>
            </div>
        </header>
    )
}
