"use client"

import axios from "axios"

export default function AddProduct() {

    const handleClick = () => {
        axios({
            url: 'http://localhost:8000/product/add',
            method: 'POST',
            data: { id: 1, title: 'aaa' }
        })

    }

    return (
        <>
            <button className="bg-blue-500 text-white text-sm h-9 w-24 rounded-xl cursor-pointer" onClick={handleClick}>افزودن</button>
        </>
    )
}
