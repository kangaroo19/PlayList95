import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCurrentTime = () => {
  return axios.get("https://worldtimeapi.org/api/timezone/Asia/Seoul");
};

export const useCallCurrentTimeQuery = () => {
  return useQuery({
    queryKey: ["curTimeKey"],
    queryFn: fetchCurrentTime,
  });
};

export function formatDate(dateString) {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 시간을 12로 변경
  const formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + " " + ampm;
  return formattedTime;
}
