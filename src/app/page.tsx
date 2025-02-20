import { MuseoModerno ,Josefin_Sans } from "next/font/google";
import Image from 'next/image'
import Navbar from "./components/Navbar";

const josefinSans =Josefin_Sans({
  weight: ['100' ,'200','300','400'],
  style: ['normal' ,'italic']
})

const museoModerno = MuseoModerno({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen background-home pt-4 overflow-x-hidden">
      <div className="title-segment">
        <div className="ml-auto w-[fit-content]">
          <Navbar/>
        </div>
        <div className="relative cursor-default setselectable-home">
          <div className={`titleFont-home ${museoModerno.className}  z-10 relative text-center`}>
            M ppy
          </div>
          <div className="absolute top-[12%] left-[36%] w-[17%] aspect-square z-10">
            <Image
              src="/sadine_mippy.png"
              fill
              alt="Sadine"
              className="-rotate-90"
            />
          </div>
          <div className="absolute top-[23%] right-[19%] w-[14%] aspect-square z-0">
            <Image
              src="/penguine_mippy.png"
              fill
              alt="Sadine"
              className="rotate-12"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-auto justify-center items-cente">
          <div className={`px-5 rounded-full py-1 start-button-home  lg:text-3xl ${josefinSans.className} font-light cursor-pointer text-black hover:bg-white duration-300`}>Start →</div>
      </div>
      <div className="absolute bottom-0 w-full h-auto">
        <div className="relative w-2/3 aspect-[7/2] z-0">
          <Image
          src="/snow_mountain.png"
          fill
          alt="Snow Mountain" />
        </div>
        <div className="absolute bottom-0 right-0 w-[50%] aspect-[3/1] z-10">
          <Image
          src="/snow_mountain.png"
          fill
          alt="Snow Mountain"
          className="scale-x-[-1]"
          />
        </div>
        <div className="absolute top-10 left-40 w-[10%] aspect-[2/1] z-20">
          <Image
          src="/bird.png"
          fill
          alt="Bird"
          className=""
          />
        </div>
      </div>
    </div>
  );
}
