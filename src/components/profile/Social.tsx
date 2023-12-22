import React from "react";

interface ISocialItem {
  logoSrc: string;
  title: string;
}

export interface ISocialProps {
  items: [];
}

const Social = ({ items = [] }: ISocialProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row">
        <h2>Follow me</h2>
      </div>
      <div className="flex flex-row">
        {items.map((item, index) => (
          <div key={index}>item.title</div>
        ))}
      </div>
    </div>
  );
};

export default Social;
