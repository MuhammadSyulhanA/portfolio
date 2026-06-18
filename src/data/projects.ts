export interface ProjectFeature {
  title: string;
  description: string;
}

export type Platform =
  | "iOS"
  | "Android"
  | "Web"
  | "Flutter";

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  screenshots: string[];
  tags: string[];
  features?: ProjectFeature[];
  platforms: Platform[];
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
    shortDesc: "An app for children in Indonesia to learn and read Indonesia Folklore, built with SpriteKit and UIKit.",
    fullDesc:
      "Folka, An app for children in Indonesia to learn and read Indonesia Folklore with the more fun way through interactive storytelling, including games, and attractive storytelling involving audio visual aspects.",
    coverImage: "/image/folka/home.png",
    screenshots: [
      "/image/folka/detailhome.png",
      "/image/folka/piece.png",
      "/image/folka/credit.png",
      "/image/folka/tutorial.png",
      "/image/folka/ending.png",
      "/image/folka/kapal.png",
      "/image/folka/mancing.png",
      "/image/folka/maze2.png",
      "/image/folka/mazee.png",
      "/image/folka/puzzle.png",
      "/image/folka/quiz.png",
    ],
    tags: ["Swift", "SpriteKit", "UIKit", "CoreData", "ASO", "Mixpanel"],
    platforms: ["iOS"],
    status: "Live",
    links: {
      appStore: "https://apps.apple.com/id/app/folka-kids-fairy-tale-book/id6444809668",
    },
    year: "2022",
  },

  {
    id: "skolla",
    title: "Skolla",
    shortDesc: "An online learning app for grades 4 SD to 12 SMA & Alumni that can help you understand the subject matter and prepare for your dream school and PTN entrance exams (SNBP & UTBK SNBT).",
    fullDesc:
      "A full-featured Learning Management System built for PT. Teman Satu Skolla. The platform supports live classes, real-time chat, interactive quizzes, timed exams, and detailed student progress reports. Developed using Vue.js with Vuetify for the web frontend, and Swift with MVVM architecture for iOS. Contributed to 53.8k+ app downloads and 800k+ user sessions during active development.",
    coverImage: "/image/skolla/cover.png",
    screenshots: [
      "/image/skolla/beranda.png",
      "/image/skolla/raport.png",
      "/image/skolla/tes.png",
      "/image/skolla/daftar.png",
      "/image/skolla/hasil.png",
      "/image/skolla/materi.png",
      "/image/skolla/misi.png",
      "/image/skolla/skala.png",
    ],
    tags: ["Vue.js", "Vuetify", "Swift", "UIKit", "VIPER", "MVVM", "REST API", "Firebase"],
    platforms: ["Web", "iOS"],
    status: "Live",
    links: {
      appStore: "https://apps.apple.com/id/app/skolla-bimbel-sd-sma-utbk/id1576470654",
      live: "https://app.skolla.online",
    },
    year: "2023",
  },
  
  {
    id: "edgeworks-pos",
    title: "Edgeworks Solutions Pte Ltd",
    shortDesc: "Enterprise web POS system for multi-branch retail and inventory management.",
    fullDesc:
      "Trusted by over 3,000 businesses across Singapore, Indonesia, and Malaysia, Edgeworks is your ultimate partner for growth. We empower retailers, F&B outlets, beauty brands, and wholesalers to streamline operations, increase sales, and delight customers.",
    coverImage: "/image/edgework/edgework_logo.png",
    screenshots: [
      "/image/edgework/product1.png",
      "/image/edgework/product12.png",
      "/image/edgework/product13.png",
      "/image/edgework/product_import.png",
      "/image/edgework/outlet_balance.png",
      "/image/edgework/exchange.png",
      "/image/edgework/membership.png",
      "/image/edgework/stock.png",
      "/image/edgework/stockout.png",
      "/image/edgework/terminal_status.png",
      "/image/edgework/voucher.png",
      "/image/edgework/webhook.png",
    ],
    tags: ["React.js", "Bootstrap", "REST API", ".NET", "Sass"],
    features: [
      {
        title: "Product",
        description: "Contains the products in the shop, according to the retail location. There are many sub features in it, but the ones i handle are the setup feature (to add new product), barcode feature (to manage product alternates barcodes), and min max feature (to manage product outlet min/max level)."
      },
      {
        title: "Membership",
        description: "To manage member."
      },
      {
        title: "Product Importer",
        description: "To import multiple item at once."
      },
      {
        title: "Stock Out Reason",
        description: "To manage reason of deducted item."
      },
      {
        title: "Voucher",
        description: "To generate and manage voucher."
      },
      {
        title: "Webhook",
        description: "To manage webhook and execution history."
      },
      {
        title: "Terminal Status",
        description: "To show the online status of each POS terminal."
      },
      {
        title: "Exchange Rate",
        description: "To manage currency exchange rate."
      },
      {
        title: "Outlet Virtual Balance",
        description: "To manage virtual balance of item in each outlet."
      },
      {
        title: "Stock Template",
        description: "Stock template is the new feature to group multiple items and set the qty. Purpose is for the inventory PO/SO/PR."
      },
      {
        title: "Product",
        description: "To"
      },
    ],
    platforms: ["Web"],
    status: "Live",
    links: {},
    year: "2022",
  },

  {
    id: "ezv",
    title: "EZV",
    shortDesc: "Social-travel app combining booking, messaging, and short-video features.",
    fullDesc:
      "A cross-platform mobile application for iOS and Android that merges social media, travel booking, and short-video content in one place. Built with Flutter and integrated with a REST API backend. Responsible for multiple feature modules including booking flow, in-app messaging, video feed, and profile management. Also handled TestFlight setup, App Store Connect configuration, and ASO preparation.",
    coverImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    screenshots: [
      "/image/ezv/airport.jpg",
      "/image/ezv/book.jpg",
      "/image/ezv/filter.jpg",
      "/image/ezv/filters.jpg",
      "/image/ezv/pro.jpg",
    ],
    tags: ["Flutter", "Dart", "REST API", "TestFlight", "App Store Connect"],
    platforms: ["Flutter"],
    status: "Live",
    links: {
      appStore: "https://apps.apple.com/us/app/2-ways/id6469476223",
      live: "https://www.2-ways.com/",
    },
    year: "2023",
  },
];
