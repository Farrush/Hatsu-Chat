import ReactMarkdown from 'react-markdown';
import Image from "next/image"
import hatsuPhoto from "../../../public/logohatsu.png"
import userPhoto from "../../../public/user.png"
import { useEffect, useRef } from 'react';
export default function Chat(props: {messages: {
role: string, content: string
}[]}){
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(bottomRef.current)
        bottomRef.current.scrollTop = bottomRef.current.scrollHeight - bottomRef.current.clientHeight;
  }, [props.messages]);

    return(
        <div ref={bottomRef} id="chat-box" className="bg-neutral-800 w-dvw px-3 h-10/12 pt-5 max-h-10/12 md:w-2/3 md:m-auto md:px-0.5 flex flex-col gap-9 overflow-y-auto">
                {props.messages.map((msg: {role: string, content: string}) => {
                    if(msg.role !== 'system')
                        if(msg.role === 'assistant')
                        return(<div key={msg.content} className=" text-neutral-900 flex gap-2.5">
                            <Image src={hatsuPhoto} alt="Foto de Perfil de Hatsu" className="w-8 h-8 bg-white rounded-2xl"/>
                                <div className=" p-0.5 w-auto max-w-[100dvw] md:max-w-2/3 text-wrap h-auto break-words break-all overflow-x-auto text-white">
                                    <ReactMarkdown >{msg.content}</ReactMarkdown>
                                </div>
                            </div>)
                        else
                        return(<div key={msg.content} className=" gap-2.5 text-neutral-900 flex flex-row-reverse">
                                <Image src={userPhoto} alt="Foto de Perfil" className="w-8 h-8 rounded-2xl"/>
                                <div className="p-0.5 w-auto max-w-[100dvw] md:max-w-2/3 text-wrap h-auto break-words break-all overflow-x-auto text-white">
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                </div>
                
                            </div>)
                })}
            </div>
    )
}