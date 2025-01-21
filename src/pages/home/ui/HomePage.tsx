import React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/shared/ui/Button";

import styles from "./HomePage.module.css";
import { LetterList } from "@/features/letter-list";

export const HomePage: React.FC = () => {
  return (
    <main>
      <div className={styles.header}>
        <h1 className={styles.title}>Applications</h1>
        <Link to="/generate">
          <Button as="span" size="sm" icon="plus">
            Create<span className="hide-on-phone"> New</span>
          </Button>
        </Link>
      </div>
      <hr className={styles.separator} />
      <LetterList />
    </main>
  );
};
