/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS03 MASTER DATASET V20.95)
// Súbor: @shared/data/MenuHamburgerData.js
// Cesta: D:\Projects\projekt-nexus-monorepo_7.0\subdomens-monorepo_7.3\shared\src\data\MenuHamburgerData.js
// Status: 100% GROUNDED // 100% PERFECT SSOT MONOLITH // ZERO BALAST
// ============================================================================

/**
 * 👑 PRAVIDLÁ NAVIGÁCIE V20 (CHAMELEON ARCHITEKTÚRA):
 * 1. isExternal / isLiveSubdomain: true -> reálna subdoména (mení URL, zatvára menu).
 * 2. isLiveNode: true -> aktívny reálny uzol v rámci aplikácie (mení URL, zatvára menu).
 * 3. inDevelopment: true / url: "#" -> položky vo vývoji (hluché kliknutie, nezaviera menu).
 * 4. isDivider: true -> sémantický vizuálny oddeľovač sekcií cyber-brutalizmu.
 */

// ============================================================================
// 🏰 1. UŽÍVATEĽSKÉ ROZHRANIE A MODÁLY (Rýchle Akcie)
// ============================================================================
export const TRIPLE_USER_NAV = [
  {
    isDivider: true,
    label: "🏰 1. UŽÍVATEĽSKÉ ROZHRANIE A MODÁLY\n(Rýchle Akcie)",
  },
  {
    label: "PROFIL OPERÁTORA (VO VÝVOJI)",
    icon: "User",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "INBOX (TERMINÁL SPRÁV VO VÝVOJI)",
    icon: "Inbox",
    url: "#",
    inDevelopment: true,
  },
];

// ============================================================================
// 🌍 2. GLOBÁLNA NAVIGATION MATRIX OS GENESIS (Všetky Hlavné Porty)
// ============================================================================
export const GLOBAL_NEXUS_NAV = [
  {
    isDivider: true,
    label: "🌍 2. GLOBÁLNA NAVIGATION MATRIX OS GENESIS\n(Všetky Hlavné Porty)",
  },
  {
    label: "UPLINK MODAL (VO VÝVOJI)",
    icon: "Radio",
    url: "#",
    inDevelopment: true,
  },
  {
    id: "HOME",
    label: "HOME PAGE",
    icon: "Home",
    url: "/home",
    isExternal: false,
    isLiveNode: true,
  },
  {
    label: "BLOG PAGE (VO VÝVOJI)",
    icon: "BookOpen",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "OPERÁTORS PAGE (VO VÝVOJI)",
    icon: "Users",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "SETTINGS PAGE (VO VÝVOJI)",
    icon: "Settings",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "⚡ ADMIN TERMINAL (VO VÝVOJI)",
    icon: "ShieldAlert",
    url: "#",
    requiresArchitect: true,
    inDevelopment: true,
  },
];

// ============================================================================
// 🛍️ 3. MEDIA A AKADÉMIA PORTY OS GENESIS (Obchod a Knižnice)
// ============================================================================
export const SHOP_MEDIA_NAV = [
  {
    isDivider: true,
    label: "🛍️ 3. MEDIA A AKADÉMIA PORTY OS GENESIS\n(Obchod a Knižnice)",
  },
  {
    label: "NEXUS SHOP (VO VÝVOJI)",
    icon: "ShoppingCart",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "VIDEOS MEDIA (VO VÝVOJI)",
    icon: "Video",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "AUDIOS MEDIA (VO VÝVOJI)",
    icon: "Music",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "IMAGES MEDIA (VO VÝVOJI)",
    icon: "Image",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "DOCUMENTS MEDIA (VO VÝVOJI)",
    icon: "FileText",
    url: "#",
    inDevelopment: true,
  },
  {
    label: "APPS MEDIA (VO VÝVOJI)",
    icon: "Grid",
    url: "#",
    inDevelopment: true,
  },
];

