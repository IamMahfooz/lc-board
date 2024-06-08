import {siteConfig} from "@/config/site";

export function SiteFooter() {
    return (
        <footer className="fixed bottom-0 w-full py-6 md:px-8 md:py-0 bg-white">
            <div className="container flex flex-col items-center justify-center md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground">
                    Built by{" "}
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Mahfooz
                    </a>
                </p>
            </div>
        </footer>
    );
}
