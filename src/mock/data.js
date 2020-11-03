import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Martin Lowe', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Martin Lowe',
  subtitle: 'Full stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I have recently completed the Le Wagon Full Stack Web Development bootcamp and looking for my fist role as a developer',
  paragraphTwo: 'I have 5 years previous experience in various sales and accout management roles in Public Private and Not for Profit ',
  paragraphThree: 'I play rugby for the Kings Cross Steelers the first LGBT Rugby club which I also take part in orgainising club tours, I also part time DJ',
  resume: 'https://www.canva.com/design/DAEFHhc76DY/8Fj7AuC7dyq5nFSp8nnFJA/view?utm_content=DAEFHhc76DY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.png',
    title: 'BuyBaby',
    info: 'A website which I was involved in using Ruby on Rails, Javascript, HTML & CSS, it has 3 user journeys Buy, Sell and Swap Baby Clothing and Accessories',
    info2: '',
    url: 'https://www.buybaby.shop/',
    repo: 'https://github.com/anniebartlett/BuyBaby', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'Plantastic',
    info: 'A website which I help build following the MVC pattern with Ruby on Rails, the website is based on 1 user journeys which was renting plants',
    info2: '',
    url: 'https://plantastic-martin2251.herokuapp.com/',
    repo: 'https://github.com/Martin2251/Plantastic', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'martinlowe673@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/martin-lowe321/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Martin2251',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
