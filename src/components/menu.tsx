import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  op1: string;
  op2: string;
  op3: string;
  op4: string;
}

export const Menu = ({op1, op2, op3, op4} : MenuProps) => {
  return(
    <header >
      <nav className="flex items-center justify-center p-[0.5rem] gap-[10rem] bg-[#777777] h-25 text-2xl">
        <Link className="text-[white] font-bold duration-300 ease-in-out hover:underline underline-offset-4 hover:scale-130" href={"/"}>{op1}</Link>
        <Link className="text-[white] font-bold duration-300 ease-in-out hover:underline underline-offset-4 hover:scale-130" href={"/hookPage"}>{op2}</Link>
        <Link className="text-[white] font-bold duration-300 ease-in-out hover:underline underline-offset-4 hover:scale-130" href={"/axiosPage"}>{op3}</Link>
        <Link className="text-[white] font-bold duration-300 ease-in-out hover:underline underline-offset-4 hover:scale-130" href={"/serverSide"}>{op4}</Link>
      </nav>
    </header>

  )
}