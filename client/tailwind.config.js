/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beatlan: {
          yellow: '#FDB927',
          orange: '#F05A28',
          teal: '#1E9086',
          green: '#8CC63F',
          dark: '#0A0A0A',
          light: '#FDFCF6'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        beatlan: ['"Beatlan"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        anton: ['"Anton"', 'sans-serif'],
        sans: ['"Avenir"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        // Neo-brutalist flat shadows
        'flat': '4px 4px 0px 0px rgba(10,10,10,1)',
        'flat-lg': '8px 8px 0px 0px rgba(10,10,10,1)',
      },
    },
  },
  plugins: [],
}
