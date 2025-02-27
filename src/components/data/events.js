'use client'


export const events = [

  {
    id: 7,
    title: "AERORUSH",
    shortDescription: "Streamline your development operations",
    fullDescription: "Master the tools and practices of modern DevOps. Cover CI/CD pipelines, container orchestration, and infrastructure as code. Hands-on experience with Docker and Kubernetes.",
    date: "2024-06-10",
    location: "DevOps Training Center",
    duration: "16 hours",
    category: "DevOps",
    img: 7,
  },
  {
    id: 3,
    title: "Blindfold Bytes",
    shortDescription: "Understanding the future of decentralized technology",
    fullDescription: "Deep dive into blockchain technology, smart contracts, and Web3 development. Learn about cryptocurrency, NFTs, and building decentralized applications.",
    date: "2024-06-10",
    location: "Crypto Conference Center",
    duration: "6 hours",
    category: "Blockchain",
    img: 3,
  },
  {
    id: 4,
    title: "Campus Quest",
    shortDescription: "Master the art of ethical hacking and security",
    fullDescription: "Learn about penetration testing, network security, and cyber defense strategies. Hands-on experience with security tools and real-world scenarios.",
    date: "2024-06-10",
    location: "Security Operations Center",
    duration: "12 hours",
    category: "Security",
    img: 4,
  },
  {
    id: 5,
    title: "Crack the Code",
    shortDescription: "Navigate the world of cloud technologies",
    fullDescription: "Comprehensive overview of AWS, Azure, and Google Cloud. Learn about cloud architecture, deployment strategies, and best practices for cloud migration.",
    date: "2024-06-10",
    location: "Cloud Tech Center",
    duration: "10 hours",
    category: "Cloud Computing",
    img: 5,
  },
  {
    id: 2,
    title: "Innovate X",
    shortDescription: "48-hour coding challenge to build innovative solutions",
    fullDescription: "Put your coding skills to the test in this intensive hackathon. Form teams, tackle real-world problems, and create working prototypes. Prizes worth $10,000 up for grabs!",
    date: "2024-06-10",
    location: "Digital Innovation Lab",
    duration: "48 hours",
    category: "Programming",
    img: 2,
  },
  {
    id: 8,
    title: "MechaSoccer",
    shortDescription: "Unlocking insights through data analytics",
    fullDescription: "Learn about big data analytics, statistical modeling, and data visualization. Practical sessions on Python, R, and popular data science tools.",
    date: "2024-06-10",
    location: "Data Analytics Hub",
    duration: "14 hours",
    category: "Data Science",
    img: 8,
  },
  {
    id: 1,
    title: "Meta Madness",
    shortDescription: "High intensity gaming with some of the most popular titles",
    fullDescription: "lorem ipsum ",
    date: "2024-06-10",
    location: "Tech Hub Center",
    duration: "8 hours",
    category: "Artificial Intelligence",
    img: 1,
  },
  {
    id: 9,
    title: "Router Rush",
    shortDescription: "Experience the future of immersive technology",
    fullDescription: "Explore augmented and virtual reality technologies. Learn about 3D modeling, spatial computing, and creating immersive experiences. Try out the latest AR/VR hardware.",
    date: "2024-06-10",
    location: "Virtual Reality Center",
    duration: "6 hours",
    category: "AR/VR",
    img: 9,
    link: '/src/app/routerrush/page.tsx'
  },
  {
    id: 6,
    title: "No Bug Zone",
    shortDescription: "Connecting the physical and digital worlds",
    fullDescription: "Explore the Internet of Things ecosystem. Learn about sensors, embedded systems, and building connected devices. Includes practical demonstrations and project showcase.",
    date: "2024-06-10",
    location: "Smart Systems Lab",
    duration: "8 hours",
    category: "IoT",
    img: 6,
  },
].map(event => ({
  ...event,
  link: event.title.toLowerCase()
    .replace(/\s+/g, '') // Remove spaces
    .replace(/[^a-z0-9-]/g, '') // Remove special characters
}));






