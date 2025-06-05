"use client"
import Image from "next/image";
import logo from "../../public/logohatsu.png"
import Button from "./components/Button";
import { redirect } from "next/navigation"


export default function Home() {

  return (
    <div className="">
      <main className="w-dvw pt-5 m-auto h-[100vh] text-center flex flex-col items-center bg-neutral-800 text-white gap-10">
        <Image src={logo} alt="Logo da Hatsu" className="w-40 md:w-60"/>
        <h1 className="text-xl md:text-4xl">Bem Vindo ao Hatsu Chat</h1>
        <Button onClick={()=> redirect('/chat')} title="Comece a conversar"/>
      </main>
    </div>
  );
}
