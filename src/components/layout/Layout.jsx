import BottomBar from "./bottomBar/BottomBar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.boxContainer}>
      {children}
      <BottomBar />
    </div>
  );
}
