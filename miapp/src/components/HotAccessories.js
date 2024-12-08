import React from "react";
import HotItemCard from "./HotItemCard";
import "../styles/hotAccessories.css";

const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div className="hotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifeStyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
        />
        {console.log(musicCover)}
      </div>
      <div>
        {music &&
          music.map((item, index) => {
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

        {smartDevice &&
          smartDevice.map((item, index) => {
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

        {home &&
          home.map((item, index) => {
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

        {lifeStyle &&
          lifeStyle.map((item, index) => {
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

        {mobileAccessories &&
          mobileAccessories.map((item, index) => {
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
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
};

export default HotAccessories;
