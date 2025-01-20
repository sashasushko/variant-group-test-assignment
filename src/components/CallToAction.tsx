import React from "react";
import { Link } from "@tanstack/react-router";
import ProgressIndicator from "./ProgressIndicator";
import Button from "./Button";

import Plus from "../assets/plus.svg?react";

import styles from "./CallToAction.module.css";
import { useCoverLetterData } from "../contexts/CoverLetterContext";
import { GOAL_LIMIT } from "../const";

const CallToAction: React.FC = () => {
  const coverLetters = useCoverLetterData();

  if (coverLetters.length >= GOAL_LIMIT) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Hit your goal</h2>
        <p className={styles.lead}>
          Generate and send out couple more job applications today to get hired
          faster
        </p>
        <Link className={styles.action} to="/generator">
          <Button as="span" icon={<Plus width={24} height={24} />}>
            Create New
          </Button>
        </Link>
        <ProgressIndicator
          className={styles.indicator}
          limit={GOAL_LIMIT}
          variant="vertical"
        />
      </div>
    </section>
  );
};

export default CallToAction;
