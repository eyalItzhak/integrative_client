import React from "react";
import ServiceListItem from "./ServiceListItem";

export default function ServicesList() {
  const DemoListServices = ["Transportation", "Food", "Tlv Oracle", "weather"];
  const Description = [
    "Find A scooter near you!",
    "yami yami",
    "Here you can ask everything you want about the city of Tel Aviv",
    "weather in tel aviv",
  ];
  const Image = [
    "https://png.pngtree.com/png-clipart/20200225/original/pngtree-scooter-icon-in-neon-style-png-image_5272567.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/49/13/91/1000_F_249139145_MSg4hx6ZSLy1uVWuYOKmDr5gNq0vsFd4.jpg",
    "https://img.freepik.com/premium-vector/old-wizard-esport-logo-illustration_224764-37.jpg?w=2000",
    "https://as1.ftcdn.net/v2/jpg/02/39/41/58/1000_F_239415805_8kNMhtYgXpiu0KOQLKke7WK6s7ciIJoG.jpg",
  ];
  return (
    <>
      {DemoListServices.map((service, index) => {
        return (
          <ServiceListItem
            key={service}
            service={service}
            description={Description[index]}
            image={Image[index]}
          />
        );
      })}
    </>
  );
}
