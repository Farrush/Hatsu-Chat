"use client"
import { useState, useEffect } from 'react'
export default function UserInput(props: any) {
    const [msg, setMsg] = useState<string>('')
    async function sendMessage() {
        
        props.send(msg)
        setMsg('')
    }
    return (
        <div className="absolute bottom-0 border-t-2 border-t-indigo-500 h-1/12 w-dvw flex flex-row gap-8 justify-center items-center">
            <input value={msg} onChange={e => setMsg(e.target.value)} type="text" placeholder="Ask something..."
                className="text-neutral-200 bg-neutral-700 outline-none rounded-xs p-2 w-2xl" />
            <button className="cursor-pointer text-xl rounded-xl px-2 py-1 bg-indigo-800 hover:scale-110"
                onClick={sendMessage}>Enviar</button>
        </div>
    )
}