// ============================================================================
// 🚪 4. GLOBÁLNA PÄTKA A CENTRÁLNY NEXUS NET (Logout Gateway & B2B)
// ============================================================================
export const LOGOUT_NEXUS_NAV = [
  {
    isDivider: true,
    label: "🚪 4. GLOBÁLNA PÄTKA ODHLÁSENIA\n(Logout Gateway) A NEXUS NET",
  },
  {
    label: "🏢 NEXUS AGENCY DIGITAL INFRASTRUCTURE",
    url: "https://agency.projekt-nexus.sk/",
    icon: "Building2",
    isExternal: true,
    isLiveNode: true,
  },
  {
    label: "🏢 NEXUS SUBDOMÉNY MATRIX (16 Satelitov)",
    url: "https://subdomens.projekt-nexus.sk/",
    icon: "Layers",
    isExternal: true,
    isLiveNode: true,
  },
  {
    label: "🏢 PROJEKT NEXUS OS: GENESIS EDITION",
    url: "https://projekt-nexus.sk/",
    icon: "Globe",
    isExternal: true,
    isLiveNode: true,
  },
  {
    label: "ODHLÁSIŤ SA (VO VÝVOJI)",
    icon: "LogOut",
    url: "#",
    inDevelopment: true,
  },
];

// ============================================================================
// 👑 5. TIER NAVIGÁCIA PRE OBCHOD OS GENESIS (Súrodenci)
// ============================================================================
export const getTierNav = (siblingPath = "shop") => [
  { isDivider: true, label: "👑 TIER ÚROVNE PRÍSTUPU" },
  {
    label: "VŠETKY TIERY (VO VÝVOJI)",
    url: "#",
    icon: "Layers",
    inDevelopment: true,
  },
  {
    label: "FREE TIER (VO VÝVOJI)",
    url: "#",
    icon: "Shield",
    inDevelopment: true,
  },
  {
    label: "PROMIUM TIER (VO VÝVOJI)",
    url: "#",
    icon: "Zap",
    inDevelopment: true,
  },
  {
    label: "OMEGAMIUM TIER (VO VÝVOJI)",
    url: "#",
    icon: "Key",
    inDevelopment: true,
  },
  {
    label: "MASTERMIUM ARCHITECT (VO VÝVOJI)",
    url: "#",
    icon: "Crown",
    inDevelopment: true,
  },
];

// ============================================================================
// 🌐 6. B2B AGENTÚRNE SEKTORY & TIER FILTER (100% SSOT GROUNDED MATCH)
// ============================================================================

// ⚡⚡⚡ ZAČIATOK OPRAVA: EXAKTNÉ KĽÚČE PODĽA AGENCY_FILTERS_CONFIG ⚡⚡⚡
export const AGENCY_SECTORS_MATRIX = [
  {
    isDivider: true,
    label: "💼 PRIMÁRNY FILTER (7 SEKTOROV SLUŽIEB)",
  },
  {
    id: "ALL_SERVICES",
    sectorId: "ALL",
    label: "VŠETKY SLUŽBY",
    badgeCount: 18,
    url: "/agency",
    icon: "Globe",
    themeColor: "#00F3FF",
    isFilterAction: true,
  },
  {
    id: "SEC_01",
    sectorId: "srv-01-web",
    label: "01. WEB & FRONT-END",
    badgeCount: 2,
    url: "/agency?cat=srv-01-web",
    icon: "Laptop",
    themeColor: "#00F3FF",
    isFilterAction: true,
  },
  {
    id: "SEC_02",
    sectorId: "srv-02-data",
    label: "02. DÁTA & ADMINISTRATÍVA",
    badgeCount: 2,
    url: "/agency?cat=srv-02-data",
    icon: "Cpu",
    themeColor: "#38bdf8",
    isFilterAction: true,
  },
  {
    id: "SEC_03",
    sectorId: "srv-03-copy",
    label: "03. OBSAH & COPYWRITING",
    badgeCount: 3,
    url: "/agency?cat=srv-03-copy",
    icon: "FileText",
    themeColor: "#818cf8",
    isFilterAction: true,
  },
  {
    id: "SEC_04",
    sectorId: "srv-04-video",
    label: "04. MULTIMÉDIÁ & VIDEO",
    badgeCount: 1,
    url: "/agency?cat=srv-04-video",
    icon: "Video",
    themeColor: "#c084fc",
    isFilterAction: true,
  },
  {
    id: "SEC_05",
    sectorId: "srv-05-gaming",
    label: "05. GAMING MASTERMINDS",
    badgeCount: 3,
    url: "/agency?cat=srv-05-gaming",
    icon: "Crown",
    themeColor: "#f43f5e",
    isFilterAction: true,
  },
  {
    id: "SEC_06",
    sectorId: "srv-06-dev",
    label: "06. VÝVOJ SOFTVÉRU & FRANŠÍZA",
    badgeCount: 2,
    url: "/agency?cat=srv-06-dev",
    icon: "Layers",
    themeColor: "#fb923c",
    isFilterAction: true,
  },
  {
    id: "SEC_07",
    sectorId: "srv-07-enterprise",
    label: "07. APPS, MEDIA & ENTERPRISE",
    badgeCount: 5,
    url: "/agency?cat=srv-07-enterprise",
    icon: "Terminal",
    themeColor: "#eab308",
    isFilterAction: true,
  },

  
];

