import React, { memo } from "react";
import clsx from "clsx";
import Plus from "../assets/plus.svg?react";
import Repeat from "../assets/repeat.svg?react";
import Loading from "../assets/loading.svg?react";

import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  className?: string;
  size?: "sm" | "md";
  variant?: "default" | "outline";
  icon?: "plus" | "repeat" | "loading";
}

const iconSizeMap = {
  sm: 20,
  md: 24,
};

const getIconByKey = (key?: "plus" | "repeat" | "loading", size = 16) => {
  switch (key) {
    case "plus":
      return <Plus width={size} height={size} />;
    case "repeat":
      return <Repeat width={size} height={size} />;
    case "loading":
      return <Loading width={size} height={size} />;
    default:
      return null;
  }
};

export const Button = memo(
  ({
    as: Component = "button",
    className,
    icon,
    size = "md",
    variant = "default",
    children = null,
    ...props
  }: ButtonProps) => {
    return (
      <Component
        className={clsx(
          styles.element,
          styles[size],
          styles[variant],
          className,
        )}
        {...props}
      >
        {icon && (
          <span className={styles.icon}>
            {getIconByKey(icon, iconSizeMap[size])}
          </span>
        )}
        {children && <span className={styles.label}>{children}</span>}
      </Component>
    );
  },
);

Button.displayName = "Button";
