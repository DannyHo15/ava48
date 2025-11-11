"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import RiseTogether from "@/components/home/RiseTogether";
import Aya from "@/components/home/Aya";
import AIConnection from "@/components/home/AIConnection";
import EarnAyaConnection from "@/components/home/EarnAyaConnection";
gsap.registerPlugin(useGSAP, Observer);

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const sections = [
  { Component: RiseTogether },
  { Component: Aya },
  { Component: AIConnection },
  { Component: EarnAyaConnection },
];

export default function Home() {
  const main = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const observer = useRef<Observer | null>(null);

  const [container, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 0,
    },
    defaultAnimation: {
      duration: 1000,
    },
    drag: false,
    animationStarted: () => (animating.current = true),
    animationEnded: () => setTimeout(() => (animating.current = false)),
    vertical: true,
  });

  useGSAP(
    () => {
      animating.current = false;

      observer.current = Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => {
          if (!animating.current) {
            slider.current?.prev();
          }
        },
        onUp: () => {
          if (!animating.current) {
            slider.current?.next();
          }
        },
        tolerance: 10,
        preventDefault: true,
      });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown" || e.key === " ") {
          e.preventDefault();
          if (!animating.current) {
            slider.current?.next();
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (!animating.current) {
            slider.current?.prev();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        observer.current?.kill();
      };
    },
    { scope: main }
  );

  return (
    <div ref={container} className="relative size-full keen-slider">
      {sections.map((item, index) => (
        <item.Component key={index} />
      ))}
    </div>
  );
}
