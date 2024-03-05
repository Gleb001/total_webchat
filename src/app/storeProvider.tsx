"use client";

// imports =================================================== //
import type { ReactNode } from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import makeStore, { AppStore } from "@/shared/libs/store";

// types ===================================================== //
interface Props {
    children: ReactNode
}

// main ====================================================== //
function StoreProvider ({ children }: Props) {

    let StoreRef = useRef<AppStore>();

    if (!StoreRef.current) {
        StoreRef.current = makeStore();
    }

    return (
        <Provider store={StoreRef.current}>
            {children}
        </ Provider>
    );

}

// exports ================================================== //
export default StoreProvider; 