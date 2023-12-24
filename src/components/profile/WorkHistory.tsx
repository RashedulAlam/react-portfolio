import React from "react";
import Timeline, { ITimeline } from "../common/Timeline";

export interface IWorkHistoryProps {
  workHistories: ITimeline[];
  label?: string;
  className?: string;
}

const WorkHistory = ({
  workHistories,
  label,
  className,
}: IWorkHistoryProps) => {
  return (
    <Timeline timelines={workHistories} label={label} className={className} />
  );
};

export default WorkHistory;
