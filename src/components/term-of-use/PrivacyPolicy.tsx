import { LogoAvatar48, PowerLight } from "@/assets";
import TitleCard from "@/components/landing/TitleCard";
import PrivacyPolicyContent from "@/components/term-of-use/PrivacyPolicyContent";
import { Button } from "@/components/ui/button";
import LanguageDrawer from "@/components/ui/LanguageDrawer";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const PrivacyPolicy = () => {
  const t = useTranslations("LandingPage");
  const params = useParams();
  const { locale } = params;
  return (
    <>
      <Link href={"/"}>
        <LogoAvatar48
          className={clsx(
            "opacity-0 lg:opacity-100 block text-[98px]",
            "absolute top-8 left-12 z-10"
          )}
        />
      </Link>
      <div className="hidden lg:flex flex-col items-end absolute top-8 right-12 z-10">
        <Link href={`https://avatar48.ai/agent/${locale}`}>
          <Button>
            <PowerLight />
            {t("get_started")}
          </Button>
        </Link>
      </div>
      <div
        style={{
          backgroundImage: `url(/assets/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100svh",
          width: "100svw",
          position: "relative",
          overflow: "auto",
          scrollBehavior: "smooth",
        }}
        className="pt-8 px-3 md:px-5 lg:px-0 [&_*]:leading-[1.3] text-lg"
      >
        <div className="lg:hidden flex justify-between mb-10 w-full">
          <Link href={"/"}>
            <LogoAvatar48 className={clsx("text-[64px]")} />
          </Link>
                  <Link href={`https://avatar48.ai/agent/${locale}`}>
          <Button>
            <PowerLight />
            {t("get_started")}
          </Button>
        </Link>
        </div>
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
        <div
          className={clsx(
            "lg:sticky lg:bottom-0 lg:max-w-none lg:mx-auto lg:pl-5 lg:justify-start lg:mb-0",
            "mb-4 pt-4 flex items-center justify-between gap-4 whitespace-nowrap "
          )}
        >
          <LanguageDrawer className="h-8 w-fit" />
          <Link
            href="/term-of-use"
            className="uppercase h-12 flex items-center font-medium"
          >
            {t("term_of_use")}
          </Link>
          <Link
            href="/privacy-policy"
            className="uppercase  flex items-center font-medium text-primary"
          >
            {t("privacy_policy")}
          </Link>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
