"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image"
import { api } from "@/constants/api";


interface IData {
    name: string;
    allies: string;
    videoGames: string;
    films: string;
    imageUrl: string;
}

const AxiosPage = () => {
const [data, setData] = useState<IData[]>([])

useEffect(() => {
    api.get(`/character`).then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
    }).catch((error) => {
        console.log("deu ruim na tua API, arrume esta bosta", error)
    })
}, [])


    return(
        <>
        <section className="bg-[#333333]">
            <div className="text-[#333333]">""</div>
            <Suspense fallback={<div>Loading...</div>}>
             {data.map((item, index) => (
                <div key={index} className="border-3 border-[white] w-60 text-center mt-12 h-110 rounded-xl gap-[10rem] ml-200 mt-9">
                    <Image src={item.imageUrl} alt={item.name} width={200} height={200} className="flex ml-5 mt-3"/>
                    <h2 className="text-[white] text-2xl font-bold mt-2 text-center">{item.name}</h2>
                    <p className="text-[#fbc02d] text-sm font-medium mt-2 text-center">{item.allies}</p>
                    <p className="text-[#fbc02d] text-sm font-medium mt-2 text-center">{item.videoGames}</p>
                    <p className="text-[#fbc02d] text-sm font-medium mt-2 text-center">{item.films}</p>
                </div>
             ))}
            </Suspense>
            </section>
        </>
    )
}

export default AxiosPage