import React, { memo, useCallback, useRef } from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

interface InputProps {
  as?: React.ElementType;
  className?: string;
  id: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean;
  type?: string;
  rows?: number;
  limit?: number;
  [key: string]: unknown;
}

export const Input = memo(
  ({
    as: Component = "input",
    className,
    id,
    label,
    value,
    onChange,
    required,
    type = "text",
    rows = 5,
    limit,
    ...rest
  }: InputProps) => {
    const touchedRef = useRef(false);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!touchedRef.current) {
          touchedRef.current = true;
        }
        onChange(e);
      },
      [onChange],
    );

    const isInvalid =
      (required && value.trim().length === 0 && touchedRef.current) ||
      (typeof limit === "number" && value.trim().length > limit);

    return (
      <div
        className={clsx(
          styles.container,
          isInvalid && styles.invalid,
          className,
        )}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <Component
          className={styles.element}
          id={id}
          name={id}
          value={value}
          onChange={handleChange}
          required={required}
          type={type}
          rows={Component === "textarea" ? rows : null}
          {...rest}
        />
        {typeof limit === "number" && (
          <p className={styles.info}>
            {value.length}/{limit}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
