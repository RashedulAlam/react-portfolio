import React from "react";

const Timeline = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-3xl">Work & Career</h1>
      <div className="flex flex-col">
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2020
            </time>
            <div className="text-xl font-bold text-slate-900">
              Senior Software Engineer
            </div>
          </div>
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
          <div className="text-slate-500">Full Time</div>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2020
            </time>
            <div className="text-xl font-bold text-slate-900">
              Software Engineer
            </div>
          </div>
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              May, 2020
            </time>
            <div className="text-xl font-bold text-slate-900">
              Intern Software Engineer
            </div>
          </div>
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
