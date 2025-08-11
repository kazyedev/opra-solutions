"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe, Moon, Store, Sun } from "lucide-react";


export default function Header() {
    const pathname = usePathname();
    const locale = useLocale();
    return (
        <header className="flex justify-between items-center p-4 bg-background border-b-1 border-primary backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg ">
            <div className="flex gap-2">
                <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
                <h1 className="text-xl font-bold text-primary dark:text-primary-foreground">Opra<br/>Solutions</h1>
            </div>
            <nav className="flex gap-4">
                    <Link href="/" className={`text-foreground dark:text-primary-foreground hover:text-primary/80 ${pathname === `/${locale}` ? "text-primary dark:text-foreground  font-bold" : ""}`}>Home</Link>
                <Link href="/about" className={`text-foreground dark:text-primary-foreground hover:text-primary/80 ${pathname === `/${locale}/about` ? "text-primary dark:text-foreground  font-bold" : ""}`}>About</Link>
                <Link href="/contact" className={`text-foreground dark:text-primary-foreground hover:text-primary/80 ${pathname === `/${locale}/contact` ? "text-primary dark:text-foreground  font-bold" : ""}`}>Contact</Link>
                <Link href="/contact" className={`text-foreground dark:text-primary-foreground hover:text-primary/80 ${pathname === `/${locale}/contact` ? "text-primary dark:text-foreground  font-bold" : ""}`}>Contact</Link>
            </nav>
            <div className="flex">
                <Button variant="outline" className="cursor-pointer">
                    <Store className="cursor-pointer"/>
                </Button>
                <Button variant="outline" className="cursor-pointer" onClick={() => {
                    document.documentElement.classList.toggle("dark");
                }}>
                    <Sun  className="cursor-pointer hidden dark:block"/>
                    <Moon  className="cursor-pointer dark:hidden" />
                </Button>
                <Button variant="outline" className="cursor-pointer">
                    <Globe />
                </Button>
            </div>
        </header>
    );
}