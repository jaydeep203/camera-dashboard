import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="w-full h-[76px] flex justify-between items-center border-b border-[#FFFFFF26] pt-4 pr-6 pb-3 pl-6 mx-auto">
      
      <div className="flex items-center gap-2">
        <Image src="/icons/logo.svg" alt="Logo" width={20.39} height={26} />
        <span id="logotext" className="w-[90px] h-[19px] text-white">
            MANDLACX
        </span>
      </div>


      <div className="flex gap-6 text-white font-medium">
        <Link href={"#dashboard"} className="flex items-center gap-[6px] px-[12px] py-[10px] h-[36px] w-[79px] cursor-pointer rounded-[6px] ">
            <Image src="/icons/dashboard.svg" alt="Dashboard" width={13.33} height={10} />
            <span className="font-bold text-[12px] leading-[120%] tracking-[-0.01em] font-['Plus Jakarta Sans']">
                Dashboard
            </span>
        </Link>
        <Link href={"#cameras"} className="flex items-center gap-[6px] px-[12px] py-[10px] h-[36px] w-[79px] cursor-pointer rounded-[6px]">
            <Image src="/icons/camera.svg" alt="Dashboard" width={13.33} height={10} />
            <span className="font-bold text-[12px] leading-[120%] tracking-[-0.01em] font-['Plus Jakarta Sans']">
                Cameras
            </span>
        </Link>
        <Link href={"#scenes"} className="flex items-center gap-[6px] px-[12px] py-[10px] h-[36px] w-[79px] cursor-pointer rounded-[6px] ">
            <Image src="/icons/scenes.svg" alt="Dashboard" width={13.33} height={10} />
            <span className="font-bold text-[12px] leading-[120%] tracking-[-0.01em] font-['Plus Jakarta Sans']">
                Scenes
            </span>
        </Link>
        <Link href={"#incidents"} className="flex items-center gap-[6px] px-[12px] py-[10px] h-[36px] cursor-pointer w-[79px] rounded-[6px] ">
            <Image src="/icons/incidents.svg" alt="Dashboard" width={13.33} height={10} />
            <span className="font-bold text-[12px] leading-[120%] tracking-[-0.01em] font-['Plus Jakarta Sans']">
                Incidents
            </span>
        </Link>
        <Link href={"#users"} className="flex items-center gap-[6px] px-[12px] py-[10px] h-[36px] w-[79px] cursor-pointer rounded-[6px] ">  
            <Image src="/icons/users.svg" alt="Dashboard" width={13.33} height={10} />
            <span className="font-bold text-[12px] leading-[120%] tracking-[-0.01em] font-['Plus Jakarta Sans']">
                Users
            </span>
        </Link>
      </div>

        <div className="flex items-center gap-2 w-[200px] h-[48px] p-2 rounded-md  cursor-pointer">

            <div className="w-[32px] h-[32px] relative">
                <Image
                    src="/images/avatar.png"
                    alt="User Avatar"
                    fill
                    className=" rounded-full object-cover"
                />
            </div>

            <div className="flex flex-col text-white justify-center gap-[2px] w-[120px] h-[32px] overflow-hidden">
                <span className="text-[12px] font-bold leading-[120%] tracking-[-0.01em] truncate">
                    Mohammed Ajhas
                </span>
                <span className="text-[12px] leading-[120%] tracking-[-0.01em] truncate">
                    ajhas@mandlac.com
                </span>
            </div>

            <div className="w-[16px] h-[16px] flex items-center justify-center">
                <Image 
                    src={"/icons/chevrondown.svg"}
                    alt="down"
                    width={10}
                    height={6}
                />
            </div>
        </div>

    </div>
  )
}
