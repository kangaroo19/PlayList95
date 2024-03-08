import { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from "react95";

export default function BottomBar() {
  const [open, setOpen] = useState(false);
  const onClickStartBtn = () => {
    setOpen((prev) => !prev);
  };
  return (
    <AppBar style={AppBarStyle}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Button onClick={onClickStartBtn}>
          {/* <img src={logoIMG} alt="react95 logo" style={{ height: "20px", marginRight: 4 }} /> */}
          Start
        </Button>
        {open && (
          <MenuList
            style={{
              position: "absolute",
              left: "0",
              bottom: "100%",
            }}
            onClick={() => setOpen(false)}
          >
            <MenuListItem>
              <span role="img" aria-label="👨‍💻">
                👨‍💻
              </span>
              Github
            </MenuListItem>
            <MenuListItem>
              <span role="img" aria-label="📁">
                📁
              </span>
              My account
            </MenuListItem>
            <Separator />
            <MenuListItem disabled>
              <span role="img" aria-label="🔙">
                🔙
              </span>
              Logout
            </MenuListItem>
          </MenuList>
        )}
      </Toolbar>
    </AppBar>
  );
}

const AppBarStyle = {
  bottom: "0",
  top: "auto",
};
