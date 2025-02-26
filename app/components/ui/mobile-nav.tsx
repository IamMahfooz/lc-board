"use client"

import * as React from "react"
import Link, {LinkProps} from "next/link"
import {useRouter} from "next/navigation"

import {siteConfig} from "@/config/site"
import {docsConfig} from "@/config/docs"
import {cn} from "@/lib/utils"
import {Icons} from "./icons"
import {Button} from "@/components/ui/button"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setOpen}
                >
                    <Icons.logo className="mr-2 h-4 w-4"/>
                    <span className="font-bold">{siteConfig.name}</span>
                </MobileLink>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <MobileLink
                        href="/"
                        className="flex items-center"
                        onOpenChange={setOpen}
                    >
                        <span className="font-sans">Problem</span>
                    </MobileLink>
                    <br/>
                    <MobileLink
                        href="/archive"
                        className="flex items-center"
                        onOpenChange={setOpen}
                    >
                        <span className="font-sans">Archive</span>
                    </MobileLink>
                    <br/>
                    <MobileLink
                        href="/whiteboard"
                        className="flex items-center"
                        onOpenChange={setOpen}
                    >
                        <span className="font-sans">WhiteBoard</span>
                    </MobileLink>
                    {/*<br/>*/}
                    {/*<MobileLink*/}
                    {/*    href="https://discord.com/invite/asJbTym54w"*/}
                    {/*    className="flex items-center"*/}
                    {/*    onOpenChange={setOpen}*/}
                    {/*>*/}
                    {/*    <span className="font-sans">Discussions</span>*/}
                    {/*</MobileLink>*/}
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({
                        href,
                        onOpenChange,
                        className,
                        children,
                        ...props
                    }: MobileLinkProps) {
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    )
}
