import React, { useState } from "react";
import styled from "styled-components";

import animate from "@src/video/particle.mp4";

import { VideoBanner } from "@cmp/UI/VideoBanner";
import { Link } from "@cmp/UI/Link";
import { Section } from "@cmp/UI/Section";

const Title = styled.h1`
  margin: 0 0 15px 0;
  color: ${props => props.theme.colors.secondary};
  text-align: center;

  ${props => props.theme.fontStyle.title}
`;

const Text = styled.p`
  color: ${props => props.theme.colors.secondary};

  ${props => props.theme.fontStyle.paragraph};
`;

const LinkContainer = styled.div`
  margin: 30px 0 10px 0;
`;

const Main = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "1",
      texts: [
        "Cоздавать отдельные рабочие страницы в удобной для вас соц.сети и заниматься рекрутингом",
        "Заинтересoванным предоставляем пoдрoбную информацию и регистрируем желающих по своей личной ссылке.",
      ],
    },
    {
      id: 1,
      title: "2",
      texts: ["Обучаться самим и обучать по нашей готовой методике тех, кто вместе с вами решит строить бизнес."],
    },
    {
      id: 2,
      title: "3",
      texts: ["Если потребитель, то приобретать продукцию повседневного спроса для себя и своей семьи в собственном интернет-магазине."],
    },
  ]);

  const [buns, setBuns] = useState([
    {
      id: 0,
      title: "Законный бизнес",
      texts: ["Вы сами создаете свой бизнес с 0 на законных основаниях - выстраивая свой собственный магазин."],
    },
    {
      id: 1,
      title: "Трудовой стаж",
      texts: ["Как и на любой работе, после выхода на пенсию вы получаете пенсионные отчисления."],
    },
    {
      id: 2,
      title: "Премии",
      texts: ["Повышая свой статус и выходя на новый уровень, компания выплачивает одноразовую премию."],
    },
    {
      id: 3,
      title: "Наследование",
      texts: ["Добившись успехов, вы в праве передать этот бизнес своим детям или родствинникам."],
    },
    {
      id: 4,
      title: "Путешествие",
      texts: ["Когда вы достигните звания директор или выше, вас ждет ежегодные заграничные поездки за счет компании."],
    },
    {
      id: 5,
      title: "Пассивный доход",
      texts: [
        "Вырастив лидеров, вам уже не придется думать о рекрутинге так часто, доход будет идти за счет той структуры, которую вы сами сделали.",
      ],
    },
    {
      id: 6,
      title: "Карьера",
      texts: [
        "Как и на любой работе, работая очень качественно, выстраивая свой бизнес, делая все четко и круто, вы будете получать новые звания в проекте.",
      ],
    },
    {
      id: 7,
      title: "Удаленная работа",
      texts: ["Мала тех работ, которые могут попасть на этот уровень.", "Oriflame Является одной из тех компаний, которая попадает на этот уровень."],
    },
    {
      id: 8,
      title: "Команда",
      texts: [
        "На протяжении всей работы вы не останитесь без внимания.",
        "За вами постоянно будет следить команда и направлять.",
        "Кроме этого - вы можете созвонится с командой или задать вопросы в общий чат получив моментальный ответ.",
      ],
    },
  ]);

  const register = "https://docs.google.com/forms/d/e/1FAIpQLSd2WqntX_EK0EiDuxI8Tf_W-t_HiWmsy_sUPpjTUULIQTON-Q/viewform";
  return (
    <>
      <VideoBanner video={animate}>
        <Title>О бо мне</Title>
        <Text>Я - Наталья - интернет - предприниматель. Работаю только через интернет, удалённо.</Text>
        <Text>__</Text>
        <Text>Моя цель - научить вас зарабатывать через интернет от 30 000 рублей и более. </Text>
        <LinkContainer>
          <Link path={register} title="Заполнить анкету" />
        </LinkContainer>
      </VideoBanner>
      <Section articles={tasks} bg="#fff" title="Что делать &mdash;"></Section>
      <Section articles={buns} bg="#000" title="Работая с нами &mdash;">
        <LinkContainer>
          <Link path="#" title="Присоединиться к нам" />
        </LinkContainer>
        <Text>Вот уже 50 лет компания Oriflame исполняет мечты.</Text>
      </Section>
    </>
  );
};

export { Main };
