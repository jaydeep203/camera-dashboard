import Image from "next/image";
import React from "react";
import Badge from "./Badge";

const TimeLine = () => {
  return (
    <div className="w-[1392px] h-[298px] flex flex-col gap-[8px]">
      <div className="w-[1392px] h-[44px] bg-[#131313] flex justify-between rounded-[6px] py-[4px] px-[16px]">
        <div className="flex items-center gap-4 w-[388px] h-[36px]">
          <div className="flex items-center gap-[16px]">
            <Image
              src="/icons/prev.svg"
              alt="Dashboard"
              width={16}
              height={16}
            />
            <Image
              src="/icons/back.svg"
              alt="Dashboard"
              width={16}
              height={16}
            />
            <Image
              src="/icons/play.svg"
              alt="Dashboard"
              width={32}
              height={32}
            />
            <Image
              src="/icons/front.svg"
              alt="Dashboard"
              width={16}
              height={16}
            />
            <Image
              src="/icons/next.svg"
              alt="Dashboard"
              width={16}
              height={16}
            />
          </div>

          <div className="w-[132px] h-4 text-xs font-[400] leading-4 text-white">
            03:12:37 (15-Jun-2025)
          </div>

          <div className="flex items-center gap-2 w-[44px] h-5">
            <span className="text-xs text-white font-normal">1x</span>
            <Image
              src="/icons/rewind.svg"
              alt="Dashboard"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>

      <div className="w-[1392px] h-[298px] bg-[#131313] rounded-[6px] flex flex-row">
        <div className="w-[180px] h-[246px] border-r flex flex-col">
          <div className="w-[180px] h-[48px] flex p-[16px] gap-2">
            <p className="text-[16px] text-white items-center font-semibold">
              Camera List
            </p>
          </div>

          <div className="w-[180px] h-[66px] p-[16px] gap-[12px] flex flex-row items-center bg-[#232323]">
            <Image
              src="/icons/security-camera.svg"
              alt="camera"
              width={16}
              height={16}
            />
            <span className="text-white font-normal text-[12px] leading-[100%]">
              Camera - 01
            </span>
          </div>
          <div className="w-[180px] h-[66px] p-[16px] gap-[12px] flex flex-row items-center">
            <Image
              src="/icons/security-camera.svg"
              alt="camera"
              width={16}
              height={16}
            />
            <span className="text-white font-normal text-[12px] leading-[100%]">
              Camera - 02
            </span>
          </div>
          <div className="w-[180px] h-[66px] p-[16px] gap-[12px] flex flex-row items-center">
            <Image
              src="/icons/security-camera.svg"
              alt="camera"
              width={16}
              height={16}
            />
            <span className="text-white font-normal text-[12px] leading-[100%]">
              Camera - 03
            </span>
          </div>
        </div>

        <div className="w-[1212px] h-[246px] flex flex-col">
          <div className="w-[1212px] h-[48px] gap-[8px] px-[8px] py-[14px]"></div>



          <div className="relative w-[1212px] h-[66px] flex flex-row justify-center bg-[#232323]">
            <Badge 
              src="/icons/door-open.svg" 
              type="Unauthorised Access" 
              typeColor="text-[#FDBA74]"
              bgColor="border-[#F97316] bg-[#431407]"
              layout="top-[23px] left-[136px] w-[151px] h-[20px]"
            />
            <Badge 
              src="/icons/user-search.svg" 
              type="Face Recognised" 
              typeColor="text-[#93C5FD]"
              bgColor="border-[#3B82F6] bg-[#172554]"
              layout="top-[23px] left-[409px] w-[126px] h-[20px]"
            />

            <Badge 
              src="/icons/triangle-alert.svg" 
              type="4 Multiple Events" 
              typeColor="text-[#D6D3D1]"
              bgColor="border-[#D6D3D1] bg-[#1C1917] flex-row-reverse"
              layout="top-[23px] left-[764px] w-[128px] h-[20px]"
            />
            <Badge 
              src="/icons/door-open.svg" 
              type="Unauthorised Access" 
              typeColor="text-[#FDBA74]"
              bgColor="border-[#F97316] bg-[#431407]"
              layout="top-[8px] left-[1042px] w-[151px] h-[20px]"
            />

            <Badge 
              src="/icons/siren.svg" 
              type="Gun Threat" 
              typeColor="text-[#FCA5A5]"
              bgColor="border-[#F43F5E] bg-[#450A0A]"
              layout="top-[37px] left-[1043px] w-[94px] h-[20px]"
            />
            
          </div>


          <div className="relative w-[1212px] h-[66px] flex flex-row justify-center ">
            <Badge 
              src="/icons/door-open.svg" 
              type="Unauthorised Access" 
              typeColor="text-[#FDBA74]"
              bgColor="border-[#F97316] bg-[#431407]"
              layout="top-[23px] left-[68px] w-[151px] h-[20px]"
            />

            <Badge 
              src="/icons/user-search.svg" 
              type="Face Recognised" 
              typeColor="text-[#93C5FD]"
              bgColor="border-[#3B82F6] bg-[#172554]"
              layout="top-[23px] left-[579px] w-[126px] h-[20px]"
            />

          </div>

          <div className="relative w-[1212px] h-[66px] flex flex-row justify-center">
            <Badge 
              src="/icons/traffic.svg" 
              type="Traffic congestion" 
              typeColor="text-[#5EEAD4]"
              bgColor="border-teal-400 bg-[#042F2E]"
              layout="top-[23px] left-[347px] w-[132px] h-[20px]"
            />
            <Badge 
              src="/icons/door-open.svg" 
              type="Unauthorised Access" 
              typeColor="text-[#FDBA74]"
              bgColor="border-[#F97316] bg-[#431407]"
              layout="top-[23px] left-[786px] w-[151px] h-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
