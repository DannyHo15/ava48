"use client";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import RiseTogether from "@/components/home/RiseTogether";
import Aya from "@/components/home/Aya";

gsap.registerPlugin(useGSAP, ScrollToPlugin, ScrollTrigger, Observer);

const sections = [
  { Component: RiseTogether },
  { Component: Aya },
];

export default function Home() {
  const t = useTranslations("LandingPage");
  const main = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(-1);
  const animating = useRef(false);
  const animationWrapper = useRef<HTMLDivElement>(null)
  const observer = useRef<Observer | null>(null);

  // useGSAP(
  //   () => {
  //     currentIndex.current = -1;
  //     animating.current = false;

      const sections = gsap.utils.toArray<HTMLElement>(".section-container");
      const outerWrappers = gsap.utils.toArray<HTMLDivElement>(".outer-wrapper");
      const innerWrappers = gsap.utils.toArray<HTMLDivElement>(".inner-wrapper");
      const headings = gsap.utils.toArray<HTMLHeadingElement>(".section-heading");

  //     gsap.set(outerWrappers, { yPercent: 100 });
  //     gsap.set(innerWrappers, { yPercent: -100 });

  //     const gotoSection = (index: number, direction: number) => {
  //       animating.current = true;

  //       const fromTop = direction === -1;
  //       const dFactor = fromTop ? -1 : 1;
  //       const tl = gsap.timeline({
  //         defaults: { duration: 1.25, ease: "power1.inOut" },
  //         onComplete: () => {
  //           animating.current = false;
  //         },
  //       });

  //       if (currentIndex.current >= 0) {
  //         gsap.set(sections[currentIndex.current], { zIndex: 0 });
  //         tl.to(headings[currentIndex.current], {
  //           yPercent: -15 * dFactor,
  //         }).set(sections[currentIndex.current], { autoAlpha: 0 });
  //       }

        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo(
          [outerWrappers[index], innerWrappers[index]],
          {
            yPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor),
          },
          { yPercent: 0 },
          0
        ).fromTo(
          headings[index],
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
          },
          0.2
        );

  //       currentIndex.current = index;
  //     };

      observer.current = Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => {
          if (!animating.current && currentIndex.current > 0) {
            gotoSection(currentIndex.current - 1, -1);
          }
        },
        onUp: () => {
          if (!animating.current && currentIndex.current < sections.length - 1) {
            gotoSection(currentIndex.current + 1, 1);
          }
        },
        tolerance: 10,
        preventDefault: true,
      });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown" || e.key === " ") {
          e.preventDefault();
          if (currentIndex.current < sections.length - 1 && !animating.current) {
            gotoSection(currentIndex.current + 1, 1);
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (currentIndex.current > 0 && !animating.current) {
            gotoSection(currentIndex.current - 1, -1);
          }
        }
      };

  //     window.addEventListener("keydown", handleKeyDown);

  //     if (currentIndex.current === -1) {
  //       currentIndex.current = 0;
  //       gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
  //       gsap.set(outerWrappers[0], { yPercent: 0 });
  //       gsap.set(innerWrappers[0], { yPercent: 0 });
  //       gsap.set(headings[0], { autoAlpha: 1, yPercent: 0 });
  //     }

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        observer.current?.kill();
      };
    },
    { scope: main }
  );

  return (
    <div ref={main} className="bg-transparent text-white font-sans overflow-hidden h-screen">
      <div className="relative w-full h-full">
        {sections.map((item, index) => (
          <item.Component key={index} />
        ))}
      </div>
    </div>
  );
}
