"use client"
import { useEffect, useState } from "react";
import Image from "next/image";


interface IData{
    name: string;
    imageUrl: string;
    films: string;
}

const HookPage = () => {
    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://api.disneyapi.dev/character");
            const data = await res.json()
            setCharacters(data.data)
        }
        load();
    }, [])
    

    return(
        <>
        <section className="bg-[#333333] flex justify-center flex flex-row">
                <div className="">
                    {characters.map((data, index) => {
                        return(
                            <div key={index} className="border-3 border-[white] w-60 text-center mt-12 h-110 rounded-xl ">
                                <Image src={data.imageUrl} alt={data.name} width={200} height={200} className="flex ml-5 mt-3"/>
                                <h2 className="text-[white] text-2xl font-bold mt-2 text-center">{data.name}</h2>
                                <h2 className="text-[#fbc02d] text-sm font-medium mt-2 text-center">{data.films}</h2>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
};

export default HookPage