import { useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Separator, Toolbar } from "react95";
import StartMenu from "./components/StartMenu";
import { TimeDisplay } from "./components/TimeDisplay";
import { useCurrentTimeHook } from "@/utils/hook/useCurrentTimeHook";

export default function BottomBar() {
  const { time, date } = useCurrentTimeHook();
  const [open, setOpen] = useState(false);
  const onClickStartBtn = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppBar style={AppBarStyle}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Button onClick={onClickStartBtn}>Start</Button>
        {open && <StartMenu />}
        <TimeDisplay time={time} date={date} />
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
