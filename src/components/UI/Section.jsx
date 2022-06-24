import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";

const Title = styled.h2`
  margin: 0 0 50px 0;
  text-align: center;
  color: ${props => props.theme.colors.primary};

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

const Section = ({ title, bg }) => {
  return (
    <>
      <Section.Section bg={bg}>
        <Container>
          <Title>{title}</Title>
          <Items>
            <ItemGrid>
              <Item>
                <SubTitle>1</SubTitle>
                <Text>Cоздавать отдельные рабочие страницы в удобной для вас соц.сети</Text>
                <Text>Заинтересoванным предоставляем пoдрoбную информацию и регистрируем желающих по своей личной ссылке под свой номер.</Text>
              </Item>
            </ItemGrid>
            <ItemGrid>
              <Item>
                <SubTitle>2</SubTitle>
                <Text>Обучаться самим и обучать по нашей готовой методике тех, кто вместе с вами решит строить бизнес.</Text>
              </Item>
            </ItemGrid>
            <ItemGrid>
              <Item>
                <SubTitle>3</SubTitle>
                <Text>Если потребитель, то приобретать продукцию повседневного спроса для себя и своей семьи в собственном интернет-магазине</Text>
              </Item>
            </ItemGrid>
          </Items>
        </Container>
      </Section.Section>
    </>
  );
};

Section.Section = styled.section`
  padding: 80px 0 0 0;
  background-color: ${props => props.bg};
`;

export { Section };
