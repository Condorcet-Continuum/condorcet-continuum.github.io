/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Nos couleurs personnalisées "Condorcet R.A.I.S.E."
        rust: {
          DEFAULT: '#ea580c', // Orange Rust officiel
          light: '#ffedd5',
        },
        logic: {
          DEFAULT: '#2563eb', // Bleu Condorcet (Décision)
          light: '#dbeafe',
        },
        ethics: {
          DEFAULT: '#7c3aed', // Violet Blockchain (Sur-Moi)
          light: '#f3e8ff',
        },
        slate: {
          850: '#1e293b', // Fond sombre "Engineering"
          900: '#0f172a',
        },
      },
      fontFamily: {
        // On utilisera ces noms dans les classes: font-sans, font-mono
        sans: ['Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Pour rendre les articles de blog jolis automatiquement
  ],
};
