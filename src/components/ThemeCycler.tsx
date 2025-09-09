import { useEffect } from "react";

type Theme = {
  name: string;
  primary: string; // H S L
  accent: string; // H S L
  background: string; // H S L
  foreground: string; // H S L
  card: string; // H S L
  popover: string; // H S L
  secondary: string; // H S L
  muted: string; // H S L
  mutedFg: string; // H S L
  border: string; // H S L
  input: string; // H S L
  gradientPrimary: string; // H S L
  gradientSecondary: string; // H S L
  gradientAccent: string; // H S L
  ring?: string; // H S L
};

const THEMES: Theme[] = [
  // Obsidian Gold
  {
    name: "obsidian-gold",
    background: "225 12% 5%",
    foreground: "0 0% 96%",
    card: "225 10% 7%",
    popover: "225 10% 7%",
    primary: "46 90% 60%",
    accent: "38 85% 58%",
    secondary: "225 8% 12%",
    muted: "225 8% 14%",
    mutedFg: "240 4% 60%",
    border: "225 9% 18%",
    input: "225 9% 18%",
    gradientPrimary: "46 90% 60%",
    gradientSecondary: "38 85% 58%",
    gradientAccent: "50 90% 60%",
    ring: "46 90% 60%",
  },
  // Champagne Noir
  {
    name: "champagne-noir",
    background: "230 12% 7%",
    foreground: "0 0% 96%",
    card: "230 12% 9%",
    popover: "230 12% 9%",
    primary: "42 70% 72%",
    accent: "28 70% 65%",
    secondary: "230 10% 12%",
    muted: "230 10% 14%",
    mutedFg: "220 8% 65%",
    border: "230 12% 18%",
    input: "230 12% 18%",
    gradientPrimary: "42 70% 72%",
    gradientSecondary: "28 70% 65%",
    gradientAccent: "46 70% 68%",
    ring: "42 70% 72%",
  },
  // Royal Navy
  {
    name: "royal-navy",
    background: "230 45% 7%",
    foreground: "0 0% 96%",
    card: "230 35% 9%",
    popover: "230 35% 9%",
    primary: "220 80% 62%",
    accent: "260 60% 62%",
    secondary: "230 28% 14%",
    muted: "230 24% 16%",
    mutedFg: "220 10% 70%",
    border: "230 28% 22%",
    input: "230 28% 22%",
    gradientPrimary: "220 80% 62%",
    gradientSecondary: "245 65% 60%",
    gradientAccent: "260 60% 62%",
    ring: "220 80% 62%",
  },
  // Emerald Onyx
  {
    name: "emerald-onyx",
    background: "210 10% 6%",
    foreground: "0 0% 96%",
    card: "210 10% 8%",
    popover: "210 10% 8%",
    primary: "158 60% 52%",
    accent: "170 60% 55%",
    secondary: "210 8% 12%",
    muted: "210 8% 14%",
    mutedFg: "210 6% 68%",
    border: "210 9% 18%",
    input: "210 9% 18%",
    gradientPrimary: "158 60% 52%",
    gradientSecondary: "170 60% 55%",
    gradientAccent: "150 65% 55%",
    ring: "158 60% 52%",
  },
  // Amethyst Slate
  {
    name: "amethyst-slate",
    background: "240 18% 8%",
    foreground: "0 0% 96%",
    card: "240 16% 10%",
    popover: "240 16% 10%",
    primary: "275 65% 60%",
    accent: "300 60% 60%",
    secondary: "240 14% 14%",
    muted: "240 12% 16%",
    mutedFg: "240 10% 70%",
    border: "240 14% 22%",
    input: "240 14% 22%",
    gradientPrimary: "275 65% 60%",
    gradientSecondary: "300 60% 60%",
    gradientAccent: "285 70% 62%",
    ring: "275 65% 60%",
  },
  // Rose Gold Charcoal
  {
    name: "rose-charcoal",
    background: "230 12% 7%",
    foreground: "0 0% 96%",
    card: "230 12% 9%",
    popover: "230 12% 9%",
    primary: "12 70% 62%",
    accent: "350 55% 66%",
    secondary: "230 10% 12%",
    muted: "230 10% 14%",
    mutedFg: "220 8% 65%",
    border: "230 12% 18%",
    input: "230 12% 18%",
    gradientPrimary: "12 70% 62%",
    gradientSecondary: "350 55% 66%",
    gradientAccent: "20 70% 60%",
    ring: "12 70% 62%",
  },
];

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  root.style.setProperty("--background", t.background);
  root.style.setProperty("--foreground", t.foreground);
  root.style.setProperty("--card", t.card);
  root.style.setProperty("--card-foreground", t.foreground);
  root.style.setProperty("--popover", t.popover);
  root.style.setProperty("--popover-foreground", t.foreground);
  root.style.setProperty("--primary", t.primary);
  root.style.setProperty("--primary-foreground", "230 15% 8%");
  root.style.setProperty("--secondary", t.secondary);
  root.style.setProperty("--secondary-foreground", t.foreground);
  root.style.setProperty("--muted", t.muted);
  root.style.setProperty("--muted-foreground", t.mutedFg);
  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--accent-foreground", "230 15% 8%");
  root.style.setProperty("--destructive", "0 84% 60%");
  root.style.setProperty("--destructive-foreground", "0 0% 98%");
  root.style.setProperty("--border", t.border);
  root.style.setProperty("--input", t.input);
  root.style.setProperty("--ring", t.ring ?? t.primary);
  root.style.setProperty("--gradient-primary", t.gradientPrimary);
  root.style.setProperty("--gradient-secondary", t.gradientSecondary);
  root.style.setProperty("--gradient-accent", t.gradientAccent);
  // remove transition helper after it applies
  window.setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, 700);
}

export default function ThemeCycler({ intervalMs = 5000 }: { intervalMs?: number }) {
  useEffect(() => {
    let idx = 0;
    applyTheme(THEMES[idx]);
    const id = setInterval(() => {
      idx = (idx + 1) % THEMES.length;
      applyTheme(THEMES[idx]);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return null;
}
