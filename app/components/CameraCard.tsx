import Image from "next/image";
import React from "react";

const CameraCard = ({src, cameraName}:{src:string, cameraName:string}) => {
  return (
    <div className="w-[120px] h-[83.6px] rounded-[3.2px] overflow-hidden">
      <div className="flex items-center justify-between px-[6.4px] py-[3.2px] w-[120px] h-[16.4px] bg-[#0B0B0B] shadow-[0px_0.8px_1.6px_0px_rgba(0,0,0,0.05)]">
        <span className="text-[8px] font-medium leading-[9.6px] text-gray-200 text-center">
          {cameraName}
        </span>
        <div className="w-[9.6px] h-[9.6px] flex items-center justify-center">
          <Image src="/icons/3dot.svg" alt="More" width={2} height={6.4} />
        </div>
      </div>

      <div className="w-[120px] h-[67.2px] border-t-[1px] border-[#D9D9D9]">
        <Image
          src={src}
          alt="Camera Snapshot"
          width={120}
          height={67.2}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default CameraCard;
