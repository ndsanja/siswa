module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          lighter: "#C8FACD",
          light: "#5BE584",
          main: "#00AB55",
          dark: "#007B55",
          darker: "#005249",
        },
        info: {
          lighter: "#D0F2FF",
          light: "#74CAFF",
          main: "#1890FF",
          dark: "#0C53B7",
          darker: "#04297A",
        },
        success: {
          lighter: "#E9FCD4",
          light: "#AAF27F",
          main: "#54D62C",
          dark: "#229A16",
          darker: "#08660D",
        },
        warning: {
          lighter: "#FFF7CD",
          light: "#FFE16A",
          main: "#FFC107",
          dark: "#B78103",
          darker: "#7A4F01",
        },
        error: {
          lighter: "#FFE7D9",
          light: "#FFA48D",
          main: "#FF4842",
          dark: "#B72136",
          darker: "#7A0C2E",
        },
        grey: {
          100: "#F9FAFB",
          200: "#F4F6F8",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#212B36",
          900: "#161C24",
        },
        "textColor-primary-dark": "#ffffff",
        "textColor-secondary-dark": "#919EAB",
        "textColor-disabled-dark": "#637381",
        "textColor-primary-light": "#212B36",
        "textColor-secondary-light": "#637381",
        "textColor-disabled-light": "#919EAB",
      },
      boxShadow: {
        "z1-dark-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.24)",
        "z8-dark-shadow": "0 8px 16px 0 rgba(0, 0, 0, 0.24)",
        "z12-dark-shadow":
          "0 0 2px 0 rgba(0, 0, 0, 0.24), 0 12px 24px 0 rgba(0, 0, 0, 0.24)",
        "z16-dark-shadow":
          "0 0 2px 0 rgba(0, 0, 0, 0.24), 0 16px 32px -4px rgba(0, 0, 0, 0.24)",
        "z20-dark-shadow":
          "0 0 2px 0 rgba(0, 0, 0, 0.24), 0 20 40 -4px rgba(0, 0, 0, 0.24)",
        "z24-dark-shadow":
          "0 0 4px 0 rgba(0, 0, 0, 0.24), 0 24px 48px 0 rgba(0, 0, 0, 0.24)",
        "info-dark-shadow": "0 8px 16px 0 rgba(24, 144, 255, 0.24)",
        "success-dark-shadow": "0 8px 16px 0 rgba(84, 214, 44, 0.24)",
        "warning-dark-shadow": "0 8px 16px 0 rgba(255, 193, 7, 0.24)",
        "error-dark-shadow": "0 8px 16px 0 rgba(255, 72, 66, 0.24)",
        "z1-light-shadow": "0 1px 2px 0 rgba(145, 158, 171, 0.24)",
        "z8-light-shadow": "0 8px 16px 0 rgba(145, 158, 171, 0.24)",
        "z12-light-shadow":
          "0 0 2px 0 rgba(145, 158, 171, 0.24), 0 12px 24px 0 rgba(145, 158, 171, 0.24)",
        "z16-light-shadow":
          "0 0 2px 0 rgba(145, 158, 171, 0.24), 0 16px 32px -4px rgba(145, 158, 171, 0.24)",
        "z20-light-shadow":
          "0 0 2px 0 rgba(145, 158, 171, 0.24), 0 20 40 -4px rgba(145, 158, 171, 0.24)",
        "z24-light-shadow":
          "0 0 4px 0 rgba(145, 158, 171, 0.24), 0 24px 48px 0 rgba(145, 158, 171, 0.24)",
        "info-light-shadow": "0 8px 16px 0 rgba(24, 144, 255, 0.24)",
        "success-light-shadow": "0 8px 16px 0 rgba(84, 214, 44, 0.24)",
        "warning-light-shadow": "0 8px 16px 0 rgba(255, 193, 7, 0.24)",
        "error-light-shadow": "0 8px 16px 0 rgba(255, 72, 66, 0.24)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
