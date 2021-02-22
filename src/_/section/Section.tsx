import styles from "./section.module.scss";

export const Section: React.FunctionComponent = ({ children }) => {
  return (
    <section className={styles.Section}>
      <div>{children}</div>
    </section>
  );
};
