import React from "react";
import { Link } from "@tanstack/react-router";
import { Progress } from "@/features/progress";
import Home from "./assets/home.svg?react";

import styles from "./AppHeader.module.css";

export const AppHeader: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.logo} to="/">
        <picture className={styles.logoPic}>
          <source srcSet="/logo-lg.svg" media="(min-width: 480px)" />
          <img src="/logo.svg" alt="Alt+Shift Logo" />
        </picture>
      </Link>
      <Progress variant="horizontal" />
      <Link className={styles.homeIcon} to="/">
        <Home width={20} height={20} />
        <span className="sr-only">Go to homepage</span>
      </Link>
    </header>
  );
};
