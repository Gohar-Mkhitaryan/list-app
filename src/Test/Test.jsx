import styles from "./test.module.css";

const Test = (props) => {
  return (
    <div className={styles.custom}>
      <div>This is test component {props.number}</div>
      <span>{props.text}</span>
      <span>{props.number}</span>
    </div>
  );
};

export default Test;
