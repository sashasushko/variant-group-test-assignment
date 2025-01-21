import React from "react";
import { Link } from "@tanstack/react-router";
import { Progress } from "@/features/progress";
import Home from "./assets/home.svg?react";

import styles from "./AppHeader.module.css";

export const AppHeader: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.logo} to="/">
        <img src="/logo.svg" alt="Alt+Shift Logo" width={179} height={48} />
      </Link>
      <Progress variant="horizontal" />
      <Link className={styles.homeIcon} to="/">
        <Home width={20} height={20} />
        <span className="sr-only">Go to homepage</span>
      </Link>
    </header>
  );
};
