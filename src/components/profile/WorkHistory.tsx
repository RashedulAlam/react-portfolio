import React from "react";
import Timeline, { ITimeline } from "../common/Timeline";

export interface IWorkHistoryProps {
  workHistories: ITimeline[];
}

const WorkHistory = ({ workHistories }: IWorkHistoryProps) => {
  return <Timeline timelines={workHistories} />;
};

export default WorkHistory;
