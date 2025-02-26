'use client'

import { MuseoModerno ,Josefin_Sans } from "next/font/google";
import Image from 'next/image'
import Navbar from "./components/Navbar";
import { useState ,useRef } from "react";

const josefinSans =Josefin_Sans({
  weight: ['100' ,'200','300','400'],
  style: ['normal' ,'italic'],
  subsets: ['latin'],
})

const museoModerno = MuseoModerno({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home() {
  const [isClick ,setIsClick] = useState<boolean>(false);
  const [isChangeStyle ,setChangeStyle] = useState<boolean>(false);
  const startbuttonRef = useRef<HTMLDivElement |null>(null);
  const mippyLogoRef = useRef<HTMLDivElement | null>(null);

  const onClickStart = () => {
    setChangeStyle(!isChangeStyle)
    if (mippyLogoRef.current) {
      mippyLogoRef.current.innerText = "Mippy";
    }
    setTimeout(() => {
      setIsClick(!isClick);
    }, 1000);

  }

  return (
    <div className="flex flex-col w-screen h-screen background-home pt-4 overflow-x-hidden">
      <div className={`flex transition-all px-4 duration-1000 ${ isChangeStyle ? "flex-row-reverse items-center": "flex-col"}`}>
        <div className="ml-auto w-[fit-content]">
          <Navbar/>
        </div>
        <div className="relative cursor-default setselectable-home">
          <div
          className={` transition-all duration-1000 ${museoModerno.className} ${ isChangeStyle ? "text-start text-[4vw] lg:text-[2vw] titleFont-afterClick-home":"text-center text-[15vw] titleFont-beforeClick-home"}  z-10 relative `}
          ref ={mippyLogoRef}
          >
            M ppy
          </div>

          { !isClick && (<div className="absolute top-[12%] left-[36%] w-[17%] aspect-square z-10">
            <Image
              src="/sadine_mippy.png"
              fill
              alt="Sadine"
              className="-rotate-90"
            />
          </div>)}
          { !isClick && (<div className="absolute top-[23%] right-[19%] w-[14%] aspect-square z-0">
            <Image
              src="/penguine_mippy.png"
              fill
              alt="Sadine"
              className="rotate-12"
            />
          </div>)}
        </div>
      </div>
      {
        !isClick && (
          <div
            className={`flex w-full h-auto justify-center items-center transition-all duration-1000 ease-out ${
              isChangeStyle ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={onClickStart}
            ref={startbuttonRef}
          >
            <div
              className={`px-5 rounded-full py-1 start-button-home lg:text-3xl ${josefinSans.className} font-light cursor-pointer text-black hover:bg-white duration-300 absolute z-20`}
            >
              Start →
            </div>
          </div>
        )
      }
      {isClick && (
        <div className={`flex flex-col p-4 bg-orange-300 ${josefinSans.className}`}>
          <div className="background-text-home text-black w-full rounded-full px-4 py-2">
            dadsadas
          </div>
          <div className="flex flex-row">
            <div>

            </div>
            <div className="flex flex-col">
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      )}
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
