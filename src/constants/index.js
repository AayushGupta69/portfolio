const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.svg",
  },
  {
    imgPath: "/images/logos/company-logo-2.svg",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-1.svg",
  },
  {
    imgPath: "/images/logos/company-logo-2.svg",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const expCards = [
  {
    review:
      "Aayush is effective in discharging responsibilities assigned to him. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.svg",
    logoPath: "/images/logo1.png",
    className: "h-12 w-12 pt-1",
    title: "MERN Stack Intern",
    date: "July 2024 - August 2024",
    responsibilities: [
      "Built a high‑performance analytics stack: Developed a Next.js 14 + Material UI dashboard to visualize 10+ proprietary trading algorithms and a Node.js/MongoDB backend that cut data‑retrieval latency by 30%.",
      "Automated & optimized trading workflows: Scheduled daily financial data ingestion with Node.js/Axios (↑25% data accuracy), and revamped the paper‑trading engine—introducing Redis for order IDs and a heap‑based matching algorithm—to reduce order processing time by 20%.",
      "Streamlined KYC & internal tooling: Standardized KYC forms and integrated secure Aadhaar storage (↓50% incomplete submissions, ↓30% processing time), plus built Reconciliation and RS Equity pages that improved strategy assessment by 45% and alert response by 30%.",
    ],
  },
  {
    review:
      "Aayush was enthusiastic, diligent, and sincere towards his work, while he showcased his talent in efficiently coordinating with the team alongside contributing towards the development and research goals. His overall performance was excellent.",
    imgPath: "/images/exp2.svg",
    logoPath: "/images/logo2.png",
    className: "h-12 w-12",
    title: "Software Developer Intern",
    date: "July 2023 - July 2024",
    responsibilities: [
      "Led open‑source post‑editing tool development: Architected and maintained a Qt‑based editor for Indian languages (Udaan Project), integrating Bhashini OCR API and QCustomPlot to add 6 advanced chart types and a visual change‑tracking feature (↑25% productivity, ↓40% edit time).",
      "Boosted stability & user adoption:** Squashed 50+ bugs to achieve 95% stability, packaged a Windows installer that cut setup time by 75% and support issues by 90%, and authored English/Hindi user manuals covering 3 major versions (↓50% support tickets).",
      "Improved maintainability & roadmap planning: Overhauled code documentation (↑40% maintainability), collaborated with Prof. Ganesh Ramakrishnan on future‑proofing the tool, and earned a departmental Letter of Recommendation.",
    ],
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export {
  words,
  expCards,
  navLinks,
  abilities,
  counterItems,
  logoIconsList,
  techStackImgs,
  techStackIcons,
};
