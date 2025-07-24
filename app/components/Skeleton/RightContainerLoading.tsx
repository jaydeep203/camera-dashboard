import Image from "next/image";
import React from "react";

const RightContainerLoading = () => {
  return (
    <div className="w-[572px] h-[450px] flex flex-col rounded-[6px] bg-[#131313]">
      <div className="flex items-center gap-[8px] w-[572px] h-[56px] p-[16px]">
        <div className="w-[24px] h-[24px] animate-pulse rounded-full border-[2px] bg-[#7F1D1D]  border-[#450A0A] flex items-center justify-center"></div>

        <div className="flex items-center gap-[6px] w-[508px] h-[18px]">
          <span className="text-[18px] animate-pulse bg-gray-700 h-[18px] w-[508px] font-semibold leading-[18px] text-[#FAFAFA] truncate"></span>

          <div className="flex items-center gap-[3px] w-[200px] h-[20px]">
            <div className="flex items-center justify-between w-[52px] h-[20px]">
              <div className="w-[20px] h-[20px] bg-[#431407] rounded-[16px] p-[4px] flex items-center justify-center">
                <Image
                  src="/icons/door-open.svg"
                  alt="Icon"
                  width={12}
                  height={12}
                />
              </div>

              <div className="w-[20px] h-[20px] bg-[#450A0A] rounded-[16px] p-[4px] flex items-center justify-center">
                <Image
                  src="/icons/plus.svg"
                  alt="Icon"
                  width={12}
                  height={12}
                />
              </div>

              <div className="w-[20px] h-[20px] bg-[#172554] rounded-[16px] p-[4px] flex items-center justify-center">
                <Image
                  src="/icons/user-search.svg"
                  alt="Icon"
                  width={12}
                  height={12}
                />
              </div>
            </div>

            <div className="flex items-center animate-pulse bg-gray-700 gap-[4px] px-[6px] py-[2px] w-[145px] h-[20px] rounded-[16px] border border-[#404040]  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] w-[572px] h-[464px] px-[12px] pb-[24px] overflow-y-auto no-scrollbar">
        <div className="flex items-center  gap-[16px] w-[548px] h-[75.2px] px-[8px] py-[16px] rounded-[6px] hover:bg-gray-900">
          <div className="w-[120px] h-[67.2px] animate-pulse bg-gray-700 rounded-[6px] border border-white/25 overflow-hidden"></div>

          <div className="flex flex-col justify-between w-[297px] h-[67px]">
            <div className="flex items-center animate-pulse bg-gray-700 gap-[4px] w-[297px] h-[16px]"></div>

            <div className="flex flex-col gap-[5px] w-[297px] h-[29px]">
              <div className="flex animate-pulse bg-gray-700 items-center gap-[4px] w-[120px] h-[12px]"></div>

              <div className="flex animate-pulse bg-gray-700 items-center gap-[4px] w-[297px] h-[12px]"></div>
            </div>
          </div>

          <button className="flex items-center cursor-pointer gap-[4px] w-[83px] h-[36px] px-[12px] py-[10px] hover:bg-neutral-800 rounded-2xl">
            <span className="text-[10px] font-bold leading-[10px] text-[#FACC15]">
              Resolve
            </span>
            <div className="w-[16px] h-[16px] flex items-center justify-center">
              <Image
                src="/icons/chevron-right.svg"
                alt="Clock Icon"
                width={4.9}
                height={8}
              />
            </div>
          </button>
        </div>
        <div className="flex items-center  gap-[16px] w-[548px] h-[75.2px] px-[8px] py-[16px] rounded-[6px] hover:bg-gray-900">
          <div className="w-[120px] h-[67.2px] animate-pulse bg-gray-700 rounded-[6px] border border-white/25 overflow-hidden"></div>

          <div className="flex flex-col justify-between w-[297px] h-[67px]">
            <div className="flex items-center animate-pulse bg-gray-700 gap-[4px] w-[297px] h-[16px]"></div>

            <div className="flex flex-col gap-[5px] w-[297px] h-[29px]">
              <div className="flex animate-pulse bg-gray-700 items-center gap-[4px] w-[120px] h-[12px]"></div>

              <div className="flex animate-pulse bg-gray-700 items-center gap-[4px] w-[297px] h-[12px]"></div>
            </div>
          </div>

          <button className="flex items-center cursor-pointer gap-[4px] w-[83px] h-[36px] px-[12px] py-[10px] hover:bg-neutral-800 rounded-2xl">
            <span className="text-[10px] font-bold leading-[10px] text-[#FACC15]">
              Resolve
            </span>
            <div className="w-[16px] h-[16px] flex items-center justify-center">
              <Image
                src="/icons/chevron-right.svg"
                alt="Clock Icon"
                width={4.9}
                height={8}
              />
            </div>
          </button>
        </div>
        <div className="flex items-center  gap-[16px] w-[548px] h-[75.2px] px-[8px] py-[16px] rounded-[6px] hover:bg-gray-900">
          <div className="w-[120px] h-[67.2px] animate-pulse bg-gray-700 rounded-[6px] border border-white/25 overflow-hidden"></div>

          <div className="flex flex-col justify-between w-[297px] h-[67px]">
            <div className="flex items-center animate-pulse bg-gray-700 gap-[4px] w-[297px] h-[16px]"></div>

            <div className="flex flex-col gap-[5px] w-[297px] h-[29px]">
              <div className="flex animate-pulse bg-gray-700 items-center gap-[4px] w-[120px] h-[12px]"></div>

              <div className="flex animate-pulse bg-gray-700 items-center gap-[4px] w-[297px] h-[12px]"></div>
            </div>
          </div>

          <button className="flex items-center cursor-pointer gap-[4px] w-[83px] h-[36px] px-[12px] py-[10px] hover:bg-neutral-800 rounded-2xl">
            <span className="text-[10px] font-bold leading-[10px] text-[#FACC15]">
              Resolve
            </span>
            <div className="w-[16px] h-[16px] flex items-center justify-center">
              <Image
                src="/icons/chevron-right.svg"
                alt="Clock Icon"
                width={4.9}
                height={8}
              />
            </div>
          </button>
        </div>
        <div className="flex items-center  gap-[16px] w-[548px] h-[75.2px] px-[8px] py-[16px] rounded-[6px] hover:bg-gray-900">
          <div className="w-[120px] h-[67.2px] animate-pulse bg-gray-700 rounded-[6px] border border-white/25 overflow-hidden"></div>

          <div className="flex flex-col justify-between w-[297px] h-[67px]">
            <div className="flex items-center animate-pulse bg-gray-700 gap-[4px] w-[297px] h-[16px]"></div>

            <div className="flex flex-col gap-[5px] w-[297px] h-[29px]">
              <div className="flex animate-pulse bg-gray-700 items-center gap-[4px] w-[120px] h-[12px]"></div>

              <div className="flex animate-pulse bg-gray-700 items-center gap-[4px] w-[297px] h-[12px]"></div>
            </div>
          </div>

          <button className="flex items-center cursor-pointer gap-[4px] w-[83px] h-[36px] px-[12px] py-[10px] hover:bg-neutral-800 rounded-2xl">
            <span className="text-[10px] font-bold leading-[10px] text-[#FACC15]">
              Resolve
            </span>
            <div className="w-[16px] h-[16px] flex items-center justify-center">
              <Image
                src="/icons/chevron-right.svg"
                alt="Clock Icon"
                width={4.9}
                height={8}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightContainerLoading;
