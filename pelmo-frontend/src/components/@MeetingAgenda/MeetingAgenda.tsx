import React from "react";
import URL from "url";
import { Speaker, Link } from "../../types";

interface MyProps {
  startTime: string;
  endTime: string;
  duration: string;
  title: string;
  speakers: Speaker[];
  links: Link[];
}

const MeetingAgenda: React.FC<MyProps> = () => {
  return <></>;
};

export default MeetingAgenda;
