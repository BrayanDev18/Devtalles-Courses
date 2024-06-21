import React from "react";
interface ButtonProps {
  to?: string;
  label: string;
  icon?: React.ReactElement;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

export const Button = ({
  label,
  to,
  icon,
  textColor,
  fullWidth,
  borderColor,
  backgroundColor,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-5 py-3 border text-[17px] leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-green-primary text-white border-green-primary"}
      rounded-full ${fullWidth ? "w-full" : ""}`}
    >
      {label}
      {icon}
    </button>
  );
};
