import monarch from "../assets/images/monarch.webp";
import ivorycrest from "../assets/images/ivorycrest.webp";
import exploria from "../assets/images/exploria.webp";

const projects = [
  {
    id: 1,
    title: "Ivory Crest Luxury Hotel Booking System",
    image: ivorycrest,
    description:
      "A full-stack hotel booking and management platform with Admin, Receptionist, and Customer modules featuring secure authentication and booking management.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],

    features: [
      "Role-Based Authentication",
      "Room Booking",
      "Payment Workflow",
      "Analytics Dashboard",
      "Email Notifications",
      "Load Tested with K6",
    ],
    github: "https://github.com/Pavan-kumarms27/ivory_crest",
    live: "https://ivorycrest.vercel.app",
  },

  {
    id: 2,
    title: "Monarch Forecast",
    image: monarch,
    description:
      "Responsive weather forecasting application powered by OpenWeather API with modern UI and reusable React components.",

    technologies: ["React", "CSS3", "OpenWeather API", "JavaScript"],

    features: [
      "Real-Time Weather",
      "City Search",
      "Forecast",
      "Responsive UI",
      "Reusable Components",
    ],
    github: "https://github.com/Pavan-kumarms27/monarch-forecast.git",
    live: "https://monarch-forecast.vercel.app",
  },

  {
    id: 3,
    title: "Exploria Travel Website",
    image: exploria,
    description:
      "Responsive travel booking website with dynamic booking calculator and destination exploration.",

    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

    features: [
      "Booking Calculator",
      "Responsive Design",
      "Destination Search",
      "Travel Packages",
    ],
    github: "https://github.com/Pavan-kumarms27/exploria.git",
    live: "https://exploria1.vercel.app",
  },
];

export default projects;
