import React from "react";

interface ProgressIndicatorProps {
  total: number;
  current: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  total,
  current,
}) => {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium mb-2">
        Cover Letters Created: {current}/{total}
      </p>
    </div>
  );
};

export default ProgressIndicator;
