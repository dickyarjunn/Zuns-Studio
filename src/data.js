// Hero image
import heroAvatar from "/assets/my-avatar.png";

// Project images
import projectCyberpunk from "/assets/projects/cyberpunk.png";
import projectResort from "/assets/projects/resort.png";
import projectCastle from "/assets/projects/castle.png";
import projectHorror from "/assets/projects/horror.png";
import projectScifi from "/assets/projects/scifi.png";
import projectCity from "/assets/projects/city.png";

export const heroImage = heroAvatar;
import ayyAvatar from "/assets/ayy_avatar.png";

export const projects = [
  {
    id: 1,
    image: projectCyberpunk,
    title: "Neon City — Cyberpunk Map",
    description: "A sprawling cyberpunk metropolis with neon-lit skyscrapers, reflective streets, and immersive nightlife atmosphere.",
    tags: ["Cyberpunk", "City", "Neon", "Roleplay"],
  },
  {
    id: 2,
    image: projectResort,
    title: "Paradise Island Resort",
    description: "Tropical paradise featuring crystal-clear waters, luxury villas, and stunning sunset-lit beaches.",
    tags: ["Resort", "Tropical", "Open World"],
  },
  {
    id: 3,
    image: projectCastle,
    title: "Mystic Realm — Fantasy Castle",
    description: "An epic medieval castle surrounded by magical crystals, enchanted forests, and dramatic aurora skies.",
    tags: ["Fantasy", "Medieval", "Adventure"],
  },
  {
    id: 4,
    image: projectHorror,
    title: "The Forsaken Manor",
    description: "A chilling abandoned mansion with eerie fog, moonlit corridors, and spine-tingling atmosphere.",
    tags: ["Horror", "Mansion", "Atmospheric"],
  },
  {
    id: 5,
    image: projectScifi,
    title: "Stellar Command — Space Station",
    description: "A futuristic orbital station with holographic interfaces, zero-gravity zones, and deep space views.",
    tags: ["Sci-Fi", "Space", "Futuristic"],
  },
  {
    id: 6,
    image: projectCity,
    title: "Metro City — Modern Roleplay",
    description: "A detailed modern city with skyscrapers, parks, urban infrastructure, and golden hour lighting.",
    tags: ["Modern", "Roleplay", "Urban"],
  },
];

export const services = [
  {
    id: 1,
    icon: "🏗️",
    title: "Map Building",
    description: "Complete map creation from concept to finished product, tailored to your game's vision and requirements.",
  },
  {
    id: 2,
    icon: "💻",
    title: "Scripting System",
    description: "Advanced Lua scripting for gameplay systems, UI interactions, and custom mechanics that elevate player experience.",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Optimization",
    description: "Performance-focused builds ensuring smooth gameplay on all devices without compromising visual quality.",
  },
  {
    id: 4,
    icon: "🎨",
    title: "Custom Requests",
    description: "Unique commissions for any style — from horror to fantasy to modern city. Your imagination, my creation.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ayy_2981",
    role: "Owner Ocean Beach Club",
    initials: "A",
    image: ayyAvatar,
    text: "Mapnya bagus, rapih sesuai sama yang kita request. dev nya baik, responnya juga baik dan ramah, yang paling penting dev nya amanah. dan satu lagi, paling penting dev nya selalu mengutamakan kemauan konsument, best !!.",
    stars: 5,
  },
];

export const stats = [
  { number: "30+", label: "Projects Completed" },
  { number: "5+", label: "Months Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Fast & Optimized" },
];

export const showcaseItems = [
  {
    id: 1,
    image: projectCyberpunk,
    title: "Cyberpunk City Walkthrough",
    type: "Featured Map",
  },
  {
    id: 2,
    image: projectCastle,
    title: "Fantasy Castle Build Timelapse",
    type: "Build Process",
  },
];

export const skills = [
  "Roblox Studio",
  "Map Design",
  "Terrain Sculpting",
  "Lighting & FX",
  "3D Modeling",
  "Optimization",
  "Lua Scripting",
  "UI/UX Design",
];
