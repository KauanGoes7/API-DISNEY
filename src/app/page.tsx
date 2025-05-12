"use client"

import Image from "next/image";
import { useState } from "react";
import { Menu } from "../components/menu";
import logoLp from "./assets/images/logoLP.png";

export default function Home() {
  const [aparecerVideo, setAparecerVideo] = useState(false);
  const [aparecerBotao, setAparecerBotao] = useState(false);

  return (
     <>
      <div className="bg-[#333333] h-[100vh] flex items-center justify-center">
          <div className="text-center">
          <h1 className="text-[white] text-7xl font-bold text-center">
            Disney API
          </h1>
          <h3 className="text-[white] text-lg mt-8 font-base">Desbloqueie a magia da Disney com nossa API onde a imaginação encontra a tecnologia!</h3>

          <button className="border-3 border-[#006B80] rounded-4xl text-[white] mt-11 w-40 h-10 scale-120 duration-300 ease-in-out hover:scale-150 hover:bg-[#006B80] hover:text-[white] hover:border-[transparent] hover:font-bold "><a href={"/hookPage"}>Entrar na API</a></button>
          </div>
      </div>
    </>
  );
}
