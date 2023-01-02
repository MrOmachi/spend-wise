import React from "react";
import { linkArrow } from "./Icons";
import Card from "./Card";
import FeaturedCard from "./FeaturedCard";

function CardSection() {
  const cardData = [
    {
      img: {
        src: "https://monoassets.com/f/118499/540x380/1298b7c253/api-response-frame.png",
      },
      txt: {
        text: "Powerful APIs and easy-to-use resources",
      },
      icon: "https://monoassets.com/f/118499/x/10923dd075/icon_powerful-apis-1.svg",
      link: {
        txt: "Read our API Docs",
        ref: "https://docs.mono.co/docs",
        icon: linkArrow,
      },
    },
    {
      img: "https://monoassets.com/f/118499/x/04b09ee182/icon_plug-and-play-sdks.svg",
      txt: {
        text: "Plug-and-Play SDKs",
      },
      link: {
        txt: "Explore our SDKs",
        ref: "https://docs.mono.co/docs",
        icon: linkArrow,
      },
    },
    {
      img: "https://monoassets.com/f/118499/x/15f1b3037b/icon_beautiful-ux.svg",
      txt: {
        text: "Beautiful seamless UX",
      },
      link: {
        txt: "See Demo",
        ref: "https://mono.co/demo",
        icon: linkArrow,
      },
    },
    {
      img: "https://monoassets.com/f/118499/x/5d33f99a17/icon_slack.svg",
      txt: {
        text: "Always-on support",
      },
      link: {
        txt: "Join us on Slack",
        ref: "https://join.slack.com/t/devwithmono/shared_invite/zt-gvkqczzk-Ldt4FQpHtOL7FFTqh4Ux6A",
        icon: linkArrow,
      },
    },
  ];

  return (
    <div className="started">
      <div className="started-contain">
        <FeaturedCard data={cardData[0]} />
        <div className="startedCards">
          {cardData.slice(1).map((x, i) => {
            return <Card data={x} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
