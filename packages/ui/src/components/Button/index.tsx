import { FC } from "react";
import { IButtonProps } from "./types";

export const Button: FC<IButtonProps> = ({ children, ...props }) => <button className="p-2 bg-blue-600 text-white rounded" {...props}>{children}</button>;
