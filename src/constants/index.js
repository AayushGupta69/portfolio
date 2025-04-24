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
  { value: 1, suffix: "+", label: "Years of Internship Experience" },
  { value: 100, suffix: "+", label: "Bugs Resolved" },
  { value: 7, suffix: "+", label: "Techs Mastered" },
  { value: 95, suffix: "%+", label: "Stability Achieved" },
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

const socialImgs = [
  {
    name: "instagram",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/aayushguptaworks/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/AayushGupta69",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/aayushgupta69",
  },
];

const testimonials = [
  {
    name: "Prof. Ganesh Ramakrishnan",
    position: "Indian Institute of Technology Bombay",
    review:
      "Aayush was an invaluable member of our team during his twelve-month internship at IIT Bombay, where he successfully developed and maintained the LEAP-PE Tool, a desktop application for post-editing machine-translated documents. He effectively incorporated new features, resolved bugs, and conducted user research. Aayush demonstrated exceptional achievements, showcasing strong team management, problem-solving skills, and the ability to quickly learn new technologies like QT. His technical expertise, commitment to quality, and effective communication skills make him an ideal candidate for future opportunities in software development.",
    imgPath: "/images/client1.jpg",
  },
  {
    name: "Sadam Hussain",
    position: "M.Tech student at NIT Warangal",
    review:
      "Aayush consistently demonstrated exceptional dedication and efficiency, ensuring all tasks were completed promptly. Aayush is a true team player and brings great value to any project he is involved in.",
    imgPath: "/images/client2.jpg",
  },
  {
    name: "Nishant Wankhede",
    position: "M.Tech student at IIT Delhi",
    review:
      "Throughout his internship, Aayush has consistently demonstrated exceptional timeliness and efficiency. His keen understanding of task urgency has resulted in swift and reliable deliveries. Aayush possesses a remarkable ability to quickly grasp new feature workflows, allowing him to contribute meaningfully. His cooperative nature and proactive approach have been invaluable assets to our team. Based on his performance, I wholeheartedly recommend Aayush for software development roles. I am confident that he will bring significant value to any position he undertakes, leveraging his technical competence, adaptability, and commitment to excellence.",
    imgPath: "/images/client3.jpg",
  },
  {
    name: "Sagar Vats",
    position: "CTO Multyfi",
    review:
      "I highly recommend Aayush for his exceptional technical expertise and innovative approach to software development. He has consistently demonstrated the ability to design and implement scalable, efficient, and user-friendly solutions, resulting in significant improvements in performance and productivity. Aayush's strong problem-solving skills, attention to detail, and commitment to excellence make him a valuable asset to any organization. He is a collaborative team player with excellent communication skills, able to effectively translate complex technical concepts into actionable insights. I strongly endorse Aayush for any opportunity, and I am confident he will continue to drive innovation and deliver outstanding results.",
    imgPath: "/images/client4.jpg",
  },
];

export {
  words,
  expCards,
  navLinks,
  abilities,
  socialImgs,
  testimonials,
  counterItems,
  logoIconsList,
  techStackImgs,
  techStackIcons,
};
