import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

const Title = styled.h2`
  margin: 0 0 50px 0;
  text-align: center;
  color: ${props => props.theme.colors.background};

  ${props => props.theme.fontStyle.title};
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const ItemGrid = styled.div`
  padding: 0 10px;
  flex: 0 0 ${props => props.theme.grid.col3};
  margin: 0 0 30px 0;

  @media ${props => props.theme.desktopFirst.desktop} {
    flex: 0 0 ${props => props.theme.grid.col2};
  }

  @media ${props => props.theme.desktopFirst.tablet} {
    flex: 1 1 ${props => props.theme.grid.col1};
  }
`;

const Item = styled.div`
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.colors.primary + "00030"} 0px 7px 29px 0px;
  background-color: ${props => props.theme.colors.secondary};
  height: 100%;
  border-radius: 5px;

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 100%;
  }
`;

const SubTitle = styled.h3`
  margin: 0 0 15px 0;
  color: ${props => props.theme.colors.primary};

  ${props => props.theme.fontStyle.title};
`;

const Text = styled.p`
  margin: 0 0 10px 0;
  color: ${props => props.theme.colors.primary};
  font-weight: 300;
  ${props => props.theme.fontStyle.paragraph};
`;

const Section = ({ title, bg, articles }) => {
  return (
    <>
      <Section.Section bg={bg}>
        <Container>
          <Title>{title}</Title>
          <Items>
            {articles.map(({ id, title, texts }) => (
              <ItemGrid key={id}>
                <Item>
                  <SubTitle>{title}</SubTitle>
                  {texts.map((text, index) => (
                    <Text key={index}>{text}</Text>
                  ))}
                </Item>
              </ItemGrid>
            ))}
          </Items>
        </Container>
      </Section.Section>
    </>
  );
};

Section.Section = styled.section`
  padding: 100px 0;
  background-color: ${props => props.bg};
`;

export { Section };
