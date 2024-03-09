import { useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Separator, Toolbar } from "react95";
import Image from "next/image";
import nekiImg from "../../../../asset/images/네키.png";

export default function BottomBar() {
  const [open, setOpen] = useState(false);
  const onClickStartBtn = () => {
    setOpen((prev) => !prev);
  };
  return (
    <AppBar style={AppBarStyle}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Button onClick={onClickStartBtn}>Start</Button>
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
              <span>
                <Image src={nekiImg} width={25} height={25} alt="네키" />
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

// react95의 버튼태그 사용시 에러났음
// styled-component에서 에러남
// 이 에러는 결국 버전 다운그레이드 함으러써 해결
