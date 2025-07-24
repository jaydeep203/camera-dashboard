import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
    src:string;
    type:string;
    layout:string;
    typeColor:string;
    bgColor:string;
}

const Badge = ({src, type, layout, typeColor, bgColor}:BadgeProps) => {
  return (
    <div className={twMerge(layout, "absolute")}>
        <div className={twMerge(bgColor, "w-full h-full flex items-center gap-1 rounded border-l-2 px-[6px] py-[2px]")}>
            <Image src={src} alt="traffic" width={12} height={12} />

            <span className={twMerge(typeColor, "text-xs font-sans font-medium leading-4 text-center")}>
                {type}
            </span>
        </div>
    </div>
  )
}

export default Badge