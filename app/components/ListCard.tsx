import Image from 'next/image'
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';


interface ListCardProps{
  item:{
    id:string;
    type: string;
    camera:{
      id:string;
      location:string;
      name:string;
    }
    tsStart: string;
    tsEnd: string;
    thumbnailUrl:string;
    icon: string;
    resolved: boolean;
  };
  isFeding:boolean;
  onClick: (id:string) => void;
}


export default function ListCard({item, isFeding, onClick}:ListCardProps) {

  const [formatted, setFormatted] = useState("");
  
  const formatIncidentTime = (tsStart: Date, tsEnd: Date): string => {
    const startTime = format(tsStart, 'HH:mm');
    const endTime = format(tsEnd, 'HH:mm');
    const date = format(tsStart, 'd-MMM-yyyy');

    return `${startTime} - ${endTime} on ${date}`;
  }

  const doFormat = () => {
    const start = new Date(item.tsStart);
    const end = new Date(item.tsEnd);
    setFormatted(formatIncidentTime(start, end));
  }

  const getIcon = (type:string):string => {
    if(type==="Unauthorized Access"){
      return "/icons/unauthorised.svg";
    }
    else if(type==="Gun Threat"){
      return "/icons/gun.svg";
    }
    else{
      return "/icons/user-search.svg";
    }
  }

  const iconsrc = getIcon(item.type);

  useEffect(() => {
    doFormat();
  },[]);

  return (
    <div className={twMerge(isFeding?"opacity-50":"opacity-100", "flex items-center gap-[16px] w-[548px] h-[75.2px] p-[4px_12px_4px_4px] rounded-[6px]")}>
      
      <div className="w-[120px] h-[67.2px] rounded-[6px] border border-white/25 overflow-hidden">
        <Image
          src={item.thumbnailUrl}
          alt="Incident Thumbnail"
          width={120}
          height={67.2}
          className="object-cover"
        />
      </div>

      
       <div className="flex flex-col justify-between w-[297px] h-[67px]">

            <div className="flex items-center gap-[4px] w-[297px] h-[16px]">
                <div className="w-[16px] h-[16px] flex items-center justify-center">
                    <Image src={iconsrc} alt="Incident Icon" width={10} height={13.33} />
                </div>
                <span className="font-bold text-[12px] leading-[12px] text-white">
                    {item.type}
                </span>
            </div>

            
            <div className="flex flex-col gap-[5px] w-[297px] h-[29px]">
                
                <div className="flex items-center gap-[4px] w-[120px] h-[12px]">
                <Image src="/icons/camera.svg" alt="Camera Icon" width={10} height={10} />
                <span className="text-[10px] font-normal leading-[10px] text-gray-300">
                    {item.camera.location}
                </span>
                </div>

                
                <div className="flex items-center font-sans gap-[4px] w-[297px] h-[12px]">
                <Image src="/icons/clock.svg" alt="Clock Icon" width={9} height={10} />
                <span className="text-[10px] font-bold leading-[10px] text-gray-300">
                    {formatted}
                </span>
                </div>
            </div>
        </div>



      
      <button onClick={() => onClick(item.id)} className="flex items-center cursor-pointer gap-[4px] w-[83px] h-[36px] px-[12px] py-[10px] transform hover:bg-neutral-800 rounded-2xl">
        <span className="text-[10px] font-bold leading-[10px] text-[#FACC15]">
            Resolve
        </span>
        <div className='w-[16px] h-[16px] flex items-center justify-center'>
            <Image src="/icons/chevron-right.svg" alt="Clock Icon" width={4.9} height={8} />
        </div>
    </button>
    </div>
  )
}
