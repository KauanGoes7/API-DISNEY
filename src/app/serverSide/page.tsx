import { Metadata } from "next"
import Image from "next/image"

type IData = {
    results: {
        imageUrl: string;
        name:string;
        films: string;
        _id: string;
    }[];
}

export const metadata: Metadata = {
    title: "Lista de Personagens RM",
    description: "Aplicação teste com consumo de api"
}

const ServerSide = async () => {

    const res = await fetch("https://api.disneyapi.dev/character");
    const data: IData = await res.json()

  return (
    <>
    <section className="bg-[#333333]">
    <div className="text-[#333333]">||</div>
    {data?.data.map((data, index) => {
        return(
            <div className="mb-20 border-3 border-[white] w-60 text-center mt-12 h-110 rounded-xl ml-200" key={index}>
                <h2 className="text-[white] text-2xl font-bold mt-2 text-center">{data._id}</h2>
                <Image src={data.imageUrl} alt={data.name} width={200} height={200} className="flex ml-5 mt-3"/>
                <h1 className="text-[white] text-2xl font-bold mt-2 text-center">{data.name}</h1>
                <p className="text-[#fbc02d] text-sm font-medium mt-2 text-center">{data.films}</p>
            </div>

            
        )
        
    })}
    </section>
    </>
  )
}

export default ServerSide