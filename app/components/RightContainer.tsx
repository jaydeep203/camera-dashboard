"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import ListCard from "./ListCard";
import axios from "axios";
import RightContainerLoading from "./Skeleton/RightContainerLoading";

interface incidentProps {
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
}

const RightContainer = () => {
  const [incidents, setIncidents] = useState<incidentProps[]|undefined>(undefined);
  const [fedid, setfedid] = useState("");
  const [resolved, setResolved] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchIncidents = async() => {

    setLoading(true);
    try{

      const response = await axios.get("/api/incidents?resolved=false");
      setIncidents(response.data);
      
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }

  }

  const resolveClick = useCallback(async(id:string) => {
    try {
      
      setfedid(id);
      await axios.patch(`/api/incidents/${id}/resolve`) ;

        setTimeout(() => {
            setIncidents((prev) => prev?.filter((incident:incidentProps) => incident.id !== id));
            setfedid("");
            setResolved(prev => prev+1);
        }, 300);
      } catch (err) {
        console.error("Failed to resolve", err);
      }
  },[]);

  useEffect(() => {
    fetchIncidents();
  },[]);

  if(loading){
    return (
      <RightContainerLoading />
    );
  }

  if(incidents===undefined){
    return(
      <div className="w-[572px] h-[450px] flex flex-col rounded-[6px] bg-[#131313]">
        <div className="flex items-center gap-[8px] w-[572px] h-[56px] p-[16px]">
          <p>
            No Incidents to display
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-[572px] h-[450px] flex flex-col rounded-[6px] bg-[#131313]">
      <div className="flex items-center gap-[8px] w-[572px] h-[56px] p-[16px]">
        <div className="w-[24px] h-[24px] rounded-full border-[2px] bg-[#7F1D1D]  border-[#450A0A] flex items-center justify-center">
          <Image
            src="/icons/featured.svg"
            alt="Featured Icon"
            width={12}
            height={12}
            className="top-[3px] left-[6px]"
          />
        </div>

        
        <div className="flex items-center gap-[6px] w-[508px] h-[18px]">
          <span className="text-[18px] h-[18px] w-[508px] font-semibold leading-[18px] text-[#FAFAFA] truncate">
            {incidents.length} Unresolved Incidents
          </span>

          <div className="flex items-center gap-[3px] w-[200px] h-[20px]">
            
            <div className="flex items-center justify-between space-x-[-16px] w-[52px] h-[20px]">
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

            
            <div className="flex items-center gap-[4px] px-[6px] py-[2px] w-[145px] h-[20px] rounded-[16px] border border-[#404040] bg-[#0B0B0B] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              
              <Image
                src="/icons/check-check.svg"
                alt="Check Icon"
                width={12}
                height={12}
              />
              
              <span className="text-xs font-medium leading-4 text-gray-200 text-center truncate">
                {resolved} resolved Incidents
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] w-[572px] h-[464px] px-[12px] pb-[24px] overflow-y-auto no-scrollbar">
        {incidents.map((item, i) => (
          <ListCard key={i} isFeding={item.id===fedid} item={item} onClick={resolveClick} />
        ))}
      </div>
    </div>
  );
};

export default RightContainer;
