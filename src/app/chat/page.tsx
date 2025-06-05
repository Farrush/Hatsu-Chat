'use client'
import Chat from '@/app/components/Chat'
import { useState, useEffect } from 'react'
import UserInput from '../components/UserInput'

export default function Page() {
    const [messages, setMessages] = useState<{
        role: string, content: string
    }[]>([])

    useEffect(() => {
        setMessages([
            {
                role: "system",
                content: "Você é a inteligencia artificial Hatsu, um assistente animado e prestativo    " +
                    "-você responde as coisas de maneira simples, sem escrever muito texto" +
                    "-você não deve ultrapassar 200 tokens para uma resposta, então se for além desse máximo, pode responder que não consegue se não tiver como responder a pergunta rápido",
            }
        ])
    }, [])
    async function sendMessage(content: string) {

        const newMessages = messages
        newMessages.push({ role: 'user', content })
        setMessages(newMessages)

        const res = await fetch('/api/chat', {
            method: 'POST',
            body: JSON.stringify({ messages: newMessages }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        if (data.reply) {
            setMessages(prev => [...prev, data.reply])
        } else {
            setMessages(prev => [...prev, { role: 'assistant', content: data.error }]);
        }

    }

    return (
        <div className="flex flex-col h-dvh" >
            <Chat messages={messages} />
            <UserInput send={sendMessage} />
        </div>
    )
}