import { useMemo } from "react";
import clsx from "clsx";
import Success from "@/shared/assets/success.svg?react";

import styles from "./Indicator.module.css";

export type Variant = "vertical" | "horizontal";

interface ProgressIndicatorProps {
  className?: string;
  current: number;
  goal: number;
  variant?: Variant;
}

export const Indicator = ({
  className,
  current,
  goal,
  variant = "horizontal",
}: ProgressIndicatorProps) => {
  const indicator = useMemo(() => {
    return Array.from({ length: goal }, (_, i) => (
      <span
        key={i}
        className={clsx(
          styles.indicatorItem,
          i < current && styles.indicatorItemActive,
        )}
      ></span>
    ));
  }, [current, goal]);

  switch (variant) {
    case "horizontal":
      return (
        <div className={clsx(styles.element, styles.horizontal, className)}>
          {current}/{goal} applications generated
          {current >= goal ? (
            <Success width={28} height={28} />
          ) : (
            <span className={styles.indicator}>{indicator}</span>
          )}
        </div>
      );
    case "vertical":
      return (
        <div className={clsx(styles.element, styles.vertical, className)}>
          <span className={styles.indicator}>{indicator}</span>
          {current} out of {goal}
        </div>
      );
    default:
      return null;
  }
};
