"use client"

import Error from "next/error";
import { useEffect } from "react"

export default function ErrorAbout({ error }: { error: Error }) {

    useEffect(() => {
        console.log(error);

    }, [])


    return (
        <div>Server Error</div>
    )
}
