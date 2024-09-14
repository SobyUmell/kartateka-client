import React from "react";
import styles from "./style.module.scss";

export const Button = ({ children, ...props }) => {
  return (
    <button styles={styles.button} {...props}>
      {children}
    </button>
  );
};
