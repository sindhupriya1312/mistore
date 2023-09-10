import React from "react";
import HotItemCard from "./HotItemCard";

const HotAccessories = ({ music, musicCover }) => {
  return (
    <div className="hotAccessories">
      <div>
        <img src={musicCover} alt="Cover" />
        {console.log(musicCover)}
      </div>
      <div>
        {music.map((item, index) => {
          console.log(item.image);
          return (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HotAccessories;
