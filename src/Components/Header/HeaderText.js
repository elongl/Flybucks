import React from "react";
import { Header, Container } from "semantic-ui-react";
import Rotating from "./Rotating";
export default () => {
  return (
    <Container>
      <Rotating />
      <Header
        as="h2"
        content="The world's local currency within your reach."
        inverted
        style={{ fontSize: "1.7em", fontWeight: "normal" }}
      />
    </Container>
  );
};
