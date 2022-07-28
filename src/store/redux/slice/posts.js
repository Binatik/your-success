import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  supports: [
    {
      id: 0,
      title: "Как получать доход?",
      paragraphs: [
        {
          contents: [
            {
              text: "В компании Oriflame есть множество видов дохода. Продажи - это один из них. Но это маленький доход и не основной вид. ",
              link: null,
            },
          ],
        },
        {
          contents: [
            {
              text: "Вы можете самостоятельно выбирать время для работы и отдыха. Но, чем больше вы будете уделять времени развитию бизнеса, тем быстрее добьетесь результата.",
              link: null,
            },
          ],
        },
      ],
      paths: [],
    },
    {
      id: 1,
      title: "Почему это не финансовая пирамида?",
      paragraphs: [
        {
          contents: [
            {
              text: "Финансовая пирамида - это незаконная система организации бизнеса которая подразумевает постоянные вложения денежных средств. В данном случае за свои деньги вы получаете товар, который и так покупаете постоянно но в розничных магазинах. ",
              link: null,
            },
          ],
        },
        {
          contents: [
            {
              text: "Вы рекомендуете товар этой компании другим потребителям, увеличиваете товарооборот и доход компании. За это ",
              link: ["https://www.oriflame.ru", "компания "],
            },
            {
              text: "выплачивает вам вознаграждение в виде процента от созданного товарооборота в вашей сети. ",
              link: null,
            },
          ],
        },
      ],
      paths: [],
    },
    {
      id: 2,
      title: "Как мне совмещать проект с основной работой?",
      paragraphs: [
        {
          contents: [
            {
              text: "У вас полностью свободный график. Вы можете самостоятельно выбирать время для работы и отдыха. ",
              link: null,
            },
          ],
        },
        {
          contents: [
            {
              text: "Сколько времени уделять работе, тоже решаете вы. Но, чем больше вы будете уделять времени развитию бизнеса, тем быстрее добьетесь результата. ",
              link: null,
            },
          ],
        },
      ],
      paths: [],
    },
    {
      id: 3,
      title: "Насколько качественная продукция?",
      paragraphs: [
        {
          contents: [
            {
              text: "У ",
              link: ["https://www.oriflame.ru", "компании "],
            },
            {
              text: "есть свой Институт кожи в Стокгольме, в котором разрабатываются и тестируются средства для ухода за кожей лица. ",
              link: null,
            },
          ],
        },
        {
          contents: [
            {
              text: "А также есть свои заводы на территории Европы и Азии. В России тоже есть завод, который производит продукцию для многих стран. ",
              link: null,
            },
          ],
        },
      ],
      paths: [],
    },
    {
      id: 4,
      title: "Я новичек, смогу ли заработать?",
      paragraphs: [
        {
          contents: [
            {
              text: "Бизнес с Oriflame - это многоуровневый маркетинг. ",
              link: null,
            },
          ],
        },
        {
          contents: [
            {
              text: "Именно законы построения структуры гарантируют, что вы сможете зарабатывать во много раз больше, чем тот человек, который вас пригласил. ",
              link: null,
            },
          ],
        },
      ],
      paths: [],
    },
    {
      id: 5,
      title: "Сколько я должен платить за обучение?",
      paragraphs: [
        {
          contents: [
            {
              text: "Любой крупный бизнес - это команда. Большого результата можно добиться только с командой профессионалов. ",
              link: null,
            },
          ],
        },
        {
          contents: [
            {
              text: "Нам выгодно обучать вас, потому, что ",
              link: ["https://www.oriflame.ru", "компания "],
            },
            {
              text: "платит за работу учителем, а не просто приглашенных людей. ",
              link: null,
            },
          ],
        },
      ],
      paths: [],
    },
    {
      id: 6,
      title: "Какую продукцию вы продаете?",
      paragraphs: [
        {
          contents: [
            {
              text: "В нашей системе товар который ты и все пользуются ежедневно. ",
              link: null,
            },
          ],
        },
        {
          contents: [
            {
              text: "Средства личной гигиены, декоративная косметика, продукт здорового питания и другая качественная продукция ежедневного спросса. ",
              link: null,
            },
          ],
        },
      ],
      paths: [],
    },
  ],

  filteredSupports: [],

  filteredQuerySupports: [],
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filteredQuery(state, actions) {
      const { postQuery  } = actions.payload;

      state.filteredQuerySupports = state.supports.filter(element => {
        const lowerCasePostQuery = postQuery.toLowerCase();
        const elementLowerCase = element.title.toLowerCase();

        if (elementLowerCase.includes(lowerCasePostQuery)) {
          return element;
        }
      });
    },

    removeActivePost(state, actions) {
      const { id } = actions.payload;

      state.filteredSupports = state.supports.filter(element => element.id !== +id);
    },
  },
});

export const { removeActivePost, filteredQuery } = posts.actions;
export default posts.reducer;
