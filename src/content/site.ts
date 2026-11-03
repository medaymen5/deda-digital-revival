// Brand-level facts taken from deda.tn.
export const SITE = {
  name: "Maison DEDA",
  instagram: "https://www.instagram.com/my.deda/",
  instagramHandle: "@my.deda",
  shipsFrom: "Kelibia, Tunisia",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Story" },
  { to: "/heritage", label: "Heritage" },
  { to: "/shop", label: "Shop" },
  { to: "/artisans", label: "Artisans" },
  { to: "/process", label: "Process" },
  { to: "/ethics", label: "Ethics" },
] as const;
