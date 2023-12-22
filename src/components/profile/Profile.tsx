import React from "react";
import WorkHistory from "./workHistory";
import AboutMe from "./AboutMe";

const Profile = () => {
  return (
    <div className="flex flex-col flex-nowrap">
      <AboutMe />
      <div className="flex flex-row">
        <WorkHistory />
      </div>
    </div>
  );
};

export default Profile;
