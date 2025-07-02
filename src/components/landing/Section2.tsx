import Card from "@/components/landing/Card";
import { useTranslations } from "next-intl";
const Section2 = () => {
  const t = useTranslations("LandingPage.section_2");

  return (
    <Card className="flex flex-col gap-10" id="section_2">
      <h1 className="font-normal text-7xl xl:text-11xl tracking-normal mb-10 uppercase">
        {t("title")}
      </h1>
      {[
        {
          label: t("group_1"),
          content: t("content_1"),
          note: t("note_1"),
        },
        {
          label: t("group_2"),
          content: t("content_2"),
        },
        {
          label: t("group_3"),
          content: t("content_3"),
        },
      ].map((item, index) => {
        return (
          <div key={index} className="flex flex-col">
            <p className="text-primary font-medium text-3xl">0{index + 1}</p>
            <div className="border-b border-white mt-3 mb-10" />
            <div className="flex flex-col md:flex-row">
              <div className="text-3xl flex-1 mb-12 md:mb-0 uppercase">
                {item.label}
              </div>
              <div className="text-lg flex-1 font-light">
                {item.content}
                {item.note && <p className="text-base mt-6">{item.note}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </Card>
  );
};
export default Section2;
