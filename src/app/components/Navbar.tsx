import { GithubOutlined } from '@ant-design/icons';
import { Josefin_Sans } from "next/font/google";
const josefinSans =Josefin_Sans({
  weight: ['200','300','400'],
  style: ['normal' ,'italic']
})


export default function Navbar() {
  return (
    <div className={`inline-flex flex-row items-center navbar-background ${josefinSans.className} font-light text-2xl px-5 cursor-pointer py-1 rounded-full space-x-5 `}>
      <div className="px-3 py-2 bg-white rounded-full">Home</div>
      <div className="px-3 py-2 hover:bg-white hover:rounded-full duration-300">Project</div>
      <div className="px-3 py-2 hover:bg-white hover:rounded-full duration-300">About</div>
      <div className="px-3 py-2 hover:bg-white hover:rounded-full duration-300">Queue</div>
      <GithubOutlined className="font-xl" />
    </div>
  )
}