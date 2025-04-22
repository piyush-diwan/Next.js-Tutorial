// Use state only works in client not on server side so we have to use client
"use client";
import { useState } from "react"
export const Counter = () =>{
    console.log('Counter')
    const [count, setCount] = useState(0)

    return (
        <button onClick={()=>setCount(count +1)}>Clicked {count} times</button>
    )
}