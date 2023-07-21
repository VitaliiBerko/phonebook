import {ReactNode} from 'react'
import { FC } from "react";
import css from "./Button.module.css";

interface IProps {
  children: ReactNode;
  variant: "delBtn" | "addBtn" | "logOutBtn";
  type: "button" | "submit";
  onClick?(): void;
  
}

export const Button: FC<IProps> = ({ children, variant, type, onClick}) => {
  return (
    <button  onClick={onClick} type={type} className={css[variant]}>
      {children}
    </button>
  );
};
