import BottomBar from "./bottomBar/BottomBar";
import styles from "./Layout.module.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../node_modules/react95/dist/fonts/ms_sans_serif.woff2",
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <>
      <div className={`${styles.boxContainer} ${myFont.className}`}>
        {children}
        <BottomBar />
      </div>
    </>
  );
}
