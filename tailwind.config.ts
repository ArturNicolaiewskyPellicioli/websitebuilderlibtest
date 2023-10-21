import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      colors: {
        "color1A": "#4b5563",
        "color1B": "#111827",
        "color1C": "#374151",
        "color1D": "#9ca3af",
        "color1E": "#f9fafb",
        "color1F": "#f3f4f6",
        "color1G": "#d1d5db",
        "color1H": "#6b7280",
        "color1I": "#e5e7eb",

        "color2A": "#ffffff",

        "color3A": "#4f46e5",
        "color3B": "#6366f1",
      },
    },
  },
}
export default config
