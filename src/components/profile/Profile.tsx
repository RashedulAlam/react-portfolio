'use client'
import React from "react";
import AboutMe, { IAboutMeProps } from "./AboutMe";
import WorkHistory from "./WorkHistory";
import * as config from "../../config/profile";
import { ITimeline } from "../common/Timeline";
import Location from "./Location";

export interface IProfileProps {
  aboutMe: IAboutMeProps;
  workHistories: ITimeline[];
}

const Profile = ({ aboutMe, workHistories }: IProfileProps) => {
  return (
    <div className="flex flex-col flex-nowrap gap-16">
      <AboutMe {...config.PROFILE.aboutMe} />
      {/* <AboutMe {...aboutMe} /> */}
      <div className="flex flex-row">
        <WorkHistory workHistories={config.PROFILE.workHistories} />
      </div>
    </div>
  );
};

export default Profile;
