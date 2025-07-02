import clsx from "clsx";

const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={clsx("relative px-2 py-12 md:px-5 md:py-14 w-full", className)}
      {...rest}
    >
      <svg
        width="38"
        height="37"
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary absolute top-0 left-0"
      >
        <path
          d="M1.5 37V11C1.5 5.47715 5.97715 1 11.5 1H37.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <svg
        width="38"
        height="37"
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary absolute top-0 right-0 rotate-90"
      >
        <path
          d="M1.5 37V11C1.5 5.47715 5.97715 1 11.5 1H37.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <svg
        width="38"
        height="37"
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary absolute bottom-0 right-0 rotate-180"
      >
        <path
          d="M1.5 37V11C1.5 5.47715 5.97715 1 11.5 1H37.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <svg
        width="38"
        height="37"
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary absolute bottom-0 left-0 -rotate-90"
      >
        <path
          d="M1.5 37V11C1.5 5.47715 5.97715 1 11.5 1H37.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      {children}
    </div>
  );
};
export default Card;
