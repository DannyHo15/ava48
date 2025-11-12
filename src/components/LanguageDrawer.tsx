"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LanguageEnum } from "@/lib/types";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useParams } from "next/navigation";
import { useTransition } from "react";

interface Props {
  className?: string;
}
const LanguageDrawer = (props: Props) => {
  const { className } = props;
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;
  const [isPending, startTransition] = useTransition();

  function onSelectChange(value: LanguageEnum) {
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      replace({ pathname, params }, { locale: value });
    });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="rounded"
          size={"small"}
          className={clsx("flex-center gap-1 uppercase bg-avatar-primary text-white text-base sm:text-xl", className)}
        >
          {locale}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-30 text-white bg-white/10 backdrop-blur-md p-2">
        {[
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
        ].map((item) => {
          return (
            <button
              key={item.value}
              className={clsx(
                locale === item.value ? "text-primary" : "",
                "px-2 py-2"
              )}
              disabled={isPending}
              onClick={() => onSelectChange(item.value)}
            >
              {item.label}
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};
export default LanguageDrawer;
