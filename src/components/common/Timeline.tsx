import React from "react";

export interface ITimeline {
  title: string;
  period: string;
  company: {
    name: string;
    website: string;
    location: string;
    type: string;
    contract: string;
  };
}

export interface ITimelineProps {
  timelines: ITimeline[];
  label?: string;
  className?: string;
}

const Timeline = ({
  timelines = [],
  label = "Work & Career",
  className = "",
}: ITimelineProps) => {
  return (
    <section className={`flex flex-col ${className}`}>
      <h1 className="text-3xl">{label}</h1>
      <div className="flex flex-col">
        {timelines.map((timeline, index) => (
          <div
            className="relative pl-8 sm:pl-52 py-6 group"
            key={`timeline-entry-${index}`}
          >
            <div
              className="
            flex flex-col sm:flex-row items-start mb-1
             group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[10.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3
             after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[10.5rem] after:-translate-x-1/2 after:translate-y-1.5"
            >
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3 sm:mb-0 text-white bg-indigo-600 rounded-full">
                {timeline.period}
              </time>
              <div className="text-xl font-bold text-slate-900">
                {timeline.title}
              </div>
            </div>
            <div className="text-slate-500">
              <a
                href={timeline.company.website}
                className="hover:underline hover:underline-offset-2"
              >
                {timeline.company.name}
              </a>
              - {timeline.company.contract}
            </div>
            <div className="text-slate-500">
              {timeline.company.location} - {timeline.company.type}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
