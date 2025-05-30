
import Image from "next/image"
import hatsuPhoto from "../../../public/logohatsu.png"
import userPhoto from "../../../public/palm main.png"
export default function Chat(props: any){

    return(
        <div className="bg-neutral-800 w-1/2 h-11/12 m-auto flex flex-col gap-1">
                {props.messages.map((msg: any) => {
                    if(msg.role !== 'system')
                        if(msg.role === 'assistant')
                        return(<div key={msg.content} className="bg-neutral-700 text-neutral-900 flex gap-2.5">
                            <Image src={hatsuPhoto} alt="Foto de Perfil de Hatsu" className="w-8 h-8 bg-white rounded-2xl"/>
                                <div className="bg-neutral-500 p-0.5 rounded-lg text-wrap h-auto max-w-160 break-words">
                                    <p>{msg.content}</p>
                                </div>
                            </div>)
                        else
                        return(<div key={msg.content} className="bg-neutral-700 gap-2.5 text-neutral-900 flex flex-row-reverse">
                                <Image src={userPhoto} alt="Foto de Perfil" className="w-8 h-8 rounded-2xl"/>
                                <div className="bg-neutral-500 p-0.5 max-w-160 rounded-lg text-wrap h-auto break-words">
                                    <p>{msg.content}</p>
                                </div>
                
                            </div>)
                })}
            </div>
    )
}