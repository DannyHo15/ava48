import { SectionWrapper } from "../SectionWrapper";

const WrapperSectionPlayAndEarn = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SectionWrapper>
      <div className="fixed inset-0 bg-[url(/assets/bg-base.png)] bg-cover bg-center opacity-70" />
      <div className="fixed hidden lg:block inset-0 cs-radial-lg-earn-connection opacity-80" />
      <div className="fixed hidden md:hidden h-full w-300 top-0 left-0 cs-radial-md-earn-connection" />
      <div className="fixed hidden md:block lg:hidden h-full w-300 bottom-0 left-0 cs-radial-md-earn-connection" />
      <div className="size-full relative flex flex-col items-center justify-between">
        {children}
      </div>
    </SectionWrapper>
  );
};

export default WrapperSectionPlayAndEarn;
