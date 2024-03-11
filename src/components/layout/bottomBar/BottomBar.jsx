import { useState } from "react";
import { AppBar, Button, Frame, Toolbar } from "react95";
import StartMenu from "./components/StartMenu";
import { TimeDisplay } from "./components/TimeDisplay";
import { useCurrentTimeHook } from "@/utils/hook/useCurrentTimeHook";
import { useStartMenuStore } from "@/utils/zustand/useStartMenuStore";
import styled from "styled-components";
import TaskBtn from "./components/TaskBtn";

export default function BottomBar() {
  const { time, date } = useCurrentTimeHook(); // 현재 시간 리턴하는 커스텀 훅
  const { isMenuOpen, onClickStartBtn } = useStartMenuStore(); // 상태 공유위한 zustand 함수

  return (
    <AppBar style={AppBarStyle}>
      <Toolbar style={ToolBarStyle}>
        <Button onClick={onClickStartBtn}>🐍Start</Button>
        <TaskContainer>
          <TaskBtn />
        </TaskContainer>
        <TimeDisplay time={time} date={date} />
      </Toolbar>
      {isMenuOpen && <StartMenu onClickStartBtn={onClickStartBtn} />}
    </AppBar>
  );
}

const AppBarStyle = {
  bottom: "0",
  top: "auto",
  height: "50px",
};

const ToolBarStyle = {
  justifyContent: "space-between",
  alignItems: "center",
};

const TaskContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;
// react95의 버튼태그 사용시 에러났음
// styled-component에서 에러남
// 이 에러는 결국 버전 다운그레이드 함으러써 해결

// onClickStartBtn 굳이 하위 컴포넌트에서 다시 임포트 할 필요없으므로
// prop으로 내려줌
