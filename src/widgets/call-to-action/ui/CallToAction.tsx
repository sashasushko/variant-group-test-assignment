import React from "react";
import { Link } from "@tanstack/react-router";
import { useCoverLetterData } from "@/entities/store";
import { GOAL_LIMIT } from "@/shared/lib/const";
import { Button } from "@/shared/ui";

import styles from "./CallToAction.module.css";
import { Progress } from "@/features/progress";

export const CallToAction: React.FC = () => {
  const coverLetters = useCoverLetterData();

  return coverLetters.length < GOAL_LIMIT ? (
    <section className={styles.container}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Hit your goal</h2>
        <p className={styles.lead}>
          Generate and send out couple more job applications today to get hired
          faster
        </p>
        <Link className={styles.action} to="/generate">
          <Button as="span" icon="plus">
            Create New
          </Button>
        </Link>
        <Progress className={styles.indicator} variant="vertical" />
      </div>
    </section>
  ) : null;
};
