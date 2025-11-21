"use client";
import { useRef, useState, useEffect, Suspense } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import RiseTogether from "@/components/home/RiseTogether";
import Aya from "@/components/home/Aya";
import Eimi from "@/components/home/EimiFukaka";
import EarnAyaConnection from "@/components/home/EarnAyaConnection";
import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
import Vision from "@/components/home/Vision";
import { cn } from "@/lib/utils";
import Robotic from "@/components/home/Robotic";

gsap.registerPlugin(useGSAP, Observer);

const sections = [
  // { Component: Eimi },
  // { Component: Aya },
  // { Component: Robotic },
  // { Component: EarnAyaConnection },
  // { Component: RiseTogether },
  { Component: Vision },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const animating = useRef(false);
  const observer = useRef<Observer | null>(null);
  const scrollBarRef = useRef<HTMLDivElement>(null);

  const [container, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 0,
    },
    defaultAnimation: {
      duration: 2000,
    },
    slideChanged: (s) => {
      setCurrentIndex(s.track.details.rel);
    },
    drag: true,
    created: (s) => {
      setSlidesLength(s.track.details.slides.length);
    },
    animationStarted: () => (animating.current = true),
    animationEnded: () => setTimeout(() => (animating.current = false)),
    vertical: true,
  });

  useEffect(() => {
    return () => {
      slider.current?.destroy();
    };
  }, [slider]);

  useGSAP(() => {
    animating.current = false;

    observer.current = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => {
        if (!animating.current && window.innerWidth > 1024) {
          slider.current?.prev();
        }
      },
      onUp: () => {
        if (!animating.current && window.innerWidth > 1024) {
          slider.current?.next();
        }
      },
      tolerance: 10,
      preventDefault: true,
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        if (!animating.current && window.innerWidth > 1024) {
          slider.current?.next();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!animating.current && window.innerWidth > 1024) {
          slider.current?.prev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      observer.current?.kill();
    };
  });

  useGSAP(() => {
    if (scrollBarRef.current && slidesLength > 1) {
      const scrollHeight = 100 - 100 / slidesLength;
      const topPosition = (currentIndex / (slidesLength - 1)) * scrollHeight;

      gsap.to(scrollBarRef.current, {
        top: `${topPosition}%`,
        duration: 2,
        ease: "power2.out",
      });
    }
  }, [currentIndex, slidesLength]);

  return (
    <div ref={container} className="relative size-full keen-slider z-1">
      {sections.map((item, index) => (
        <item.Component key={index} />
      ))}
      <div
        ref={scrollBarRef}
        className={cn(
          "absolute right-0 w-0.5 rounded-full bg-white/40 z-99999",
          {
            "h-1/2": slidesLength === 2,
            "h-1/3": slidesLength === 3,
            "h-1/4": slidesLength === 4,
            "h-1/5": slidesLength === 5,
            "h-1/6": slidesLength === 6,
            "h-1/7": slidesLength === 7,
            "h-1/8": slidesLength === 8,
            "h-1/9": slidesLength === 9,
            "h-1/10": slidesLength === 10,
          }
        )}
      ></div>
    </div>
  );
}
