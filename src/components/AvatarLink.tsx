"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { LanguageEnum } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";

const languages = [
  {
    value: LanguageEnum.EN,
    label: "English",
  },
  {
    value: LanguageEnum.ZHCN,
    label: "简体中文",
  },
  {
    value: LanguageEnum.ZHTW,
    label: "繁體中文",
  },
  {
    value: LanguageEnum.JA,
    label: "日本語",
  },
];

export const AvatarLink = () => {
  const t = useTranslations("LandingPage");
  const params = useParams();
  const { locale } = params;
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLangBox, setIsOpenLangBox] = useState(false);

  function onSelectChange(value: LanguageEnum) {
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      replace({ pathname, params }, { locale: value });
    });
  }

  const toggleLangBox = () => {
    setIsOpenLangBox(!isOpenLangBox);
  };
  return (
    <div
      className={cn(
        "fixed bottom-2.5 min-[500px]:bottom-6.5 md:bottom-15 lg:bottom-5 min-[2000px]:bottom-10! right-3 min-[500px]:right-5 md:right-10 lg:right-13.25 min-[2000px]:right-20! z-10 rounded-b-full min-[500px]:rounded-b-none space-y-px min-[500px]:space-y-0"
      )}
    >
      <div className="hidden min-[500px]:flex md:block gap-2 underline decoration-[0.5px] underline-offset-4 font-light text-white text-xl space-y-px min-[500px]:space-y-0 md:space-y-6 xl:space-y-3">
        <a
          href="https://x.com/aya_avatar48"
          target="blank"
          className="flex-center-y justify-center xl:justify-end size-9.75 md:size-12.5 xl:h-auto xl:w-full rounded-full bg-white/10 xl:bg-transparent max-xl:backdrop-blur-md"
        >
          <div className="flex-center-y gap-6">
            <span className="hidden xl:flex">https://x.com/aya_avatar48</span>
            <img src={"/assets/x-icon.png"} alt="X icon" className="size-4 md:size-6" />
          </div>
        </a>
        <div className="hidden xl:flex h-[0.5px] bg-white/50" />
        <a
          href="https://t.me/Avatar48_Official"
          target="blank"
          className="flex-center-y justify-center xl:justify-end size-9.75 md:size-12.5 xl:h-auto xl:w-full rounded-full bg-white/10 xl:bg-transparent max-xl:backdrop-blur-md"
        >
          <div className="flex-center-y gap-6">
            <span className="hidden xl:flex">https://t.me/Avatar48_Official</span>
            <img
              src={"/assets/telegram-icon.png"}
              alt="Telegram icon"
              className="size-4 md:size-6"
            />
          </div>
        </a>
      </div>
      <div
        className="sticky bottom-0 min-[500px]:hidden flex-center size-9.5 rounded-full bg-white/10 xl:bg-transparent backdrop-blur-md text-white"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        {isOpenMenu ? <X size={16} /> : <Menu size={16} />}
      </div>
      {isOpenMenu ? (
        <div className="fixed bottom-14 right-2.5 min-[500px]:hidden min-w-32 min-h-[135px] rounded-lg bg-white/20 backdrop-blur-md text-white px-2">
          <div
            className="flex-center-y justify-end gap-1 uppercase text-right text-sm h-7 cursor-pointer"
            onClick={toggleLangBox}
          >
            {languages.find((item) => item.value === locale)?.label}
            <ChevronDown size={16} strokeWidth={3} />
          </div>
          <div
            className={cn("relative transition-all overflow-hidden h-0", {
              "h-21": isOpenLangBox,
            })}
          >
            <div className="absolute bottom-0 right-2.5">
              {languages
                .filter((item) => item.value !== locale)
                .map((item) => {
                  return (
                    <div
                      className="flex-center-y justify-end gap-1 uppercase text-right text-sm h-7"
                      key={item.value}
                    >
                      <button
                        key={item.value}
                        className={cn("uppercase", {
                          "text-avatar-primary": locale === item.value,
                        })}
                        disabled={isPending}
                        onClick={() => onSelectChange(item.value)}
                      >
                        {item.label}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="h-[0.5px] bg-white/50" />
          <div className="flex-center-y justify-end gap-1 uppercase text-right text-sm h-7 cursor-pointer">
            <Link href={"/term-of-use"} className="w-full">
              {t("term_of_use")}
            </Link>
          </div>
          <div className="flex-center-y justify-end gap-1 uppercase text-right text-sm h-7 cursor-pointer">
            <Link href={"/privacy-policy"} className="w-full">
              {t("privacy_policy")}
            </Link>
          </div>
          <div className="h-[0.5px] bg-white/50" />
          <div className="flex-center-y justify-end gap-1 uppercase text-right text-sm h-7 cursor-pointer">
            <a
              href="https://x.com/aya_avatar48"
              className="w-full flex-center-y justify-end gap-1"
              target="blank"
            >
              X
            </a>
            <ArrowUpRight size={16} strokeWidth={3} />
          </div>
          <div className="flex-center-y justify-end gap-1 uppercase text-right text-sm h-7 cursor-pointer">
            <a
              href="https://t.me/Avatar48_Official"
              className="w-full flex-center-y justify-end gap-1"
              target="blank"
            >
              telegram
            </a>
            <ArrowUpRight size={16} strokeWidth={3} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
