import React from "react";

interface ButtonPanelItemProps {
  callBackFunction: Function;
  children: React.ReactNode;
  isActive: boolean;
  value?: string;
}

function ButtonPanelItem({
  callBackFunction,
  children,
  isActive,
  value = "",
}: ButtonPanelItemProps) {
  const activeStyle = isActive ? "bg-citytile-bg" : "";

  return (
    <button
      type="button"
      className={`p-1 lg:p-3 border rounded-md text-base lg:text-xl font-bold shadow-xl min-w-[3rem] ${activeStyle}`}
      key={value}
      onClick={() => callBackFunction(value)}
    >
      {children}
    </button>
  );
}

export default ButtonPanelItem;
