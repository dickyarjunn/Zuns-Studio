// Hero image
import heroAvatar from "/assets/my-avatar.png";

// Project images
import projectCyberpunk from "/assets/projects/cyberpunk.png";
import laWhiskeria from "/assets/projects/lawhiskeria.png";
import projectCastle from "/assets/projects/castle.png";
import projectHorror from "/assets/projects/horror.png";
import projectScifi from "/assets/projects/scifi.png";
import projectCity from "/assets/projects/city.png";
import EnjoyToParty from "/assets/projects/EnjoyToParty.png";

// Showcase images
import showcaseMusic from "/assets/showcase/music-system.png";
import showcaseVip from "/assets/showcase/vip-system.png";

export const heroImage = heroAvatar;
import ayyAvatar from "/assets/ayy_avatar.png";

export const projects = [
  {
    id: 1,
    image: EnjoyToParty,
    title: "Enjoy To Party",
    description: "A futuristic neon nightclub featuring a glowing pool, dynamic DJ stage, and luxurious lounge areas—perfect for immersive club party and high-energy social experiences..",
    tags: ["Music", "City", "Neon", "Club"],
    link: "https://www.roblox.com/share?code=b0fa465b5edf8a4fa63a73f97c368a13&type=ExperienceDetails&stamp=1775799275268",
  },
  {
    id: 2,
    image: laWhiskeria,
    title: "La Whiskeria",
    description: "An opulent nightclub environment centered around a commanding stage, enhanced by dramatic lighting and synchronized flame effects that create a powerful, cinematic atmosphere. Elevated lounges and refined architectural elements balance the intensity with a sense of elegance and exclusivity. The result is a visually striking space that feels immersive, high-end, and unforgettable.",
    tags: ["Nightlife", "modern", "party", "Luxury"],
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
  {
    id: 2,
    name: "RaffiDev",
    role: "Owner Roleplay Studio",
    initials: "RD",
    text: "Kerjanya cepet dan hasilnya gak mengecewakan. Map yang gw request selesai lebih cepat dari estimasi, dan kualitasnya bener-bener di atas ekspektasi. Pokoknya recommended banget deh buat yang cari map developer!",
    stars: 5,
  },
  {
    id: 3,
    name: "ZhafranGG",
    role: "Game Developer",
    initials: "ZG",
    text: "Udah beberapa kali order ke Zuns dan selalu puas. Detail map-nya rapih, lighting-nya keren, dan yang paling penting performa game tetap smooth. Komunikasinya juga enak, selalu update progress. Mantap!",
    stars: 5,
  },
  {
    id: 4,
    name: "FadilRblx",
    role: "Owner Café Roleplay",
    initials: "FR",
    text: "Awalnya cuma mau order map sederhana, tapi hasilnya jauh melebihi ekspektasi. Map-nya detail banget, dari interior sampe exterior semuanya rapih. Harga juga worth it banget buat kualitas segini. Thanks Zuns!",
    stars: 5,
  },
  {
    id: 5,
    name: "NabilPlay",
    role: "Roblox Content Creator",
    initials: "NP",
    text: "Gw pake map buatan Zuns buat konten YouTube dan viewers langsung nanya ini map dari mana. Kualitasnya emang beda, keliatan premium dan profesional. Respect buat kerja kerasnya!",
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
    image: showcaseMusic,
    title: "Custom Music & DJ System",
    type: "Script System",
  },
  {
    id: 2,
    image: showcaseVip,
    title: "VIP & Gamepass Manager",
    type: "Script System",
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
