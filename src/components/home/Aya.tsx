import AyaAvt from "@/assets/AYA/aya-bg.webp";
import ImageAvatar48 from "../ImageAvatar48";
import DiamondDots from "../DiamondDots";
import GlassCard from "../common/GlassCard";
import { SectionWrapper } from "../SectionWrapper";
import ShapeGradientWrapper from "../ShapeGradientWrapper";

const RiseTogether = () => {
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed inset-0 bg-[url(/assets/bg-texture-2.webp)] bg-cover bg-center mix-blend-overlay" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="avatar-container relative h-dvh overflow-hidden">
      <div className="absolute w-[1342px] h-[496px] prm:w-[1643px] sm:w-[1568px] sm:h-[552px] prm:[657px] bottom-0 right-[-219%] prm:right-[-215%] prm:bottom-[10%] sm:right-[-20%] sm:bottom-0  2xl:w-[1984px] 2xl:h-[794px] 2xl:right-[-22%] 2xl:bottom-[10%]  bg-[url(/assets/bg-texture.webp)] bg-contain bg-bottom  z-10 bg-no-repeat" />
        <div className="flex items-end justify-center h-dvh">
          <div className="absolute rounded-full w-[794.69px] prm:w-[1160px] 2xl:w-[1310px] h-[552px] prm:h-[807px] 2xl:h-[911px] top-[24%] prm:top-[38%] sm:w-[1657px] sm:h-[1153px] sm:top-[6%] 2xl:top-[21%] sm:left-[2%] sm:opacity-[0.56] bg-linear-to-br from-avatar-blue-3 dark:from-[#f200ff] from-27% via-avatar-blue-5 to-avatar-blue-4 dark:top-avatar blur-[120px] -rotate-[4.54deg] opacity-60 mix-blend-screen"></div>
          <DiamondDots
            className="absolute bottom-[61%] prm:bottom-[57%] left-[30%] prm:left-[25%] sm:left-[24%] sm:bottom-[72.5%] 2xl:bottom-[63%] 2xl:left-[31%] -translate-x-1/2 z-30"
            color="bg-white"
          />
          <div className="absolute left-[12%] prm:left-[4%] top-[35%] prm:top-[39%] z-5 sm:left-[3%] sm:top-[21%] 2xl:top-[30%] 2xl:left-[13%]">
            <h1
              className="font-karantina text-custom-55 sm:text-custom-120 font-black drop-shadow-amber-950 drop-shadow-xs dark:bg-[linear-gradient(135deg,#FFFFFF_50%,#D81DE2_150%)] bg-[linear-gradient(135deg,#FFFFFF_50%,#3EF8FF_150%)] bg-clip-text text-transparent uppercase leading-[86%] z-15"
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              THE
              <br />
              ULTIMATE
            </h1>
            {/* laptop */}
            <ShapeGradientWrapper
              index={"lap-1"}
              shapeWidth={195}
              shapeHeight={100}
              className="sm:top-[72%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden 2xl:block"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 195,9 A 8.705,9 0,0,0 186,0 L 44,0 A 8,9 0,0,0 35,4 L 4,45 A 17,19 0,0,0 0,54 L 0,90 A 8,9 0,0,0 8,100 L 186,100 A 8,9 0,0,0 195,90 Z"
              }
            />

            {/* Tablet */}
            <ShapeGradientWrapper
              index={"tab-1"}
              shapeWidth={195}
              shapeHeight={87}
              className="sm:top-[75%] 2xl:top-[72%] sm:left-[-4%] 2xl:left-[-13%] z-20 hidden sm:block 2xl:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 195,9 A 8.705,9 0,0,0 186,0 L 44,0 A 8,9 0,0,0 35,4 L 4,45 A 17,19 0,0,0 0,54 L 0,77 A 8,9 0,0,0 8,87 L 186,87 A 8,9 0,0,0 195,77 Z"
              }
            />

            {/* Mobile */}
            <ShapeGradientWrapper
              index={"mob-1"}
              shapeWidth={80}
              shapeHeight={40}
              className="prm:top-[73%] prm:left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 hidden prm:block sm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 80,3 A 5,5 0,0,0 77,0 L 20,0 A 10,10 0,0,0 17,2 L 2,13 A 10,10 0,0,0 0,16 L 0,37 A 5,5 0,0,0 3,40 L 77,40 A 5,5 0,0,0 80,37 Z"
              }
            />

            {/* Mini Mobile */}
            <ShapeGradientWrapper
              index={"mini-mob-1"}
              shapeWidth={60}
              shapeHeight={31}
              className="top-[72%] left-[-7%] prm:top-[73%] prm:left-[-7%] sm:top-[75%] sm:left-[-4%] 2xl:top-[72%] 2xl:left-[-13%] z-20 prm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={0.31}
              path={
                "M 60,3 A 5,5 0,0,0 57,0 L 20,0 A 10,10 0,0,0 17,2 L 2,13 A 10,10 0,0,0 0,16 L 0,29 A 5,5 0,0,0 3,31 L 57,31 A 5,5 0,0,0 60,29 Z"
              }
            />
          </div>
          <div className="relative max-w-6xl flex justify-center mb-0 pt-28 sm:pt-0 2xl:pt-[118px]">
            <ImageAvatar48
              className="max-w-[107%] sm:w-[640px] h-dvh w-auto left-2 object-contain z-10 relative"
              lightURL={"/assets/aya-bg.webp"}
              drakURL={"/assets/aya-bg-dark.webp"}
            ></ImageAvatar48>

            {/* laptop */}
            <ShapeGradientWrapper
              index={"lap-2"}
              shapeWidth={146}
              shapeHeight={203}
              className="2xl:bottom-[46%] 2xl:right-[7%] z-0 hidden 2xl:block"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              bgColor="bg-linear-to-b from-white/30 to-white/0"
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 92,0 A 15,15 0,0,1 100,5 L 142,50 A 15,15 0,0,1 146,59 L 146,193 A 10,10 0,0,1 139,203 L 10,203 A 10,10 0,0,1 0,193 Z"
              }
            />

            {/* Tablet */}
            <ShapeGradientWrapper
              index={"tab-2"}
              shapeWidth={164}
              shapeHeight={281}
              className="sm:bottom-[41%] sm:right-[-1%] 2xl:bottom-[46%] 2xl:right-[7%] z-0 hidden sm:block 2xl:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 92,0 A 15,15 0,0,1 100,5 L 160,70 A 15,15 0,0,1 164,79 L 164,271 A 10,10 0,0,1 157,281 L 10,281 A 10,10 0,0,1 0,271 Z"
              }
            />

            {/* Mobile */}
            <ShapeGradientWrapper
              index={"mob-2"}
              shapeWidth={101}
              shapeHeight={140}
              className="prm:bottom-[42%] prm:right-[4%] sm:bottom-[41%] sm:right-[-1%] 2xl:bottom-[46%] 2xl:right-[7%] z-0 hidden prm:block sm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 65,0 A 15,15 0,0,1 73,5 L 99,30 A 15,15 0,0,1 101,36 L 101,130 A 10,10 0,0,1 139,140 L 10,140 A 10,10 0,0,1 0,130 Z"
              }
            />
          </div>
          <div className="absolute right-6 prm:right-9 sm:right-[8%] bottom-[33%] prm:bottom-[27%] sm:bottom-[20%] 2xl:bottom-[32%] 2xl:right-[10%] z-10 ">
            <h2
              className="font-karantina text-custom-70 sm:text-[160px] font-black bg-linear-to-r from-[#00F6FF] to-white bg-clip-text text-transparent uppercase leading-[86%] text-right"
              style={{
                filter: "drop-shadow(1.7px 2.55px 1.53px rgba(0, 0, 0, 0.4))",
              }}
            >
              AVATAR
              <br />
              EXPERIENCE
            </h2>

            {/* Laptop */}
            <ShapeGradientWrapper
              index={"lap-3"}
              shapeWidth={224}
              shapeHeight={104}
              className="sm:top-[36%] sm:right-[-21%] z-10 hidden sm:block"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              strokeWidth={1}
              path={
                "M 0,10 A 10,10 0,0,1 10,0 L 173,0 A 10,10 0,0,1 183,5 L 219,47 A 20,20 0,0,1 224,57 L 224,94 A 10,10 0,0,1 214,104 L 10,104 A 10,10 0,0,1 0,94 Z"
              }
            />

            {/* Mobile */}
            <ShapeGradientWrapper
              index={"mob-3"}
              shapeWidth={94}
              shapeHeight={44}
              className="prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-10 hidden prm:block sm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              strokeWidth={1}
              path={
                "M 0,5 A 5,5 0,0,1 5,0 L 70,0 A 5,5 0,0,1 75,2 L 92,16 A 5,5 0,0,1 94,19 L 94,34 A 10,10 0,0,1 84,44 L 10,44 A 10,10 0,0,1 0,34 Z"
              }
            />

            {/* Mini Mobile */}
            <ShapeGradientWrapper
              index={"mini-mob-2"}
              shapeWidth={78}
              shapeHeight={36}
              className="bottom-[-16%] right-[-5%] prm:top-[74%] prm:right-[-7%] sm:top-[36%] sm:right-[-21%] z-10 prm:hidden"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-l"
              strokeWidth={0.34}
              path={
                "M 0,5 A 5,5 0,0,1 5,0 L 59,0 A 5,5 0,0,1 62,2 L 76,16 A 5,5 0,0,1 78,19 L 78,33 A 3,3 0,0,1 75,36 L 3,36 A 5,5 0,0,1 0,33 Z"
              }
            />

            {/* Laptop */}
            <ShapeGradientWrapper
              index={"lap-4"}
              shapeWidth={104}
              shapeHeight={61}
              className="sm:bottom-[-5%] sm:right-[87%] z-15 hidden sm:block"
              strokeColor={[
                { offset: "20%", stopColor: "rgba(255, 255, 255, 1)" },
                { offset: "100%", stopColor: "rgba(255, 255, 255, 0)" },
              ]}
              strokeDirection="to-br"
              strokeWidth={1}
              path={
                "M 0 ,10 A 10,10 0,0,1 10,0 L 94 ,0 A 10,10 0,0,1 104,10 L 104,51 A 10,10 0,0,1 94,61 L 10,61 A 10,10 0,0,1 0,51 Z"
              }
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RiseTogether;
