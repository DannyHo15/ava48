"use client";

import TitleCard from "@/components/TitleCard";
import TermOfUseContent from "@/components/TermOfUseContent";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

function Page() {
  const t = useTranslations("LandingPage");

  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      if (smoother.current) {
        smoother.current.kill();
        smoother.current = null;
      }
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-avatar-black" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="fixed md:hidden h-full w-480 top-0 -right-64 cs-radial-sm" />
      <div className="py-24 sm:py-32 lg:py-24" id="smooth-content">
        <div className="lg:max-w-[690px] xl:max-w-[1200px] lg:mx-auto rounded-lg p-5 sm:p-10 text-white">
          <TitleCard className="mb-4 mx-auto">{t("term_of_use")}</TitleCard>
          <TermOfUseContent />
        </div>
      </div>
    </>
  );
}
export default Page;
