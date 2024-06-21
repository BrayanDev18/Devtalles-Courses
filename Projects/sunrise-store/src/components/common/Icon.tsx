import React from "react";
import { IconName } from "boxicons";

interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
  animation?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = "24px", color = "", animation = "" }) => {
  return <i className={`bx ${name} ${animation}`} style={{ fontSize: size, color, cursor: 'pointer' }}></i>
};
