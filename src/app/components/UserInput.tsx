"use client"
import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UserInput(props: {send: any}) {
    const [msg, setMsg] = useState<string>('')
    async function sendMessage() {
        
        props.send(msg)
        setMsg('')
    }
    return (
        <div className="absolute bottom-0 shadow-indigo-500 shadow h-2/12 w-dvw flex flex-row gap-4 md:gap-8 justify-center items-center">
            <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Pergunte algo..."
                className="text-neutral-200 bg-neutral-700 outline-none rounded-xs p-2 w-2xs md:w-2xl" maxLength={146} style={{resize: 'none'}} rows={2}/>
            <button className="cursor-pointer text-xl rounded-xl px-2 py-1 bg-indigo-800 hover:scale-110"
                onClick={sendMessage}>Enviar</button>
        </div>
    )
}