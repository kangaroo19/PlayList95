import { createGlobalStyle, ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import { MenuList, MenuListItem, Separator, styleReset } from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={original}>
        <Layout>dddd</Layout>
      </ThemeProvider>
    </>
  );
}
