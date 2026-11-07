"use client"
import { useState } from "react"
import React from "react";
import List from "../serverComponent";

export default function Counter({children}:{children:React.ReactNode}) {
    const [first, setfirst] = useState(10);
    setfirst
    return (
        <>
            <div>counter, {first}</div>
            {children}
        </>
    )
}
