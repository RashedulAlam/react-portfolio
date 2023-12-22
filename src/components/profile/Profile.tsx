import React from "react";
import AboutMe from "./AboutMe";
import WorkHistory from "./WorkHistory";

const Profile = () => {
  return (
    <div className="flex flex-col flex-nowrap gap-16">
      <AboutMe />
      <div className="flex flex-row">
        <WorkHistory />
      </div>
    </div>
  );
};

export default Profile;
