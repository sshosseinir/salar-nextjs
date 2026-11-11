"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function ContactUs() {

    const [data, setData] = useState({})

    useEffect(() => {
        axios('https://fakestoreapi.com/products').then(response => {
            console.log(response);
            setData(response.data);
        })

    }, [])

    console.log(data);


    return (
        <div>Contact Us</div>
    )
}
