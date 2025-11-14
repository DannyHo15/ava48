import { SectionWrapper } from "../SectionWrapper";

const WrapperSectionPlayAndEarn = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SectionWrapper>
      <div className="hidden md:block lg:hidden bg-cover bg-center fixed inset-0 bg-[url(/assets/bg-earn-aya-tablet-light.png)] dark:bg-[url(/assets/bg-earn-aya-tablet-dark.png)]" />
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center mix-blend-plus-lighter opacity-70" />
      <div className="fixed hidden md:hidden h-full w-300 top-0 left-0 cs-radial-md" />
      <div className="size-full relative flex flex-col items-center justify-between">
        {children}
      </div>
    </SectionWrapper>
  );
};

export default WrapperSectionPlayAndEarn;
