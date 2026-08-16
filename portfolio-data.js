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
 *
 * VIDEO AND DOWNLOAD SLOTS:
 * - Upload videos/files to /assets, then fill in src or href below.
 * - Blank slots stay hidden on the website.
 * - Delete an entire slot object if you do not want to keep it.
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Mitch Manzelli",
    initials: "MM",
    tagline: "I turn ideas into prototypes, and prototypes into solutions.",
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
        alt: "Mitch Looking Spiffy",
        caption: "Me looking spiffy",
      },
      {
        src: "assets/garden_photo.jpg",
        alt: "Mitch's Garden",
        caption: "I love to garden",
      },
      {
        src: "assets/cooking_photo.jpg",
        alt: "Mitch's Pizza",
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
        alt: "Photo of paper folder 3d model",
      },
      tags: ["Mechanical Design", "Controls", "Prototyping"],
      media: [
        {
          type: "image",
          src: "assets/IMG_3290.jpeg",
          alt: "Photo of paper folder 3d model",
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
      videos: [
        { src: "assets/video_test.mp4", poster: "assets/IMG_3290.jpeg", caption: "Parallel Linkage Test" },
        { src: "", poster: "", caption: "Project video 2" },
      ],
      downloads: [
        { href: "", label: "SolidWorks assembly", meta: "SLDASM or ZIP" },
        { href: "", label: "3D model", meta: "STEP, STL, or ZIP" },
      ],
    },
    {
      id: "Magnetic Building Blocks & Air Cannon",
      title: "Magnetic Building Blocks & Air Cannon",
      summary: "Developed and itterated magnetic building blocks and an air cannon for an interactive elementry school activity.",
      description: ["Me and my engineering team were assigned to make an interactice activity for elementry school students to spark their interest in engineering. We settled on a wind demonstration. I will focus on the building blocks because that was the task I was assigned to complete.",
                    "The magnetic building blocks were modeled in Fusion 360, and they were made using FDS 3D printing. Each magnet was held in place with the friction of the sidewalls. The building blocks were made to be knocked over by the air cannons wind, hopefully helping to teach the elementry students about structural integrity and wind patterns.",
                   ],
      cover: {
        src: "assets/magblock1.jpg",
        alt: "Magnetic Building Blocks Tower",
      },
      tags: ["Interactive", "Magnets", "3D Printing"],
      media: [
        {
          type: "image",
          src: "assets/magblock1.jpg",
          alt: "Magnetic Building Blocks Tower",
          caption: "Tower made with custom fabricated magnetic building blocks",
        },
        {
          type: "image",
          src: "assets/magblock2.jpg",
          alt: "Magnetic Building Blocks Tower being knocked down by air cannon",
          caption: "Tower made with custom fabricated magnetic building blocks",
        },
        {
          type: "image",
          src: "assets/magblock3.jpg",
          alt: "All Magnetic Building Blocks Stacked Up",
          caption: "Magnetic building Blocks Stacked Vertically",
        },
        {
          type: "image",
          src: "assets/magblock4.jpg",
          alt: "Magnetic Building Blocks Arranged Decoratively",
          caption: "Magnetic Building Blocks Arranged Decoratively",
        },
      ],
      videos: [
        { src: "", poster: "", caption: "Project video 1" },
        { src: "", poster: "", caption: "Project video 2" },
      ],
      downloads: [
        { href: "", label: "SolidWorks assembly", meta: "SLDASM or ZIP" },
        { href: "", label: "3D model", meta: "STEP, STL, or ZIP" },
      ],
    },
    {
      id: "data-dashboard",
      title: "Engineering Project - Coming Soon",
      summary: "To be completed.",
      description: [],
      cover: {
        src: "assets/coming-soon.svg",
        alt: "Engineering project coming soon",
      },
      tags: ["Coming Soon"],
      media: [
        {
          type: "image",
          src: "assets/coming-soon.svg",
          alt: "Engineering project photos coming soon",
          caption: "Project details and photos coming soon.",
        },
      ],
      videos: [
        { src: "", poster: "", caption: "Project video 1" },
        { src: "", poster: "", caption: "Project video 2" },
      ],
      downloads: [
        { href: "", label: "SolidWorks assembly", meta: "SLDASM or ZIP" },
        { href: "", label: "3D model", meta: "STEP, STL, or ZIP" },
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
        src: "assets/garden1.jpeg",
        alt: "Garden photo",
      },
      tags: ["Horticulture", "Woodworking", "Botany"],
      media: [
        {
          type: "image",
          src: "assets/garden1.jpeg",
          alt: "Garden photo",
          caption: "Replace with the finished build.",
        },
        {
          type: "image",
          src: "assets/garden2.jpeg",
          alt: "Garden photo",
          caption: "Add a build-process detail.",
        },
        // OPTIONAL PHOTO 3: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/garden3.jpg",
          alt: "Garden Photo",
          caption: "Optional photo 3 - replace or remove this block.",
        },
        // OPTIONAL PHOTO 4: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/garden4.jpg",
          alt: "Garden photo",
          caption: "Optional photo 4 - replace or remove this block.",
        },
      ],
      videos: [
        { src: "", poster: "", caption: "Project video 1" },
        { src: "", poster: "", caption: "Project video 2" },
      ],
      downloads: [
        { href: "", label: "SolidWorks assembly", meta: "SLDASM or ZIP" },
        { href: "", label: "3D model", meta: "STEP, STL, or ZIP" },
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
        alt: "Tobacco plants",
      },
      tags: ["Botany", "Largescale Growing", "Tobacco"],
      media: [
        {
          type: "image",
          src: "assets/tobacco1.jpg",
          alt: "Tobacco plants",
          caption: "Replace with the map or a favorite location.",
        },
        {
          type: "image",
          src: "assets/tobacco2.jpeg",
          alt: "Tobacco Seedlings",
          caption: "Add one of the photographs the project inspired.",
        },
        // OPTIONAL PHOTO 3: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/tobacco3.jpeg",
          alt: "Field of tobacco",
          caption: "Optional photo 3 - replace or remove this block.",
        },
        // OPTIONAL PHOTO 4: Replace these details, or delete this entire object.
        {
          type: "image",
          src: "assets/tobacco4.jpg",
          alt: "Tobacco leaves curing",
          caption: "Optional photo 4 - replace or remove this block.",
        },
      ],
      videos: [
        { src: "", poster: "", caption: "Project video 1" },
        { src: "", poster: "", caption: "Project video 2" },
      ],
      downloads: [
        { href: "", label: "SolidWorks assembly", meta: "SLDASM or ZIP" },
        { href: "", label: "3D model", meta: "STEP, STL, or ZIP" },
      ],
    },
    {
      id: "arcade-controller",
      title: "Personal Project - Coming Soon",
      summary: "To be completed.",
      description: [],
      cover: {
        src: "assets/coming-soon.svg",
        alt: "Personal project coming soon",
      },
      tags: ["Coming Soon"],
      media: [
        {
          type: "image",
          src: "assets/coming-soon.svg",
          alt: "Personal project photos coming soon",
          caption: "Project details and photos coming soon.",
        },
      ],
      videos: [
        { src: "", poster: "", caption: "Project video 1" },
        { src: "", poster: "", caption: "Project video 2" },
      ],
      downloads: [
        { href: "", label: "SolidWorks assembly", meta: "SLDASM or ZIP" },
        { href: "", label: "3D model", meta: "STEP, STL, or ZIP" },
      ],
    },
  ],
};





