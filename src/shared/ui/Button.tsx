import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  as: Component = "button",
  icon = null,
  size = "md",
  children = null,
  ...props
}) => {
  return (
    <Component className={clsx(styles.element, styles[size])} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span>{children}</span>}
    </Component>
  );
};
