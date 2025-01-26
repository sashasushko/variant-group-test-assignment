import { useState, useCallback, memo } from "react";
import clsx from "clsx";
import Copy from "../assets/copy.svg?react";
import Check from "../assets/check.svg?react";
import { copyToClipboard } from "../lib/copyToClipboard";

import styles from "./CopyToClipboardButton.module.css";

interface CopyToClipboardButtonProps {
  className?: string;
  textToCopy: string;
}

export const CopyToClipboardButton = memo(
  ({ className, textToCopy }: CopyToClipboardButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(() => {
      void copyToClipboard(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }, [textToCopy]);

    return (
      <button
        className={clsx(styles.element, className)}
        type="button"
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <span>Copied</span>
            <Check width={20} height={20} />
          </>
        ) : (
          <>
            <span>Copy to clipboard</span>
            <Copy width={20} height={20} />
          </>
        )}
      </button>
    );
  },
);

CopyToClipboardButton.displayName = "CopyToClipboardButton";
