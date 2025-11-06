"use client";
import TitleCard from "@/components/TitleCard";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("LandingPage");
  return (
    <div
      style={{
        background:
          "linear-gradient(94.93deg, rgba(0, 8, 61, 0.48) 49.31%, rgba(2, 74, 85, 0.4) 94.67%)",
        boxShadow: "0px 8px 7px 0px #01CCF566",
      }}
      className="lg:max-w-[690px] xl:max-w-[726px] lg:mx-auto overflow-hidden rounded-lg p-3 md:p-10"
    >
      <TitleCard className="mb-4 mx-auto">{t("privacy_policy")}</TitleCard>
      <PrivacyPolicyContent />
    </div>
  );
}
export default Page;
