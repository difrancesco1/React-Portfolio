import spotlight from '../../images/spotlight3.png';
import logo from '../../images/rweq.png';
import reactLogo from '../../images/react-logo.png';
import tailwind from '../../images/tailwindcss.png';
import axios from '../../images/axios.png';
import framer from '../../images/framer.png';
import DecayTracker from '../../images/DecayTracker3.gif';
import NewProjectMedia from '../../images/tempmedia.png';
import arrowUp from '../../images/arrow-up.png';
import Krug from '../../images/Krug.png';
import Python from '../../images/python.png';

const workCardsData = [
  {
    image: { src: spotlight, alt: "Spotlight Image" },
    logo: { src: logo, alt: "RWEQ Logo" },
    description: {
      title: "Decay Tracker - League of Legends Account Management Application",
      paragraphs: [
        "Feature-rich application for tracking multiple League of Legends accounts. It simplifies the tracking of decay games, securely stores user credentials, and allows users to see rank, past games, and account statistics.",
        "With a focus on efficiency, used RESTful API design principles and managed query parameters to filter relevant data. Applied error handling with Axios interceptors and fallback mechanisms for failed API requests."
      ],
    },
    techLogos: [
      { src: reactLogo, alt: "React Logo" },
      { src: tailwind, alt: "Tailwind CSS Logo" },
      { src: axios, alt: "Axios Logo" },
      { src: framer, alt: "Framer Motion Logo" },
    ],
    liveSiteLink: "https://github.com/difrancesco1/Decay-Tracker", // Replace with actual live site URL
    arrowIcon: arrowUp,
    media: [
      { src: DecayTracker, alt: "Decay Tracker Project Media" },
    ],
  },
  {
    image: { src: spotlight, alt: "Spotlight Image" },
    logo: { src: Krug, alt: "Krug" },
    description: {
      title: "KruGG - League of Legends Statistic Application",
      paragraphs: [
        "Comprehensive platform offering detailed statistics and insights for League of Legends. Players can access individual player statistics by searching for a summoner's Riot ID and Tagline.",
        "KruGG serves as a valuable resource for gamers seeking to analyze and improve their performance across multiple titles by offering in-depth data and user-friendly tools.",
        "Built with React and TailwindCSS for a responsive and elegant interface, powered by a Python backend and MongoDB database for robust functionality and scalability."
      ],
    },
    techLogos: [
      { src: reactLogo, alt: "React Logo" },
      { src: tailwind, alt: "Tailwind CSS Logo" },
      { src: Python, alt: "Python Logo" },
      { src: framer, alt: "Framer Motion Logo" },
    ],
    liveSiteLink: "https://github.com/matthew2738/KruGG", // Replace with actual live site URL
    arrowIcon: arrowUp,
    media: [
      { src: NewProjectMedia, alt: "New KruGG Project Media" },
    ],
  },
];

export default workCardsData;
