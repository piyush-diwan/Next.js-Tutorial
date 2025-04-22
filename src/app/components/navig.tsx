"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navig = () =>{

    const pathname = usePathname();
    return (
    <nav className="text-center bg-gray-700 p-2 text-yellow-300">
        <Link href="/" className={pathname==="/" ? "font-bold mr-4" : "mr-4 text-white"}>Home</Link>
        <Link href="/about" className={pathname==="/about" ? "font-bold mr-4" : "mr-4 text-white"}>About</Link>
        <Link href="/products/1" className={pathname.startsWith("/products/1") ? "font-bold mr-4" : "mr-4 text-white"}>Product 1</Link>
    </nav>
) 
}