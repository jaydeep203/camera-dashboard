import Image from "next/image";
import React from "react";
import CameraCard from "./CameraCard";

const LeftContainer = () => {
  return (
    <div className="w-[796px] h-[450px] rounded-[6px] relative">
      <Image
        src="/images/rightmain.png"
        alt="Right Side Panel"
        fill
        className="object-cover rounded-[6px]"
      />

      <div className="absolute fontSans top-[12px] left-[12px]">
        <div className="flex items-center gap-[4px] px-[6px] py-[2px] w-[141px] h-[20px] rounded bg-[#1C1917]">
          <Image
            src="/icons/calendar.svg"
            alt="Calendar Icon"
            width={12}
            height={12}
          />
          <span className="text-[12px] leading-[16px] text-[#D6D3D1] font-normal truncate">
            11/7/2025 - 03:12:37
          </span>
        </div>
      </div>

      <div className="absolute left-[8px] top-[418px]">
        <div className="flex items-center gap-[4px] px-[10px] py-[2px] w-[116px] h-[24px] rounded border border-white/20 bg-[#0B0B0B]">
          <Image
            src="/icons/disc.svg"
            alt="Camera Icon"
            width={12}
            height={12}
          />
          <span className="font-medium font-sans text-[14px] leading-[20px] text-[#D4D4D4] text-center truncate">
            Camera - 01
          </span>
        </div>
      </div>

      <div className="absolute top-[358px] left-[535px] flex gap-[12.8px] w-[252.8px] h-[83.6px]">
        <CameraCard src="/images/thumbnails/2.png" cameraName="Camera - 02" />
        <CameraCard src="/images/thumbnails/3.png" cameraName="Camera - 02" />
      </div>
    </div>
  );
};

export default LeftContainer;
