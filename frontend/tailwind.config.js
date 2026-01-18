/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
  sora: ['Sora-Regular', 'sans-serif'],
  'sora-light': ['Sora-Light', 'sans-serif'],
  'sora-medium': ['Sora-Medium', 'sans-serif'],
  'sora-semibold': ['Sora-SemiBold', 'sans-serif'],
  'sora-bold': ['Sora-Bold', 'sans-serif'],
  'sora-extrabold': ['Sora-ExtraBold', 'sans-serif'],
  'sora-thin': ['Sora-Thin', 'sans-serif'],
  'sora-variable': ['Sora-Variable', 'sans-serif'],

  'spacegrotesk-regular': ['SpaceGrotesk-Regular', 'sans-serif'],
  'spacegrotesk-light': ['SpaceGrotesk-Light', 'sans-serif'],
  'spacegrotesk-medium': ['SpaceGrotesk-Medium', 'sans-serif'],
  'spacegrotesk-bold': ['SpaceGrotesk-Bold', 'sans-serif'],
},
    },
  },
  plugins: [],
}

