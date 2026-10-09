export interface CollabItem {
  id: string;
  partner: string;
  partnerType: "Open Source Org" | "Startup" | "Tech Studio" | "Research Team" | "Personal Project";
  title: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  techStack: string[];
  link?: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING";
  asciiLogo?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; experience: string; tag: string }[];
}

export type Max8Colors =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string];

export const PORTFOLIO_DATA = {
  developer: {
    name: "Galeed León",
    handle: "galeed",
    title: "Informático · Bailarín · Músico amateur",
    alias: "galeed@moustache-lab",
    email: "galeedx@gmail.com",
    github: "https://github.com/galeed",
    linkedin: "https://open.spotify.com/artist/0IDvLdbTI3SFHMP7bXB5aA?si=OxvGM2WWQT-zMFQa3Wyxyg&utm_source=copy-link",
    twitter: "https://music.apple.com/mx/artist/jo%C3%ABl-balam/1832889129",
    spotify: "https://open.spotify.com/artist/0IDvLdbTI3SFHMP7bXB5aA?si=OxvGM2WWQT-zMFQa3Wyxyg&utm_source=copy-link",
    appleMusic: "https://music.apple.com/mx/artist/jo%C3%ABl-balam/1832889129",
    soundcloud: "https://on.soundcloud.com/ouNnpKPjfzRHVT4yXB",
    youtube: "https://youtube.com/@joel-balam?si=_6m8ccf3k4x6TXn1",
    location: "Ciudad de México, MX // UTC-6",
    status: " OPEN FOR COLLABORATIONS & CREATIVE PROJECTS",
    CLI_EMOJI: "🎧",
    palette: [
      "#0f0f0f",
      "#ef4444",
      "#22c55e",
      "#eab308",
      "#3b82f6",
      "#a855f7",
      "#06b6d4",
      "#f8fafc",
    ],
    bio: "Nací en 1994 y estudié informática, desarrollando proyectos breves que ahora estoy llevando más allá. Fui bailarín de danza folclórica mexicana y estoy iniciando mi camino en la música, con la meta de ser músico, ingeniero de masterización y cantautor.",
    quote: '"Los sueños también se construyen proyecto a proyecto." — Galeed León',
    asciiBanner: `
   ____    _    _      _____  _____  ____
  / ___|  / \\  | |    | ____|| ____||  _ \\
 | |  _  / _ \\ | |    |  _|  |  _|  | | | |
 | |_| || ___ || |___ | |___ | |___ | |_| |
  \\____|/_/   \\_\\____||_____||_____||____/
      G A L E E D   L E Ó N
`,
    specs: {
      OS: "Open source / cross-platform",
      Kernel: "Creative projects in progress",
      Uptime: "Building since 1994",
      Shell: "zsh / Web-TUI",
      Terminal: "Astro + Tailwind",
      WM: "Desktop / Mobile ready",
      Editor: "Code + Audio tools",
      CPU: "Curiosity / Persistence",
      Memory: "Dreams in progress",
    },
  },

  skills: [
    {
      category: "Web & Programming",
      icon: "⚡",
      skills: [
        { name: "HTML", level: 78, experience: "EN DESARROLLO", tag: "INTERMEDIO ALTO" },
        { name: "CSS", level: 75, experience: "EN DESARROLLO", tag: "INTERMEDIO ALTO" },
        { name: "JavaScript", level: 78, experience: "EN DESARROLLO", tag: "INTERMEDIO ALTO" },
        { name: "APIs", level: 65, experience: "EN DESARROLLO", tag: "EN PROGRESO" },
      ],
    },
    {
      category: "Audio & Music",
      icon: "🎚️",
      skills: [
        { name: "Edición de audio", level: 60, experience: "NIVEL MEDIO", tag: "EN DESARROLLO" },
        { name: "Mezcla", level: 55, experience: "NIVEL MEDIO", tag: "EN PROGRESO" },
        { name: "Masterización", level: 55, experience: "NIVEL MEDIO", tag: "EN PROGRESO" },
        { name: "Composición / canción", level: 45, experience: "INICIANDO", tag: "EN PROGRESO" },
      ],
    },
  ] as SkillCategory[],

  collabs: [
    {
      id: "moustache-chat-lab",
      partner: "Proyecto personal",
      partnerType: "Personal Project",
      title: "Moustache de Chat LAB",
      role: "Creador y desarrollador",
      period: "EN DESARROLLO",
      status: "ONGOING",
      description:
        "Suite de escritorio para edición, mezcla y masterización de audio, pensada como una nube de herramientas de código libre.",
      contributions: [
        "Diseño de una suite modular para trabajar distintos procesos de audio.",
        "Exploración de herramientas abiertas para edición, mezcla y masterización.",
        "Construcción progresiva de una experiencia de escritorio enfocada en creadores.",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Web APIs"],
      link: "https://github.com/galeed/Moustache-de-Chat-LAB-2",
      asciiLogo: `+----------------------+
| MOUSTACHE DE CHAT LAB |
| [STATUS: IN DEV]      |
+----------------------+`,
    },
  ] as CollabItem[],

  commands: [
    { name: "help", desc: "List all available terminal commands", usage: "help" },
    { name: "about", desc: "Display biography & creative path", usage: "about [or cat bio.txt]" },
    { name: "skills", desc: "Display skill proficiency meters", usage: "skills [or cat skills.sh]" },
    { name: "collabs", desc: "Display featured projects", usage: "collabs [or cat collabs.md]" },
    { name: "neofetch", desc: "Display ASCII banner & system profile", usage: "neofetch" },
    { name: "spotify", desc: "Display Spotify now-playing activity", usage: "spotify [or np, nowplaying]" },
    { name: "contact", desc: "Display contact info and social links", usage: "contact [or mail]" },
    { name: "links", desc: "Display GitHub and music profile links", usage: "links [or socials, urls]" },
    { name: "theme", desc: "Switch between the CRT themes", usage: "theme <green|amber|cyan|dracula|mono|cappuccino>" },
    { name: "pong", desc: "Play retro Pong vs CPU", usage: "pong [or game, play]" },
    { name: "snake", desc: "Play classic retro Snake", usage: "snake [or playsnake]" },
    { name: "github", desc: "Display live GitHub stats and repositories", usage: "github [or gh, stats]" },
    { name: "repos", desc: "List featured GitHub repositories", usage: "repos [or projects]" },
    { name: "radio", desc: "Play Lo-Fi radio or custom songs from YouTube", usage: "radio [play|pause|next|add <url>|vol <n>|list]" },
    { name: "matrix", desc: "Toggle digital rain CRT overlay", usage: "matrix" },
    { name: "crt", desc: "Toggle CRT scanline screen effect", usage: "crt" },
    { name: "sfx", desc: "Toggle audio feedback keypress sounds", usage: "sfx" },
    { name: "clear", desc: "Clear terminal buffer screen", usage: "clear [or cls]" },
    { name: "gui", desc: "Switch to visual dashboard mode", usage: "gui" },
    { name: "cli", desc: "Switch to interactive CLI mode", usage: "cli" },
  ],
};
