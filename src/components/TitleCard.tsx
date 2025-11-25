import clsx from "clsx";

const TitleCard = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={clsx(
        className,
        "relative text-2xl md:text-7xl mobile:!text-2xl py-4 px-6 w-fit rounded-sm font-normal text-primary uppercase text-center bg-gradient-title",
      )}
      {...rest}
    >
      <svg
        width="21"
        height="26"
        viewBox="0 0 21 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4.5 mobile:h-4.5 w-auto md:h-auto text-primary absolute top-0 left-0"
      >
        <path
          d="M2 26V10C2 5.58172 5.58172 2 10 2H20.3934"
          stroke="#00D0F6"
          strokeWidth="3"
        />
      </svg>
      <svg
        width="21"
        height="26"
        viewBox="0 0 21 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4.5 mobile:h-4.5 w-auto md:h-auto text-primary absolute top-0 right-0 scale-x-[-1]"
      >
        <path
          d="M2 26V10C2 5.58172 5.58172 2 10 2H20.3934"
          stroke="#00D0F6"
          strokeWidth="3"
        />
      </svg>
      <svg
        width="21"
        height="26"
        viewBox="0 0 21 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4.5 mobile:h-4.5 w-auto md:h-auto text-primary absolute bottom-0 right-0 scale-x-[1] rotate-180"
      >
        <path
          d="M2 26V10C2 5.58172 5.58172 2 10 2H20.3934"
          stroke="#00D0F6"
          strokeWidth="3"
        />
      </svg>
      <svg
        width="21"
        height="26"
        viewBox="0 0 21 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4.5 mobile:h-4.5 w-auto md:h-auto text-primary absolute bottom-0 left-0  scale-x-[-1] rotate-180"
      >
        <path
          d="M2 26V10C2 5.58172 5.58172 2 10 2H20.3934"
          stroke="#00D0F6"
          strokeWidth="3"
        />
      </svg>
      {children}
    </div>
  );
};
export default TitleCard;
