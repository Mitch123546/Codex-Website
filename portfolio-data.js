/*
 * EDIT YOUR WEBSITE HERE
 * ----------------------
 * 1. Replace the profile placeholders with your information.
 * 2. Add, remove, or reorder project objects in either project list.
 * 3. Put your images/videos in /assets, then reference their paths below.
 *
 * Supported media:
 * { type: "image", src: "assets/photo.jpg", alt: "Useful description", caption: "Optional caption" }
 * { type: "video", src: "assets/demo.mp4", poster: "assets/poster.jpg", caption: "Optional caption" }
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Mitch Manzelli",
    initials: "MM",
    tagline: "I turn complex problems into thoughtful, working systems.",
    contacts: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/mitchell-manzelli",
        href: "https://www.linkedin.com/in/mitchell-manzelli/",
        icon: "linkedin",
      },
      {
        label: "Email",
        value: "mitchellmanzelli1@gmail.com",
        href: "mailto:mitchellmanzelli1@gmail.com",
        icon: "email",
      },
    ],
    about: [
      "I'm a mechanical engineering student at the University of Oklahoma, and I'll graduate in May 2029. Some of my favorite hobbies are tending to my garden, making whatever projects pop into my head, and cooking and refining my recipes.",
      "I have the mindset that I can figure out anything I want to learn, and I hope to apply that determination to my work one day.",
    ],
    photos: [
      {
        src: "assets/personal_photo.jpg",
        alt: "Placeholder for a primary portrait or workspace photo",
        caption: "Me looking spiffy",
      },
      {
        src: "assets/garden_photo.jpg",
        alt: "Placeholder for a detail photo",
        caption: "I love to garden",
      },
      {
        src: "assets/cooking_photo.jpg",
        alt: "Placeholder for a personal photo",
        caption: "I love to cook",
      },
    ],
  },

  engineeringProjects: [
    {
      id: "paper_folder",
      title: "Automatic Businesscard Stapler and Paper Folder",
      summary: "A device that is able to dispense a businesscard, stapling it to a piece of paper, and folding said paper twice.",
      description: [
        "This project is meant to increase the productivity of shipping for the company Vette Lights. This project required use of arduino, coding, wiring, 3d modeling in solidworks, and woodworking.",
        "This project taught me all the major building skills I wished to learn. I learned arduino, arduino IDE, refined my coding in C skills, developed my 3d modeling, and helped my creativity.",
      ],
      cover: {
        src: "assets/IMG_3290.jpeg",
        alt: "Stylized placeholder illustration of an autonomous rover",
      },
      tags: ["Mechanical Design", "Controls", "Prototyping"],
      media: [
        {
          type: "image",
          src: "assets/IMG_3290.jpeg",
          alt: "Stylized placeholder illustration of an autonomous rover",
          caption: "Replace with a hero photo of the finished system.",
        },
        {
          type: "image",
          src: "assets/detail-blueprint.svg",
          alt: "Stylized placeholder for a technical detail image",
          caption: "Add CAD, testing, or in-progress imagery.",
        },
        // OPTIONAL PHOTO 3: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-3.svg",
          alt: "Optional placeholder for a third project photo",
          caption: "Optional photo 3 - replace or remove this block.",
        },
        // OPTIONAL PHOTO 4: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-4.svg",
          alt: "Optional placeholder for a fourth project photo",
          caption: "Optional photo 4 - replace or remove this block.",
        },
      ],
    },
    {
      id: "thermal-test-fixture",
      title: "Thermal Test Fixture",
      summary: "A repeatable fixture for characterizing component performance under thermal load.",
      description: [
        "Describe the design constraints, test plan, and how you made the measurements repeatable. This is a strong place to include diagrams, data plots, or a short test video.",
        "Finish with the result: what changed because of the data, and what would you improve in the next revision?",
      ],
      cover: {
        src: "assets/engineering-thermal.svg",
        alt: "Stylized placeholder illustration of a thermal test fixture",
      },
      tags: ["Testing", "Instrumentation", "Data Analysis"],
      media: [
        {
          type: "image",
          src: "assets/engineering-thermal.svg",
          alt: "Stylized placeholder illustration of a thermal test fixture",
          caption: "Add a photo of the test setup.",
        },
        {
          type: "image",
          src: "assets/detail-blueprint.svg",
          alt: "Stylized placeholder for a graph or technical drawing",
          caption: "Add a key result, graph, or schematic.",
        },
        // OPTIONAL PHOTO 3: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-3.svg",
          alt: "Optional placeholder for a third project photo",
          caption: "Optional photo 3 - replace or remove this block.",
        },
        // OPTIONAL PHOTO 4: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-4.svg",
          alt: "Optional placeholder for a fourth project photo",
          caption: "Optional photo 4 - replace or remove this block.",
        },
      ],
    },
    {
      id: "data-dashboard",
      title: "Data Acquisition Dashboard",
      summary: "A clear, real-time interface for monitoring sensor data and identifying anomalies.",
      description: [
        "Explain what the dashboard monitors, who uses it, and the decisions it helps them make. Screenshots and screen recordings work especially well for software-heavy projects.",
        "Mention the data pipeline, interface decisions, and any performance or reliability improvements you delivered.",
      ],
      cover: {
        src: "assets/engineering-dashboard.svg",
        alt: "Stylized placeholder illustration of a data dashboard",
      },
      tags: ["Software", "Sensors", "Visualization"],
      media: [
        {
          type: "image",
          src: "assets/engineering-dashboard.svg",
          alt: "Stylized placeholder illustration of a data dashboard",
          caption: "Replace with a dashboard screenshot.",
        },
        {
          type: "image",
          src: "assets/detail-blueprint.svg",
          alt: "Stylized placeholder for a system architecture diagram",
          caption: "Add a system diagram or alternate screen.",
        },
        // OPTIONAL PHOTO 3: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-3.svg",
          alt: "Optional placeholder for a third project photo",
          caption: "Optional photo 3 - replace or remove this block.",
        },
        // OPTIONAL PHOTO 4: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-4.svg",
          alt: "Optional placeholder for a fourth project photo",
          caption: "Optional photo 4 - replace or remove this block.",
        },
      ],
    },
  ],

  personalProjects: [
    {
      id: "Raised Garden Bed",
      title: "Raised Garden Bed",
      summary: "A custom built raised garden bed on a slope that includes automatic watering and charred wood to prevent rot.",
      description: [
        "This raised garden bed was built specifically with disease prevention in mind. I used drip irrigation along with mulching the ground and raising the bed high enough to prevent the spread and start of infection.",
        "I made the garden to last for over 8 years by using Shou Sugi Ban wood preservation, and I used high quality dirt to last for several seasons before replenishing nutrients.",
      ],
      cover: {
        src: "assets/garden1.jpg",
        alt: "Stylized placeholder illustration of a workbench organizer",
      },
      tags: ["Horticulture", "Woodworking", "Botany"],
      media: [
        {
          type: "image",
          src: "assets/garden1.jpg",
          alt: "Stylized placeholder illustration of a workbench organizer",
          caption: "Replace with the finished build.",
        },
        {
          type: "image",
          src: "assets/garden2.jpg",
          alt: "Stylized placeholder for a fabrication process photo",
          caption: "Add a build-process detail.",
        },
        // OPTIONAL PHOTO 3: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/garden3.jpg",
          alt: "Optional placeholder for a third project photo",
          caption: "Optional photo 3 - replace or remove this block.",
        },
        // OPTIONAL PHOTO 4: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-4.svg",
          alt: "Optional placeholder for a fourth project photo",
          caption: "Optional photo 4 - replace or remove this block.",
        },
      ],
    },
    {
      id: "cigar",
      title: "Cigar from Seed",
      summary: "Cigar made from planting the seed to rolling and aging the product.",
      description: [
        "Me and a friend grew and sustained over 300 tobacco plants from seed with a custom watering setup and custom aging and fermenting setups.",
        "I converted my storm shelter into a tobacco curing setup, and I will be fermenting the leaves and rolling the cigars to finish my project.",
      ],
      cover: {
        src: "assets/tobacco1.jpg",
        alt: "Stylized placeholder illustration of a photography map",
      },
      tags: ["Botany", "Largescale Growing", "Tobacco"],
      media: [
        {
          type: "image",
          src: "assets/tobacco2.jpg",
          alt: "Stylized placeholder illustration of a photography map",
          caption: "Replace with the map or a favorite location.",
        },
        {
          type: "image",
          src: "assets/tobacco3.jpg",
          alt: "Stylized placeholder for a location photograph",
          caption: "Add one of the photographs the project inspired.",
        },
        // OPTIONAL PHOTO 3: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/tobacco4.jpg",
          alt: "Optional placeholder for a third project photo",
          caption: "Optional photo 3 - replace or remove this block.",
        },
        // OPTIONAL PHOTO 4: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-4.svg",
          alt: "Optional placeholder for a fourth project photo",
          caption: "Optional photo 4 - replace or remove this block.",
        },
      ],
    },
    {
      id: "arcade-controller",
      title: "Custom Arcade Controller",
      summary: "A compact controller tuned for satisfying inputs, repairability, and late-night play.",
      description: [
        "Describe the design choices that made this build yours: from switch feel and layout to the enclosure finish and internal wiring.",
        "A quick demonstration video can be added by placing an MP4 in the assets folder and adding a video media object to this project.",
      ],
      cover: {
        src: "assets/personal-controller.svg",
        alt: "Stylized placeholder illustration of a custom arcade controller",
      },
      tags: ["Electronics", "Fabrication", "Gaming"],
      media: [
        {
          type: "image",
          src: "assets/personal-controller.svg",
          alt: "Stylized placeholder illustration of a custom arcade controller",
          caption: "Replace with a photo of the completed controller.",
        },
        {
          type: "image",
          src: "assets/detail-orange.svg",
          alt: "Stylized placeholder for an electronics detail photo",
          caption: "Add an internal wiring or fabrication detail.",
        },
        // OPTIONAL PHOTO 3: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-3.svg",
          alt: "Optional placeholder for a third project photo",
          caption: "Optional photo 3 - replace or remove this block.",
        },
        // OPTIONAL PHOTO 4: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/optional-photo-4.svg",
          alt: "Optional placeholder for a fourth project photo",
          caption: "Optional photo 4 - replace or remove this block.",
        },
      ],
    },
  ],
};



