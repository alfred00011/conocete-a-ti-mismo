/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Poppins','Arial', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        256: '86rem'
      },
      width: {
        20: '6rem'
      }
    }
    
  },
  plugins: [],
}

