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
        src: "personal_photo.jpg",
        alt: "Placeholder for a primary portrait or workspace photo",
        caption: "Me looking spiffy",
      },
      {
        src: "garden_photo.jpg",
        alt: "Placeholder for a detail photo",
        caption: "I love to garden",
      },
      {
        src: "cooking_photo.jpg",
        alt: "Placeholder for a personal photo",
        caption: "I love to cook",
      },
    ],
  },

  engineeringProjects: [
    {
      id: "autonomous-rover",
      title: "Autonomous Rover Platform",
      summary: "A modular rover designed to navigate, sense, and respond to changing environments.",
      description: [
        "Use this space to explain the challenge, your role, and the engineering decisions that shaped the project. Readers care about the problem almost as much as the final result.",
        "Add measurable outcomes, lessons learned, and the tools or processes you used. The detail view can hold as much text, photography, and video as the project needs.",
      ],
      cover: {
        src: "assets/engineering-rover.svg",
        alt: "Stylized placeholder illustration of an autonomous rover",
      },
      tags: ["Mechanical Design", "Controls", "Prototyping"],
      media: [
        {
          type: "image",
          src: "assets/engineering-rover.svg",
          alt: "Stylized placeholder illustration of an autonomous rover",
          caption: "Replace with a hero photo of the finished system.",
        },
        {
          type: "image",
          src: "assets/detail-blueprint.svg",
          alt: "Stylized placeholder for a technical detail image",
          caption: "Add CAD, testing, or in-progress imagery.",
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
      ],
    },
  ],

  personalProjects: [
    {
      id: "workbench-organizer",
      title: "Workbench Organizer",
      summary: "A custom storage system that keeps everyday tools visible, flexible, and within reach.",
      description: [
        "Personal projects are a great place to show curiosity and personality. Tell the story behind the idea, the materials you chose, and the iterations that made it useful.",
        "Add process photos or a short walkthrough video to make the project feel tangible.",
      ],
      cover: {
        src: "assets/personal-workbench.svg",
        alt: "Stylized placeholder illustration of a workbench organizer",
      },
      tags: ["Fabrication", "Organization", "Iteration"],
      media: [
        {
          type: "image",
          src: "assets/personal-workbench.svg",
          alt: "Stylized placeholder illustration of a workbench organizer",
          caption: "Replace with the finished build.",
        },
        {
          type: "image",
          src: "assets/detail-orange.svg",
          alt: "Stylized placeholder for a fabrication process photo",
          caption: "Add a build-process detail.",
        },
      ],
    },
    {
      id: "photo-map",
      title: "Weekend Photography Map",
      summary: "A lightweight map for collecting overlooked places worth returning to with a camera.",
      description: [
        "Use this detail area for the origin of the idea, how you built it, and what you discovered along the way. The portfolio supports both technical and visual storytelling.",
        "You can mix wide images, close-up details, and playable video in the media gallery below.",
      ],
      cover: {
        src: "assets/personal-map.svg",
        alt: "Stylized placeholder illustration of a photography map",
      },
      tags: ["Photography", "Mapping", "Web"],
      media: [
        {
          type: "image",
          src: "assets/personal-map.svg",
          alt: "Stylized placeholder illustration of a photography map",
          caption: "Replace with the map or a favorite location.",
        },
        {
          type: "image",
          src: "assets/detail-orange.svg",
          alt: "Stylized placeholder for a location photograph",
          caption: "Add one of the photographs the project inspired.",
        },
      ],
    },
    {
      id: "arcade-controller",
      title: "Custom Arcade Controller",
      summary: "A compact controller tuned for satisfying inputs, repairability, and late-night play.",
      description: [
        "Describe the design choices that made this build yoursâ€”from switch feel and layout to the enclosure finish and internal wiring.",
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
      ],
    },
  ],
};

