import React from "react";
import { useCoverLetterData } from "@/entities/store";
import { ProgressIndicator, type Variant } from "@/shared/ui";
import { GOAL_LIMIT } from "@/shared/lib/const";

interface ProgressProps {
  className?: string;
  variant?: Variant;
}

export const Progress: React.FC<ProgressProps> = ({ className, variant }) => {
  const coverLetters = useCoverLetterData();

  return (
    <ProgressIndicator
      className={className}
      current={coverLetters.length}
      limit={GOAL_LIMIT}
      variant={variant}
    />
  );
};
