import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/black-bg.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Raymond Duong\'s Website',
  description: "Raymond Duong's Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Raymond Duong.`,
  description: (
    <>
      <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <p>
          A Canadian-based <strong className="text-stone-100">Full Stack Software Engineer</strong> driven by a passion for innovation and impact.
          Currently seeking dynamic opportunities to contribute expertise to meaningful projects.
        </p>
        <p>
          In my free time, you'll find me exploring different countries, playing or training for badminton,
          indulging in horological timepieces, or brewing tea while seeking out the next adventure to embark upon.
        </p>
      </div>
    </>
  ),
  actions: [
    {
      href: '/assets/duong-raymond-resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a passionate and innovative Full Stack Software Engineer based in Canada. 
  With a strong foundation in both frontend and backend technologies, 
  I specialize in building robust and scalable applications that drive impactful change. 
  Proficient in JavaScript, TypeScript, ReactJS, Node.js, and more, 
  I thrive in dynamic environments where I can leverage my skills to tackle complex challenges and deliver exceptional results. 
  Beyond coding, I bring a collaborative spirit, strong problem-solving abilities, and a keen eye for detail to every project. 
  Outside of work, you'll find me exploring new countries, indulging in horological timepieces, playing and training for badminton, 
  or brewing tea while seeking out the next adventure to embark upon.`,
  aboutItems: [
    {label: 'Location', text: 'Calgary, AB, Canada', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian', Icon: FlagIcon},
    // { label: 'Interests', text: 'Cars, Traveling, Food, Watches', Icon: SparklesIcon },
    {label: 'Study', text: 'BSc in Computer Science', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  // {
  //   name: 'Spoken languages',
  //   skills: [
  //     {
  //       name: 'English',
  //       level: 10,
  //     },
  //     {
  //       name: 'Cantonese, Chinese',
  //       level: 6,
  //     },
  //     {
  //       name: 'Japanese',
  //       level: 2,
  //     },
  //   ],
  // },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 7,
      },
      {
        name: 'Express.js',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'TypeScript',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'NoSQL (MongoDB)',
        level: 7,
      },
      {
        name: 'SQL',
        level: 5,
      },
    ],
  },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2019',
    location: 'University of Calgary',
    title: 'Bachelor\'s in Computer Science',
    content: <p>Concentration in Information Security</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2022 - Dec 2023',
    location: 'ATB Financial - Calgary, AB, Canada (Remote)',
    title: 'Full Stack Developer',
    content: (
      <ul>
        <li>
          Stack: TypeScript, JavaScript, React, Node, Java, Python, Microsoft SQL Server, Git, CI/CD, ExpressJS
        </li>
          - Rebuilt the front end of BizBank using React, boosting user experience, responsiveness, and functionality.
        <li>
          - Led the migration of legacy fraud detection to Simility, reducing and preventing fraudulent transactions.
        </li>
        <li>
          - Maintained a code testing coverage of 90% or higher using Jest, JUnit, and React Testing Library, ensuring software reliability, backwards compatibility, and minimizing bugs in production.
        </li>
        <li>
          - Designed a comprehensive development manual for 50+ developers, unifying coding and development practices.
        </li>
        <li>
          - Integrated Veracode into GitLab CI/CD pipelines, reducing API exploits by 60% and enhancing software security.
        </li>
      </ul>
    ),
  },
  {
    date: 'Oct 2019 - Feb 2022',
    location: 'Brightside - Calgary, AB, Canada (Remote)',
    title: 'Software Developer',
    content: (
      <ul>
        <li>
          Stack: JavaScript, React, Node, Java, Python, MongoDB, Git, CI/CD Pipelines
        </li>
          - Integrated Interac e-Transfer into the app with Node, React, and Java, allowing 75k users to transfer over $100M.
        <li>
          - Built and designed a push and email notification microservice in Java, boosting user engagement and account security.
        </li>
        <li>
          - Collaborated with local businesses and developed the “Friends With Benefits” feature using Java, Node, React, and MongoDB, driving customer acquisition by 15% and increasing customer spending.
        </li>
        <li>
          - Led the development of a referral program in Java, Node, and React, increasing customer acquisition by 2500%.
        </li>
        <li>
          - Integrated Mixpanel analytics on the frontend and backend, enabling data-driven decisions for feature prioritization.
        </li>
      </ul>
    ),
  },
  {
    date: 'Aug 2017 - Sept 2018',
    location: 'Arterys - Calgary, AB, Canada (Remote)',
    title: 'Software Engineer Intern',
    content: (
      <ul>
        <li>
          Stack: JavaScript, Angular, Bash/Shell, Python, Git, Docker
        </li>
          - Implemented automated testing designs and patterns using Pytest, accelerating the testing process and facilitating faster identification and resolution of software defects.
        <li>
          - Authored a comprehensive setup and debugging manual for hospitals running our server on their LAN, reducing the need for costly support visits and streamlining onboarding, saving each client an estimated $10,000.
        </li>
        <li>
          - Streamlined and optimized manual testing procedures, increasing release testing efficiency by 20% and reducing required man hours by 10% per release.
        </li>
        <li>
          - Implemented proactive monitoring and alerting systems with Grafana, resulting in 99.90% uptime and significantly reducing mean time to recovery (MTR) for incidents.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'duong334@gmail.com',
      href: 'mailto:duong334@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Calgary AB, Canada',
      href: 'https://maps.app.goo.gl/qhFvs5t75f3Xd4hh9',
    },
    {
      type: ContactType.Instagram,
      text: '@iiraay',
      href: 'https://www.instagram.com/iiraay/',
    },
    {
      type: ContactType.Github,
      text: 'iiraay',
      href: 'https://github.com/iiraay',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/iiraay'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/duongraymond/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/iiraay/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
