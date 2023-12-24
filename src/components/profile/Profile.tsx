"use client";
import React from "react";
import AboutMe, { IAboutMeProps } from "./AboutMe";
import WorkHistory from "./WorkHistory";
import { PROFILE } from "../../config/profile";
import { ITimeline } from "../common/Timeline";
import Social, { ISocialItem } from "./Social";

export interface IProfileProps {
  aboutMe: IAboutMeProps;
  workHistories: ITimeline[];
  socialNetworks: ISocialItem[];
  studyHistories: ITimeline[];
}

const Profile = () => {
  return (
    <div className="flex flex-col gap-16">
      <AboutMe {...PROFILE.aboutMe} />
      <div className="flex flex-col gap-5 justify-between sm:flex-col md:flex-row">
        <WorkHistory
          workHistories={PROFILE.workHistories}
          className="md:basis-1/2"
        />
        <WorkHistory
          workHistories={PROFILE.studyHistories}
          label="Study"
          className="md:basis-1/2"
        />
      </div>
      <Social items={PROFILE.socialNetworks} />
    </div>
  );
};

export default Profile;
