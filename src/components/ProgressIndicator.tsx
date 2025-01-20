import React, { useMemo } from "react";
import clsx from "clsx";
import { useCoverLetterData } from "../contexts/CoverLetterContext";

import styles from "./ProgressIndicator.module.css";

interface ProgressIndicatorProps {
  className?: string;
  limit: number;
  variant?: "vertical" | "horizontal";
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  className,
  limit,
  variant = "horizontal",
}) => {
  const coverLetters = useCoverLetterData();

  const current = Math.min(coverLetters.length, limit);

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

export default ProgressIndicator;
