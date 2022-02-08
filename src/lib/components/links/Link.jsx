import React from "react";
import styles from "./Link.module.css";

const Link = ({ text, to }) => {
  return (
    <>
      <a href={to} className={styles.link}>
        {" "}
        {text}
      </a>
    </>
  );
};

export default Link;
