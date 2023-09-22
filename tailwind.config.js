/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    xs: "30px",
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },
  extend: {
    backgroundImage: {
      loginBackdrop: " linear-gradient(180deg, rgba(12, 131, 126, 0.94) 0%, rgba(0, 39, 38, 0.94) 100%, rgba(15, 177, 170, 0.94) 100%), url('/src/assets/images/heroLogin.jpg')",

      sideGradient: "url(/src/assets/gradients/sideGradient.png)"

    },
    backgroundPosition: {
      left_center: '0px -270.559px'
    },
    backgroundSize: {
      hero_size: ' 100% 229.145%'
    },
    zIndex: {
      9999: "9999",
    },
    height: {
      112: "28rem",
      116: "30rem",
      120: "32rem",
      124: "34rem",
      136: "40rem",
      148: "46rem",
      152: "48rem",
    },
    width: {
      90: "22.5rem",
      112: "28rem",
      116: "30rem",
      120: "32rem",
      124: "34rem",
      136: "40rem",
      148: "46rem",
      152: "48rem",
    },
    colors: {
      primary: "#003937",
      "light-green-200": "#EEFAF9",
      "light-green-100": "#0C837E",
      "light-green-50": "#0FB1AA",
      "light-gray-100": "#1F1F1F",
      "light-gray-200": "#8B909A"
    },
  },
};
export const plugins = [
  // require('@tailwindcss/forms'),
];


