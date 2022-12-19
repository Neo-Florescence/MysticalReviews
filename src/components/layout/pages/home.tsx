import React, { FunctionComponent } from "react";

import { Section } from "@/components/layout/section";
import { Card, CardProps } from "@/components/Card";
import { CardSlider } from "@/components/card-slider";
import { Newsletter } from "@/components/Newsletter";
import { Title } from "@/components/Title";

export const Home: FunctionComponent<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <>
      <Section css={{ "@desktop": { display: "none" } }}>
        <Title>Publicações Mais Recentes</Title>
        <CardSlider cards={cards} />
      </Section>

      <Section css={{ "@desktop": { display: "none" } }}>
        <Title>Newsletter</Title>
        <Newsletter />
      </Section>

      <Section>
        <Title>Todas Publicações</Title>
        {cards.map((props, index) => (
          <Card key={index} css={{ img: { height: "450px" } }} {...props} />
        ))}
      </Section>
    </>
  );
};
