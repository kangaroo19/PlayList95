import { Frame } from "react95";

export default function TaskBtn() {
  return (
    <Frame variant="field" style={FrameStyle}>
      Welcome
    </Frame>
  );
}

const FrameStyle = {
  width: "300px",
  padding: "0.5vw",
  height: "100%",
  display: "flex",
  alignItems: "center",
};
