import { PropsWithChildren } from "react";

function Title({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">{children}</h1>
  );
}

export default Title;