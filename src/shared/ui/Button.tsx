import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  className?: string;
  size?: "sm" | "md";
  variant?: "default" | "outline";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  as: Component = "button",
  className,
  icon = null,
  size = "md",
  variant = "default",
  children = null,
  ...props
}) => {
  return (
    <Component
      className={clsx(styles.element, styles[size], styles[variant], className)}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span>{children}</span>}
    </Component>
  );
};
