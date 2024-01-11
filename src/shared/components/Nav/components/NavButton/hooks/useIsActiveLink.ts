'use client';

// imports ================================================== //
import { usePathname } from "next/navigation";

// main ===================================================== //
export function useIsActiveLink(href: string) {
    const current_pathname = usePathname();
    const pathname = href.slice(21);
    return (current_pathname === pathname);
}