export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  screenshots: string[];
  tags: string[];
  platform: "iOS" | "Web" | "Mobile" | "Flutter";
  status: "Live" | "In Development" | "Archived";
  links: {
    appStore?: string;
    playStore?: string;
    github?: string;
    live?: string;
    testflight?: string;
  };
  year: string;
}

export const projects: Project[] = [
  {
    id: "folka",
    title: "Folka",
    shortDesc: "iOS word game published on the App Store, built with SpriteKit and UIKit.",
    fullDesc:
      "Folka is a word puzzle game for iOS that challenges players to form words from scrambled letters within a time limit. Built entirely with Swift using UIKit Programmatic and SpriteKit for smooth animations and game physics. The app was developed during Apple Developer Academy and later enhanced during the Catalyst incubation program. It reached 1,000+ downloads on the App Store organically through ASO strategies and user engagement campaigns.",
    coverImage: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
      "https://images.unsplash.com/photo-1510074468977-8a94da70aadc?w=400&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    ],
    tags: ["Swift", "SpriteKit", "UIKit", "CoreData", "ASO", "Mixpanel"],
    platform: "iOS",
    status: "Live",
    links: {
      appStore: "https://apps.apple.com",
      github: "https://github.com/MuhammadSyulhanA",
    },
    year: "2022",
  },
  {
    id: "skolla-lms",
    title: "Skolla LMS",
    shortDesc: "Learning management system with live classes, quizzes, and student reporting.",
    fullDesc:
      "A full-featured Learning Management System built for PT. Teman Satu Skolla. The platform supports live classes, real-time chat, interactive quizzes, timed exams, and detailed student progress reports. Developed using Vue.js with Vuetify for the web frontend, and Swift with MVVM architecture for iOS. Contributed to 53.8k+ app downloads and 800k+ user sessions during active development.",
    coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
    ],
    tags: ["Vue.js", "Vuetify", "Swift", "MVVM", "REST API", "Firebase"],
    platform: "Web",
    status: "Live",
    links: {
      live: "https://skolla.id",
    },
    year: "2023",
  },
  {
    id: "ezv-social-travel",
    title: "EZV Social Travel",
    shortDesc: "Social-travel Flutter app combining booking, messaging, and short-video features.",
    fullDesc:
      "A cross-platform mobile application for iOS and Android that merges social media, travel booking, and short-video content in one place. Built with Flutter and integrated with a REST API backend. Responsible for multiple feature modules including booking flow, in-app messaging, video feed, and profile management. Also handled TestFlight setup, App Store Connect configuration, and ASO preparation.",
    coverImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
      "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=400&q=80",
    ],
    tags: ["Flutter", "Dart", "REST API", "TestFlight", "App Store Connect"],
    platform: "Flutter",
    status: "Archived",
    links: {
      testflight: "https://testflight.apple.com",
    },
    year: "2023",
  },
  {
    id: "edgeworks-pos",
    title: "Edgeworks POS",
    shortDesc: "Enterprise web POS system for multi-branch retail and inventory management.",
    fullDesc:
      "A comprehensive Point of Sale web application for enterprise retail chains. Built with React.js and integrated with a .NET backend via REST API. Features include multi-branch inventory tracking, membership management, voucher systems, terminal configuration, and role-based user management. Developed for PT. Edgeworks Solution serving clients in Singapore.",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
      "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=400&q=80",
      "https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=400&q=80",
    ],
    tags: ["React.js", "TypeScript", "REST API", ".NET", "Ant Design"],
    platform: "Web",
    status: "Live",
    links: {},
    year: "2022",
  },
  {
    id: "sms-spam-detector",
    title: "SMS Spam Detector",
    shortDesc: "Research project: Indonesian SMS spam detection using TF-RF and SVM algorithms.",
    fullDesc:
      "An academic research project and published paper on detecting SMS spam in Bahasa Indonesia. The system uses Term Frequency–Relevance Frequency (TF-RF) for feature extraction combined with Support Vector Machine (SVM) for classification. The research was presented and published at the MIMSE 2022 International Conference. Achieved strong classification accuracy on the Indonesian SMS dataset.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    ],
    tags: ["Python", "SVM", "NLP", "TF-RF", "Machine Learning", "Research"],
    platform: "Web",
    status: "Archived",
    links: {
      live: "https://www.atlantis-press.com/proceedings/mimse-i-c-22/125980148",
      github: "https://github.com/MuhammadSyulhanA",
    },
    year: "2022",
  },
];
