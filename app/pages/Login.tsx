"use client";
import { useState } from "react";

export default function Login(){
    let [userName, setUserName] = useState("")
    function handleClick(){
        console.log("Submitted Value: " + userName)
    }
    return (
        <div>
            <input className="bg-slate-600 rounded border-white border text-lg" type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} />
            <button className="bg-blue-500 text-white" onClick={handleClick}>Click</button>
        </div>
    )
}