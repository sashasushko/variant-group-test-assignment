import React from "react";
import { Link } from "@tanstack/react-router";
import Button from "../components/Button";
import CoverLetterList from "../components/CoverLetterList";

import Plus from "../assets/plus.svg?react";

import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <main>
      <div className={styles.header}>
        <h1 className={styles.title}>Applications</h1>
        <Link to="/generator">
          <Button as="span" size="sm" icon={<Plus width={20} height={20} />}>
            Create New
          </Button>
        </Link>
      </div>
      <hr className={styles.separator} />
      <CoverLetterList />
    </main>
  );
};

export default HomePage;
