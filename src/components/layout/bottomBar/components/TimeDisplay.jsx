import { formatDate } from "@/utils/query/useCallCurrentTimeQuery";
import { Button, Frame, Tooltip } from "react95";

export function TimeDisplay({ time, date }) {
  return (
    <Tooltip text={date} enterDelay={100} leaveDelay={500}>
      <Frame variant="well" style={{ padding: "0.3rem 0.25rem", height: "100%", width: "100%" }}>
        {time}
      </Frame>
    </Tooltip>
  );
}
