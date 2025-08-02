import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],          // Theme 1
        serif: ["serif"],              // Theme 2
        cursive: ["Pacifico", "cursive"], //Theme3
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
