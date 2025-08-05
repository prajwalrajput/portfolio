const mongoose = require('mongoose');
const Project = require('./models/project.js'); // ✅ CORRECT RELATIVE PATH

mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("Connection error:", err);
});

const sampleProjects = [
  {
    title: "QR Code generator",
    description: "A web app to generate QR codes from text or URLs using HTML, CSS, JavaScript, and a public QR API.",
    techStack: ["HTML", "CSS", "JavaScript", "QRServer API"],
    liveLink: "https://prajwalrajput.github.io/QrCodeGenerator/",
    githubLink: "https://github.com/prajwalrajput/QrCodeGenerator.git",
    imageUrl: "../images/qr.png"
  },
  {
    title: "Agri Chatbot",
    description: "A simple web-based chatbot built with HTML, CSS, and JavaScript, powered by the Gemini API for real-time AI responses.",
    techStack: ["HTML", "CSS", "JavaScript", "Gemini API (via API key)"],
    liveLink: "https://prajwalrajput.github.io/chatbot_using_gemini/",
    githubLink: "https://github.com/prajwalrajput/chatbot_using_gemini.git",
    imageUrl: "/images/chatbot.png"
  },
  {
    title: "Jai Biotech",
    description: "A dynamic website for Jaibiotech, an agri-based product manufacturing company, featuring product listings and a dealership inquiry form, integrated with Nodemailer for email alerts and SQL database for storing and managing inquiries.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Nodemailer", "MySQL"],
    liveLink: "https://prajwalrajput.github.io/agri_based_wesite_project/",
    githubLink: "https://github.com/prajwalrajput/agri_based_wesite_project.git",
    imageUrl: "/images/jaibiotech.png"
  },
  {
    title: "Spotify Clone",
    description: "A basic Spotify clone UI built using HTML and CSS, replicating the layout and design of Spotify’s web player for learning and practice purposes.",
    techStack: ["HTML", "CSS",],
    liveLink: "https://prajwalrajput.github.io/Soptify_clone/",
    githubLink: "https://github.com/prajwalrajput/Soptify_clone.git",
    imageUrl: "/images/spotify.png"
  },
  {
    title: "Amezon Clone",
    description: "A basic Spotify clone UI built using HTML and CSS, replicating the layout and design of Spotify’s web player for learning and practice purposes.",
    techStack: ["HTML", "CSS",],
    liveLink: "https://prajwalrajput.github.io/amezon_clone/",
    githubLink: "https://github.com/prajwalrajput/amezon_clone.git",
    imageUrl: "/images/amezon.png"
  }
];

Project.insertMany(sampleProjects)
  .then(() => {
    console.log("✅ Projects added successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Error inserting projects:", err);
    mongoose.connection.close();
  });
