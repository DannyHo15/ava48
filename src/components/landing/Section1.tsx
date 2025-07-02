import Card from "@/components/landing/Card";
import clsx from "clsx";
import { useTranslations } from "next-intl";
const Section1 = () => {
  const t = useTranslations("LandingPage.section_1");
  return (
    <Card id="section_1" className="md:!px-0">
      <div
        className={clsx(
          "relative",
          "uppercase rounded-[40px]",
          "bg-cover bg-center bg-no-repeat",
          "flex flex-col justify-between"
        )}
      >
        <img
          src="/assets/mask_group.png"
          alt=""
          className="w-full hidden md:block"
        />
        <img
          src="/assets/mask_group_2.png"
          alt=""
          className="w-full md:hidden"
        />
        <div className="absolute inset-0">
          <div
            className={clsx(
              "absolute top-0 left-0 w-[53%] h-[50%] md:h-[45%] flex justify-center items-center "
            )}
          >
            <h1
              className={clsx(
                "leading-[98%] md:leading-[50px] text-center",
                "font-normal text-3xl sm:text-7xl mobile:text-[52px] md:text-[40px] xl:text-[46px] tracking-normal"
              )}
            >
              {t("unlock")}
            </h1>
          </div>
          <div
            className={clsx(
              "absolute bottom-0 right-0 w-[53%] flex justify-center items-center h-[35%]"
            )}
          >
            <h1
              className={clsx(
                "leading-[98%] md:leading-[50px] text-center",
                "font-normal text-3xl sm:text-7xl mobile:text-[52px] md:text-[40px] xl:text-[46px] tracking-normal"
              )}
            >
              {t("for_crypto_knowledge")}
            </h1>
          </div>
        </div>
      </div>
      <div className="mb-3 mt-8 md:mt-12 text-2xl md:text-2xl tracking-normal font-light">
        {t("label")}
      </div>
    </Card>
  );
};
export default Section1;
