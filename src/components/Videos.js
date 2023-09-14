import React from "react";
import VideoCard from "./VideoCard";
import "../styles/Videos.css";

const Videos = ({ videos }) => {
  return (
    <div className="Videos">
      {videos.map((item, index) => {
        return (
          <VideoCard
            image={item.image}
            key={index}
            index={index}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default Videos;
