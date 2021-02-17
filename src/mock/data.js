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
  paragraphOne: 'I have recently completed the Le Wagon Full Stack Web Development bootcamp and looking for my first role as a developer',
  paragraphTwo: 'I have 5 years previous experience in various sales and account management roles in Public Private and Not for Profit ',
  paragraphThree: 'I play rugby for the Kings Cross Steelers the first LGBT Rugby club which I also take part in orgainising club tours, I also part time DJ',
  resume: 'https://pdfhost.io/v/wJi9MyfAx_Black_Professional_Resume.pdf', // if no resume, the button will not show up
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
    repo: 'https://github.com/Martin2251/BuyBaby', // if no repo, the button will not show up
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
   {
    id: nanoid(),
    img: 'Project3.png',
    title: 'React Weather API App',
    info: 'A React weather app which uses the open weather API, you can type any city in the world and get the current temperature.',
    info2: '',
    url: 'https://gallant-jackson-98082b.netlify.app/',
    repo: 'https://github.com/Martin2251/weather-react', // if no repo, the button will not show up
  },
     {
    id: nanoid(),
    img: 'Project5.png',
    title: 'Quiz with Javascript',
    info: 'A easy multiple choice quiz using Javascript .',
    info2: '',
    url: 'https://youthful-lichterman-2016a6.netlify.app/',
    repo: 'https://github.com/Martin2251/quiz_app', // if no repo, the button will not show up
  },
     {
    id: nanoid(),
    img: 'Project4.png',
    title: 'Simple Calculator with Javascript',
    info: 'A simple calculator using Javascript',
    info2: '',
    url: 'https://loving-beaver-0b0c40.netlify.app/',
    repo: 'https://github.com/Martin2251/js-calc', // if no repo, the button will not show up
  },
       {
    id: nanoid(),
    img: 'Project7.png',
    title: 'Bug Invaders',
    info: 'A game of space invaders using HTML, CSS and Javascript',
    info2: '',
    url: 'https://awesome-haibt-73e680.netlify.app/',
    repo: 'https://github.com/Martin2251/bugInvaders', // if no repo, the button will not show up
  },
  
         {
    id: nanoid(),
    img: 'Project8.png',
    title: 'Christmas Website',
    info: 'A landing page of a Christmas shop using HTML, CSS and Javascript',
    info2: '',
    url: 'https://clever-liskov-616bd1.netlify.app/',
    repo: 'https://github.com/Martin2251/xmas-landing', // if no repo, the button will not show up
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
