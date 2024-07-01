import { PropsWithChildren } from "react";

type MyBtn = {
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
};

function Button(props: PropsWithChildren<MyBtn>) {
  return (
    <button
      type={props.type}
      className={`flex items-center justify-center gap-2 bg-primary text-white text-base font-bold rounded-md py-[10px] px-[24px] ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
