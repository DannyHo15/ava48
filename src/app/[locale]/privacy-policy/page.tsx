"use client";
import TitleCard from "@/components/TitleCard";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("LandingPage");

  return (
    <div className="py-11 text-white">
      <div
        className="lg:max-w-[690px] xl:max-w-[726px] lg:mx-auto overflow-hidden rounded-lg p-3 md:p-10"
      >
        <TitleCard className="mb-4 mx-auto">{t("privacy_policy")}</TitleCard>
        <PrivacyPolicyContent />
      </div>
    </div>
  );
}
export default Page;
