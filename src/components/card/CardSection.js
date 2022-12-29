import React from "react";
import { linkArrow } from "./Icons";
import Card from "./Card";
import FeaturedCard from "./FeaturedCard";

function CardSection() {
  const cardData = [
    {
      img: {
        src: "https://monoassets.com/f/118499/540x380/1298b7c253/api-response-frame.png",
        styles: CardStyles.featuredRight,
      },
      txt: {
        text: "Powerful APIs and easy-to-use resources",
        styles: CardStyles.cardsTxt,
      },
      icon: "https://monoassets.com/f/118499/x/10923dd075/icon_powerful-apis-1.svg",
      link: {
        txt: "Read our API Docs",
        ref: "https://docs.mono.co/docs",
        icon: linkArrow,
        styles: CardStyles.cardsLink,
      },
      styles: CardStyles.featuredCard,
      leftCol: CardStyles.leftCol,
    },
    {
      img: "https://monoassets.com/f/118499/x/04b09ee182/icon_plug-and-play-sdks.svg",
      txt: {
        text: "Plug-and-Play SDKs",
        styles: CardStyles.cardsTxt,
      },
      link: {
        txt: "Explore our SDKs",
        ref: "https://docs.mono.co/docs",
        icon: linkArrow,
        styles: CardStyles.cardsLink,
      },
      styles: CardStyles.cardsContainer,
    },
    {
      img: "https://monoassets.com/f/118499/x/15f1b3037b/icon_beautiful-ux.svg",
      txt: {
        text: "Beautiful seamless UX",
        styles: CardStyles.cardsTxt,
      },
      link: {
        txt: "See Demo",
        ref: "https://mono.co/demo",
        icon: linkArrow,
        styles: CardStyles.cardsLink,
      },
      styles: CardStyles.cardsContainer,
    },
    {
      img: "https://monoassets.com/f/118499/x/5d33f99a17/icon_slack.svg",
      txt: {
        text: "Always-on support",
        styles: CardStyles.cardsTxt,
      },
      link: {
        txt: "Join us on Slack",
        ref: "https://join.slack.com/t/devwithmono/shared_invite/zt-gvkqczzk-Ldt4FQpHtOL7FFTqh4Ux6A",
        icon: linkArrow,
        styles: CardStyles.cardsLink,
      },
      styles: CardStyles.cardsContainer,
    },
  ];
  return (
    <div style={CardStyles.started}>
      <FeaturedCard data={cardData[0]} />
      <div style={CardStyles.startedCards}>
        {cardData.slice(1).map((x, i) => {
          return <Card data={x} key={i} />;
        })}
      </div>
    </div>
  );
}

const CardStyles = {
  started: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    backgroundImage:
      "url(https://monoassets.com/f/118499/2161x1907/60ffc90276/getting-started-bg.jpg)",
    padding: "18px",
  },
  featuredCard: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100%",
    height: "240px",
    borderRadius: "12px",
    padding: "12px 10px",
  },
  featuredRight: {
    width: 380,
    marginTop: 45,
    marginRight: 36
  },
  leftCol: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    padding: "18px 10px"
  },
  startedCards: {
    display: "flex",
    justifyContent: "center",
    gap: "6px",
    width: "100%",
    padding: "12px 10px",
  },
  cardsContainer: {
    backgroundColor: "#fff",
    width: "33.33%",
    height: "240px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    justifyContent: "center",
    padding: "18px 26px",
  },
  cardsTxt: {
    fontWeight: 900,
    fontSize: "x-large",
    color: "black",
  },
  cardsLink: {
    color: "blue",
    fontWeight: 600,
    fontSize: "medium",
  },
};

export default CardSection;
