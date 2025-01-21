import { useMemo } from "react";
import clsx from "clsx";

import styles from "./Indicator.module.css";

export type Variant = "vertical" | "horizontal";

interface ProgressIndicatorProps {
  className?: string;
  current: number;
  limit: number;
  variant?: Variant;
}

export const Indicator = ({
  className,
  current,
  limit,
  variant = "horizontal",
}: ProgressIndicatorProps) => {
  const indicator = useMemo(() => {
    return Array.from({ length: limit }, (_, i) => (
      <span
        key={i}
        className={clsx(
          styles.indicatorItem,
          i < current && styles.indicatorItemActive,
        )}
      ></span>
    ));
  }, [current, limit]);

  switch (variant) {
    case "horizontal":
      return (
        <div className={clsx(styles.element, styles.horizontal, className)}>
          {current}/{limit} applications generated
          <span className={styles.indicator}>{indicator}</span>
        </div>
      );
    case "vertical":
      return (
        <div className={clsx(styles.element, styles.vertical, className)}>
          <span className={styles.indicator}>{indicator}</span>
          {current} out of {limit}
        </div>
      );
    default:
      return null;
  }
};