export const SUBDOMAINS_DROPDOWN_MATRIX = AGENCY_SECTORS_MATRIX;

// Helper: Generátor lokálnej navigácie pre ľubovoľnú subdoménu SUB00 - SUB15
const createSubdomainNav = (subId, subName, themeColor, defaultIcon) => [
  { isDivider: true, label: "🏠 KOREŇOVÁ NÁSTENKA" },
  {
    id: "HOME",
    label: "← SPÄŤ NA HLAVNÚ NÁSTENKU (HOME)",
    icon: "Home",
    url: "/home",
    isExternal: false,
    isLiveNode: true,
  },

  { isDivider: true, label: "SYSTÉM & PRÁVNE DÁTA" },
  {
    label: "VOP // PODMIENKY",
    icon: "FileText",
    url: "/vop",
    isExternal: false,
  },
  {
    label: "GDPR // SÚKROMIE",
    icon: "Lock",
    url: "/privacy",
    isExternal: false,
  },

  { isDivider: true, label: `${subId} - ${subName} (NAVIGÁCIA)` },
  {
    label: "UZOL 01: VSTUPNÝ RECEPTOR",
    icon: defaultIcon || "Compass",
    url: `/${subId}?node=${subId}-01`,
    inDevelopment: true,
  },
  {
    label: "UZOL 02: SYSTÉMOVÁ DIAGNOSTIKA",
    icon: "ShieldCheck",
    url: `/${subId}?node=${subId}-02`,
    inDevelopment: true,
  },
  {
    label: "UZOL 03: DÁTOVÉ TOKY & FREKVENCIA",
    icon: "Activity",
    url: `/${subId}?node=${subId}-03`,
    inDevelopment: true,
  },
  {
    label: "UZOL 04: ARCHITEKTÚRA PROCESOV",
    icon: "Briefcase",
    url: `/${subId}?node=${subId}-04`,
    inDevelopment: true,
  },
  {
    label: "UZOL 05: VÝSTUPNÝ TERMINÁL",
    icon: "TrendingUp",
    url: `/${subId}?node=${subId}-05`,
    inDevelopment: true,
  },

  // 16 Kognitívnych Subdomén (už má svoj divider, žiadny prázdny pred neho nedávame!)
  ...SUBDOMAINS_DROPDOWN_MATRIX,
  ...TRIPLE_USER_NAV,
  ...GLOBAL_NEXUS_NAV,
  ...SHOP_MEDIA_NAV,
  ...LOGOUT_NEXUS_NAV,
];

