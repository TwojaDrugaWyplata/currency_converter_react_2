import React from "react";
import { Title, Paragraph } from "./styled";

const Header = ({ date }) => (
  <>
    <Title>Przelicznik walut</Title>
    <Paragraph>Dzisiaj jest {date}</Paragraph>
  </>
  
);

export default Header;

