"use client"
import Button from './Button'
import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UserInput(props: {send: any}) {
    const [msg, setMsg] = useState<string>('')
    async function sendMessage() {
        if(msg.length <= 1)
            return
        props.send(msg)
        setMsg('')
    }
    return (
        <div className="shadow-indigo-500 shadow h-2/12 w-dvw flex flex-row gap-4 md:gap-8 justify-center items-center">
            <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Pergunte algo..."
                className="text-neutral-200 bg-neutral-700 outline-none rounded-xs text-sm md:text-base h-15 md:h-16 p-0.5 md:p-1 w-8/12 md:w-2xl" maxLength={146} style={{resize: 'none'}} rows={2}/>
            <Button title='Enviar' onClick={sendMessage}/>
        </div>
    )
}