// ============================================================================
// 🍔 HLAVNÁ DÁTOVÁ ŠTRUKTÚRA HAMBURGER MENU (HAMBURGER_MENU_DATA)
// ============================================================================
export const HAMBURGER_MENU_DATA = {
  // 1. 🍔 Uplink Modal
  uplink: [
    { isDivider: true, label: "NEXUS UPLINK (MODAL)" },
    {
      label: "OS Genesis Trailer (Vo vývoji)",
      icon: "PlayCircle",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "System Tiers (Vo vývoji)",
      icon: "Layers",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Bezpečnostný Protokol (Vo vývoji)",
      icon: "Shield",
      url: "#",
      inDevelopment: true,
    },
    ...SUBDOMAINS_DROPDOWN_MATRIX,
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 2. 🍔 HomePage
  home: [
    { isDivider: true, label: "🏠 KOREŇOVÁ NÁSTENKA" },
  {
    id: "HOME",
    label: "← SPÄŤ NA HLAVNÚ NÁSTENKU (HOME)",
    icon: "Home",
    url: "/home",
    isExternal: false,
    isLiveNode: true,
  },

    { isDivider: true, label: "SYSTÉM & PRÁVNE DÁTA" },
    {
      label: "VOP // PODMIENKY",
      icon: "FileText",
      url: "/vop",
      isExternal: false,
    },
    {
      label: "GDPR // SÚKROMIE",
      icon: "Lock",
      url: "/privacy",
      isExternal: false,
    },

    ...SUBDOMAINS_DROPDOWN_MATRIX,
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 3. 🍔 16 Kognitívnych Subdomén (SUB00 - SUB15)
  SUB00: createSubdomainNav("SUB00", "MENTOR-HUB", "#FFFFFF", "Bot"),
  SUB01: createSubdomainNav("SUB01", "IDENTITY-CORE", "#39FF14", "UserCheck"),
  SUB02: createSubdomainNav("SUB02", "THE-WORKFLOW", "#FFEB3B", "Cpu"),
  SUB03: createSubdomainNav("SUB03", "CASH-ENGINE", "#FFD700", "Coins"),
  SUB04: createSubdomainNav(
    "SUB04",
    "REVENUE-ARCHITECT",
    "#FFAA00",
    "Briefcase",
  ),
  SUB05: createSubdomainNav("SUB05", "ASSETS-MATRIX", "#FF8C00", "TrendingUp"),
  SUB06: createSubdomainNav("SUB06", "DATA-ABSORBER", "#BF00FF", "Database"),
  SUB07: createSubdomainNav("SUB07", "SKILLS-TREE", "#8A2BE2", "GitBranch"),
  SUB08: createSubdomainNav("SUB08", "EMPTY-BOOK", "#00FFFF", "BookOpen"),
  SUB09: createSubdomainNav("SUB09", "SERGEANT-CORE", "#FF003C", "Gamepad2"),
  SUB10: createSubdomainNav(
    "SUB10",
    "NONIDENTITY-CORE",
    "#0044FF",
    "HeartHandshake",
  ),
  SUB11: createSubdomainNav("SUB11", "THE-RECOVERY", "#FFBF00", "Activity"),
  SUB12: createSubdomainNav("SUB12", "NEXUS-CODEX", "#00E5FF", "FileCode"),
  SUB13: createSubdomainNav("SUB13", "NEXUS-HABITS", "#00008B", "CheckSquare"),
  SUB14: createSubdomainNav("SUB14", "NEXUS-BLOG", "#FF1493", "MessageSquare"),
  SUB15: createSubdomainNav("SUB15", "DEATH-CORE", "#4A4A4A", "Skull"),

  // 4. 🍔 BlogPage
  blog: [
    { isDivider: true, label: "1. SEKCIA - EDITOR (VO VÝVOJI)" },
    {
      label: "Nový Príspevok (Vo vývoji)",
      icon: "PenTool",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Koncepty & Drafty (Vo vývoji)",
      icon: "FileEdit",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "2. SEKCIA - RADAR A FILTRE" },
    {
      label: "Nové Signály (Vo vývoji)",
      icon: "Bell",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Vyhľadávanie (Vo vývoji)",
      icon: "Search",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "3. SEKCIA - KATALÓG (MAPY)" },
    {
      label: "Topic Maps (Vo vývoji)",
      icon: "Globe",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Moje Témy (Vo vývoji)",
      icon: "User",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "4. SEKCIA - SIGNÁLY (FEED)" },
    {
      label: "Všetky Signály (Vo vývoji)",
      icon: "List",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Moje Signály (Vo vývoji)",
      icon: "UserCheck",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Komentáre & Vlákna (Vo vývoji)",
      icon: "MessageSquare",
      url: "#",
      inDevelopment: true,
    },
    ...SUBDOMAINS_DROPDOWN_MATRIX,
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 5. 🍔 OperatorsPage
  operators: [
    { isDivider: true, label: "SIEŤ ENTÍT (RADAR)" },
    {
      label: "Zoznam Operátorov (Vo vývoji)",
      icon: "Users",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Online Operátori (Vo vývoji)",
      icon: "Wifi",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Vyhľadávanie v Sieti (Vo vývoji)",
      icon: "Search",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "MATRIX SÚŤAŽ" },
    {
      label: "Matrix Leaderboard (Vo vývoji)",
      icon: "Trophy",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Mesačný Rebríček (Vo vývoji)",
      icon: "Award",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Kódex Súťaží (Vo vývoji)",
      icon: "Crown",
      url: "#",
      inDevelopment: true,
    },
    ...SUBDOMAINS_DROPDOWN_MATRIX,
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 6. 🍔 SettingsPage
  settings: [
    { isDivider: true, label: "REGISTRAČNÉ ÚDAJE" },
    {
      label: "Užívateľ & Meno (Vo vývoji)",
      icon: "User",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Heslo a Bezpečnosť (Vo vývoji)",
      icon: "Key",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "LOGIN A PREPOJENIE" },
    {
      label: "Google & OAuth Mosty (Vo vývoji)",
      icon: "Link",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "DOSSIER EDITOR" },
    {
      label: "Sémantické Dossier (Vo vývoji)",
      icon: "FileText",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Avatar & Vizuálna Identita (Vo vývoji)",
      icon: "Bot",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "ZDRAVOTNÝ STAV" },
    {
      label: "Biohacking & Stav Skafandra (Vo vývoji)",
      icon: "HeartPulse",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "CONTACT FIELD" },
    {
      label: "E-mail Routing & Kontakty (Vo vývoji)",
      icon: "Share2",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "PEŇAŽENKA" },
    {
      label: "Peňaženka & Cloud Balance (Vo vývoji)",
      icon: "Wallet",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "OPRÁVNENIA" },
    {
      label: "Auth Matrix & TIER Práva (Vo vývoji)",
      icon: "ShieldCheck",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "NOTIFIKÁCIE & ADMIN" },
    {
      label: "Systémové Notifikácie (Vo vývoji)",
      icon: "Bell",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Správa Siete Admin (Vo vývoji)",
      icon: "Users",
      url: "#",
      inDevelopment: true,
    },
    ...SUBDOMAINS_DROPDOWN_MATRIX,
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 7. 🍔 AdminPage
  admin: [
    { isDivider: true, label: "DASHBOARD" },
    {
      label: "Hlavný Prehľad (Vo vývoji)",
      icon: "Layout",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Analytika Systému (Vo vývoji)",
      icon: "Activity",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "OPERATOR CONTROL" },
    {
      label: "Správa Entít (Vo vývoji)",
      icon: "Users",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Povýšenia & Bány (Vo vývoji)",
      icon: "ShieldAlert",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "DB MANAGEMENT" },
    {
      label: "Cloud Limity & Storage (Vo vývoji)",
      icon: "HardDrive",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Konzistencia Registrov (Vo vývoji)",
      icon: "Database",
      url: "#",
      inDevelopment: true,
    },
    { isDivider: true, label: "SYSTEM LOGS" },
    {
      label: "Živé Systémové Logy (Vo vývoji)",
      icon: "Terminal",
      url: "#",
      inDevelopment: true,
    },
    ...SUBDOMAINS_DROPDOWN_MATRIX,
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 8. 🍔 GlobalProfil
  profil: [
    { isDivider: true, label: "PROFIL OPERÁTORA" },
    {
      label: "Základné Údaje (Vo vývoji)",
      icon: "User",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Zdravotný Stav (Vo vývoji)",
      icon: "HeartPulse",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Verejné Kontakty Siete (Vo vývoji)",
      icon: "Share2",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Sémantické Dossier (Vo vývoji)",
      icon: "FileText",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Klientske Prístupy (Vo vývoji)",
      icon: "Key",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Trofeje & Súťažné Body (Vo vývoji)",
      icon: "Trophy",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Aktivita v Sieti (Vo vývoji)",
      icon: "Activity",
      url: "#",
      inDevelopment: true,
    },
    ...SUBDOMAINS_DROPDOWN_MATRIX,
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 9. 🍔 GlobalMessages
  messages: [
    { isDivider: true, label: "KOMUNIKAČNÝ TERMINÁL" },
    {
      label: "Prijaté Správy Inbox (Vo vývoji)",
      icon: "Inbox",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Nová Správa Compose (Vo vývoji)",
      icon: "PenTool",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Odoslané Správy Sent (Vo vývoji)",
      icon: "Send",
      url: "#",
      inDevelopment: true,
    },
    {
      label: "Archív Správ (Vo vývoji)",
      icon: "Archive",
      url: "#",
      inDevelopment: true,
    },
    ...SUBDOMAINS_DROPDOWN_MATRIX,
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],
};

export default HAMBURGER_MENU_DATA;
