/* eslint-disable react/react-in-jsx-scope */
/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bilkis Ismail",
  title: "Hi all, I'm Bilkis",
  subTitle: emoji(
    "A passionate Full Stack Web Developer having an experience 4+ years of building Web with React JS, Next JS, Node JS and some other cool libraries and frameworks."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kubil-ismail",
  linkedin: "https://www.linkedin.com/in/bilkis-ismail/",
  gmail: "bilkisismail07@gmail.com",
  medium: "https://medium.com/@bilkisismail07",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Web Developer who wants to explore every tech stack",
  skills: [
    emoji(
      "⚡ Turning Web Design from Figma / Adobe XD into a interactive website using React / Next JS."
    ),
    emoji(
      "⚡ Integration of third party services such as Rest API, Firebase, Graph QL and Websocket."
    ),
    emoji(
      "⚡ Improve website performance and increased search engine rankings."
    ),
    emoji(
      "⚡ Developed microservice with Express Js, Redis and MySQL/PostgreSQL."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next JS",
      icons: "next",
      isIcons: true
    },
    {
      skillName: "Material UI",
      src: "/images/mui.png",
      isImage: true
    },
    {
      skillName: "Express JS",
      icons: "express",
      isIcons: true
    },
    {
      skillName: "Node JS",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "GraphQL",
      icons: "graphql",
      isIcons: true
    },
    {
      skillName: "Mysql",
      icons: "mysql",
      isIcons: true
    },
    {
      skillName: "Postgres",
      icons: "postgres",
      isIcons: true
    },
    {
      skillName: "Sequelize",
      icons: "sequelize",
      isIcons: true
    },
    {
      skillName: "PHP",
      icons: "php",
      isIcons: true
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pijar Camp",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Fullstack Mobile Developer",
      duration: "Juni 2020 - August 2020",
      desc: "Learned basic javascript programming and implemented it in a case study using React JS, React Native and Express JS for 3 months."
    },
    {
      schoolName: "Pijar Camp",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Fullstack Mobile Developer",
      duration: "Juni 2020 - August 2020",
      desc: "Learned basic javascript programming and implemented it in a case study using React JS, React Native and Express JS for 3 months."
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Trainer",
      company: "Pijar Camp",
      companylogo: require("./assets/images/pijarcamp.svg"),
      date: "May 2022 – Current",
      desc: "",
      color: "#3088C8"
    },
    {
      role: "Front End Developer",
      company: "Realco",
      companylogo: require("./assets/images/realco.webp"),
      date: "Dec 2021 – Jan 2022",
      desc: "",
      color: "#116839"
    },
    {
      role: "Full Stack Developer",
      company: "Infomedia Nusantara",
      companylogo: require("./assets/images/infomedia.png"),
      date: "Aug 2020 – Sep 2022",
      desc: "",
      color: "#EB2329"
    },
    {
      role: "Full Stack Developer",
      company: "Positive Republik",
      companylogo: require("./assets/images/poster.png"),
      date: "Feb 2019 – Mar 2020",
      desc: "",
      color: "#000000"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portfolio",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/realco.png"),
      projectName: "Realco",
      projectDesc: "Built with Next JS and Material UI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://realco.co.id"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/realfood.png"),
      projectName: "Realfood",
      projectDesc: "Built With Next JS, Material UI and GraphQL.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/layton.png"),
      projectName: "Layton",
      projectDesc: "Built with Next JS and Material UI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://layton.co.id"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/portal-on5.png"),
      projectName: "ON 5",
      projectDesc:
        "Built with React JS, Express JS, Material UI, Vonage and Websocket.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://portal.on5.co.id"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Front-End Web Developer Expert",
      subtitle:
        "Completed learned front-end web applications that are responsive, have good accessibility, easy to maintain, testable and have good performance",
      image: require("./assets/images/dicoding.png"),
      imageAlt: "Dicoding Indonesia",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.dicoding.com/certificates/0LZ03OVW3Z65"
        }
      ]
    },
    {
      title: "Fullstack Mobile Developer",
      subtitle:
        "Learned basic javascript programming and implemented it in a case study using React JS, React Native and Express JS for 3 months.",
      image: require("./assets/images/arkademy.png"),
      imageAlt: "Arkademy",
      footerLink: [
        {
          name: "View Certification",
          url: "https://media.licdn.com/dms/image/C562DAQFH_tKeKIx6VQ/profile-treasury-document-images_1920/1/1606670377444?e=1673481600&v=beta&t=fBv4mhIuNl5Lphnh6lrGUfn8vtQyHyXCom0OBEfzkzM"
        }
      ]
    },
    {
      title: "First Place of Web Design",
      subtitle:
        "First place winner in a web design company profile competition held by HIFEST Tangerang Raya.",
      image: require("./assets/images/umt.png"),
      imageAlt: "Muhammadiyah Tangerang",
      footerLink: []
    },
    {
      title: "First Place of Prototype and business process",
      subtitle:
        "First place winner in a prototype and business process held by Global Institute of Technology and Business.",
      image: require("./assets/images/global-institute.webp"),
      imageAlt: "Muhammadiyah Tangerang",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
