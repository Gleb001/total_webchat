'use client';

// imports ================================================== //
import Link from "next/link";
import styles from "@/shared/ui/components/button.module.css";
import type { NavLink } from "./types/index";
import { concatObjects } from "@/shared/libs/concatObjects";
import { useIsActiveLink } from "./hooks/useIsActiveLink";

// main ===================================================== //
const NavLink: NavLink = ({ children, ...props }) => {

    let isActive = useIsActiveLink(props.href);
    let activeClassName = isActive ? styles.active : "";

    let attributes = {
        className: `${styles.button} ${activeClassName}`
    };
    
    return (
        <Link {...concatObjects(props, attributes)}>{
            children
        }</Link>
    );

};

// exports ================================================== //
export default NavLink;
