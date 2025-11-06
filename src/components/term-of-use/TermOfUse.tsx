import { ArrowRightCircle, LogoAvatar48, PowerLight } from "@/assets";
import TitleCard from "@/components/landing/TitleCard";
import TermOfUseContent from "@/components/term-of-use/TermOfUseContent";
import { Button } from "@/components/ui/button";
import LanguageDrawer from "@/components/ui/LanguageDrawer";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/lib/constants";

const TermOfUse = () => {
  const t = useTranslations("LandingPage");
  const params = useParams();
  const { locale } = params;
  const baseUrl = BASE_URL;
  return (
    <>
      <Link href={"/"}>
        <LogoAvatar48
          className={clsx(
            "opacity-0 lg:opacity-100 block text-[98px]",
            "absolute top-8 left-6 z-10"
          )}
        />
      </Link>
      <div className="hidden lg:flex flex-col items-end absolute top-8 right-6 z-10">
      <div className="flex gap-4 lg:gap-2">
          <Link href={`${baseUrl}/agent/${locale}`}>
            <Button>
              <PowerLight />
              {t("lets_talk")}
            </Button>
          </Link>
          <Link href={`${baseUrl}/platform/${locale}`}>
            <Button className="bg-white text-black hover:bg-white/80">
              <ArrowRightCircle />
              {t("create_agent")}
            </Button>
          </Link>
        </div>
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
          <LogoAvatar48 className={clsx("text-[64px]")} />
          <div className="flex gap-4 lg:gap-2">
            <Link href={`${baseUrl}/agent/${locale}`}>
              <Button className="sm:text-lg text-base">
                <PowerLight className="hidden sm:block" />
                {t("lets_talk")}
              </Button>
            </Link>
            <Link href={`${baseUrl}/platform/${locale}`}>
              <Button className="bg-white text-black hover:bg-white/80 p-2 sm:text-lg text-base">
                <ArrowRightCircle className="!w-6 !h-6 hidden sm:block" />
                {t("create_agent")}
              </Button>
            </Link>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(94.93deg, rgba(0, 8, 61, 0.48) 49.31%, rgba(2, 74, 85, 0.4) 94.67%)",
            boxShadow: "0px 8px 7px 0px #01CCF566",
          }}
          className="lg:max-w-[690px] xl:max-w-[726px] lg:mx-auto overflow-hidden rounded-lg p-3 md:p-10"
        >
          <TitleCard className="mb-4 mx-auto">{t("term_of_use")}</TitleCard>
          <TermOfUseContent />
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
            className="uppercase h-12 flex items-center font-medium text-primary"
          >
            {t("term_of_use")}
          </Link>
          <Link
            href="/privacy-policy"
            className="uppercase  flex items-center font-medium"
          >
            {t("privacy_policy")}
          </Link>
        </div>
      </div>
    </>
  );
};
export default TermOfUse;
