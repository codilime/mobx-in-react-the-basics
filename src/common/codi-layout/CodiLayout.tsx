import React from "react";

import styles from "./codi-layout.module.scss";

export const CodiLayout: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.CodiLayout}>
      <img
        src="/corner-tr.png"
        alt=""
        style={{ position: "absolute", right: 0, width: "30vw", zIndex: -1 }}
      />
      <img
        src="/corner-bl.png"
        alt=""
        style={{ position: "absolute", bottom: 0, width: "35vw", zIndex: -1 }}
      />
      {children}
    </div>
  );
};
