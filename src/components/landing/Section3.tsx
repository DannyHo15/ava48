import { Ringer_Volume, Union } from "@/assets";
import Card from "@/components/landing/Card";
import clsx from "clsx";
import { useTranslations } from "next-intl";
const Section3 = () => {
  const t = useTranslations("LandingPage.section_3");

  return (
    <Card className="flex flex-col gap-10" id="section_3">
      <h1 className="font-normal text-7xl xl:text-11xl tracking-normal mb-10 uppercase">
        {t("title")}
      </h1>
      <div>
        {[
          {
            label: t("step_1"),
            content: t("step_content_1"),
          },
          {
            label: (
              <div
                className="flex items-center flex-wrap"
                style={{ display: "ruby" }}
              >
                {t("tap")}
                <span
                  className="size-12 flex items-center justify-center [&_svg]:size-6 mx-2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(325.83deg, rgba(68, 68, 68, 0.4) 4.51%, rgba(0, 0, 0, 0.4) 44.8%)",
                  }}
                >
                  <Union />
                </span>
                {t("chat")}
              </div>
            ),
            content: t("step_content_2"),
          },
          {
            label: (
              <div
                className="flex items-center flex-wrap"
                style={{ display: "ruby" }}
              >
                {t("live_call")}
                <div
                  className="size-12 flex items-center justify-center [&_svg]:size-6 mx-2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(325.83deg, rgba(68, 68, 68, 0.4) 4.51%, rgba(0, 0, 0, 0.4) 44.8%)",
                  }}
                >
                  <Ringer_Volume />
                </div>
                {t("join_3_min")}
              </div>
            ),
            content: t("step_content_3"),
          },
          {
            label: t("step_4"),
            content: t("step_content_4"),
          },
          {
            label: t("step_5"),
            content: t("step_content_5"),
            last: true,
          },
        ].map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="inline-flex gap-4 items-center">
                <div
                  className={clsx(
                    "text-2xl md:text-3xl",
                    "size-14 md:size-17",
                    "text-black font-medium flex justify-center items-center rounded-full shrink-0 overflow-hidden",
                    "border-2 border-primary"
                  )}
                  style={{
                    background:
                      "linear-gradient(162.16deg, #00D0F6 52.12%, #0083F5 89.23%)",
                    boxShadow: "0px 5px 3px 0px #FFFFFFCC inset",
                  }}
                >
                  0{index + 1}
                </div>
                <div className="text-2xl md:text-3xl font-normal">
                  {item.label}
                </div>
              </div>
              <div
                className={clsx(
                  "flex flex-col",
                  "text-lg",
                  item.last
                    ? "pl-18 md:pl-21"
                    : "border-l-2 border-white min-h-14 pl-12 ml-6 md:ml-8 mb-4"
                )}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
export default Section3;
