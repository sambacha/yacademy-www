import * as React from "react";

import { Layout } from "../components";
import Hero from "../blocks/hero";
import Cards from "../blocks/cards";
import { Icon } from "reflexjs";

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        heading="Build something amazing"
        text="Seeding a better Web3"
        image={{
          src: "/images/crayon-982.png",
          alt: "Hero image",
        }}
        buttons={
          <a variant="button.secondary.lg" href="#" mt="4">
            Get started <Icon name="arrow-right" size="6" ml="2" />
          </a>
        }
      />
      <Cards
        subheading="DeFi and Smart Contracts"
        heading="Learn from the best"
        text="Curated material from industry leading professionals"
        cards={[
          {
            heading: "Engineering Guidance",
            text:
              "From leading Staff Engineers at the most well-known projects.",
            image: {
              src: "/images/crayon-welcome.png",
              alt: "Image",
            },
            link: (
              <a display="inline-flex" alignItems="center" variant="text.link" href="#">
                Learn more <Icon name="arrow-right" size="4" ml="2" />
              </a>
            ),
          },
          {
            heading: "Protocol Design",
            text:
              "Vestibulum ante ipsum primis in faucibus orci luctus et primis in faucibus ultrices.",
            image: {
              src: "/images/crayon-list-is-empty.png",
              alt: "Image",
            },
            link: (
              <a display="inline-flex" alignItems="center" variant="text.link" href="#">
                Learn more <Icon name="arrow-right" size="4" ml="2" />
              </a>
            ),
          },
          {
            heading: "Ecosystem Support",
            text:
              "More than just development and coding, join an extensive networking circle",
            image: {
              src: "/images/crayon-come-back-later.png",
              alt: "Image",
            },
            link: (
              <a display="inline-flex" alignItems="center" variant="text.link" href="#">
                Learn more <Icon name="arrow-right" size="4" ml="2" />
              </a>
            ),
          },
        ]}
      />
    </Layout>
  );
}
