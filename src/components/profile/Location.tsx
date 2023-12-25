"use client";
import React from "react";

export interface ILocationProps {
  heroEmail: string;
}

const Location = ({ heroEmail }: ILocationProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="block tracking-wide font-bold mb-2 text-sm">
          Send me an{" "}
          <a
            href={heroEmail}
            className="hover:underline hover:underline-offset-2 text-indigo-600"
          >
            email
          </a>{" "}
          instead ?
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.7353698269211!2d22.287513556760842!3d60.46268861235206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76f2a7602595%3A0xa1751f227c29ff05!2sStudent%20Village%20Foundation%20of%20Turku%20(TYS)!5e0!3m2!1sen!2sfi!4v1703467815286!5m2!1sen!2sfi"
        className="w-auto h-[400px] border-[0px]"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <small className="text-red-600 text-xs font-semibold">
        Note: This is not actual location. Housing is provided by TYS. Due to
        privacy concern actual location is not provided.
      </small>
    </div>
  );
};

export default Location;
