"use client";

import TitleCard from "@/components/TitleCard";
import TermOfUseContent from "@/components/TermOfUseContent";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("LandingPage");

  return (
    <div className="py-11">
      <div className="lg:max-w-[690px] xl:max-w-[726px] lg:mx-auto rounded-lg p-3 md:p-10 text-white">
        <TitleCard className="mb-4 mx-auto">{t("term_of_use")}</TitleCard>
        <TermOfUseContent />
      </div>
    </div>
  );
}
export default Page;
