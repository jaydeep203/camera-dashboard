import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import TimeLine from "./components/TimeLine";


export default function Home() {
  return (
    <main className="w-[1440px] h-[820px] flex flex-col gap-[24px] p-[24px] mx-auto">

      <div className="w-[1392px] h-[450px] flex flex-row gap-[24px]">
        <LeftContainer />
        <RightContainer />
      </div>

      <TimeLine />

    </main>
  );
}
