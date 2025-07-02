/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Main purple color
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        secondary: { // Shades of white/gray for background and text
          50: '#ffffff',    // Pure white
          100: '#f7fafc',   // Off-white
          200: '#edf2f7',   // Light gray
          300: '#e2e8f0',   // Gray
          400: '#cbd5e1',   // Medium gray
          500: '#a0aec0',   // Dark gray
          600: '#718096',   // Darker gray
          700: '#4a5568',   // Very dark gray
          800: '#2d3748',   // Almost black
          900: '#1a202c',   // Black
          950: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
