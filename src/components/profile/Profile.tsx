"use client";
import React from "react";
import AboutMe, { IAboutMeProps } from "./AboutMe";
import WorkHistory from "./WorkHistory";
import * as config from "../../config/profile";
import { ITimeline } from "../common/Timeline";
import Social, { ISocialItem } from "./Social";

export interface IProfileProps {
  aboutMe: IAboutMeProps;
  workHistories: ITimeline[];
  socialNetworks: ISocialItem[];
}

const Profile = () => {
  return (
    <div className="flex flex-col flex-nowrap gap-16">
      <AboutMe {...config.PROFILE.aboutMe} />
      <WorkHistory workHistories={config.PROFILE.workHistories} />
      <Social items={config.PROFILE.socialNetworks} />
    </div>
  );
};

export default Profile;
