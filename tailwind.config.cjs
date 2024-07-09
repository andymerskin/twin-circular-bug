const defaultTheme = require("tailwindcss/defaultTheme");

const transitionTimingFunction = {
  "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
  "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
  "in-quart": "cubic-bezier(0.5, 0, 0.75, 0)",
  "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
  "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
};

module.exports = {
  theme: {
    /**
     * Override Tailwind theme
     */
    screens: {
      ...defaultTheme.screens,
      "3xl": "1792px",
      "4xl": "2320px",
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: {
        DEFAULT: "#000000",
        ls: "#373636",
      },
      gray: {
        xlight: "#F4F7F9", // secondary.offWhite
        light: "#EAEAEA",
      },
      cyan: {
        xlight: "#EDF7FB",
        light: "#85E5FF",
        DEFAULT: "#4EB3D4",
        dark: "#0083A3",
      },
      blue: {
        light: "#405F77",
        DEFAULT: "#2D4354",
        dark: "#173042",
      },
      red: {
        xlight: "#FBEDED",
        light: "#FF9380",
        DEFAULT: "#F16153",
        dark: "#B92E2A",
      },
      grass: {
        light: "#AAFFB8",
        DEFAULT: "#7CD88B",
      },
      mint: {
        light: "#6AFFD9",
        DEFAULT: "#4ED4B2",
        dark: "#45BA9D",
      },
      mustard: {
        xlight: "#FEF9EC",
        light: "#FFE59E",
        DEFAULT: "#F7D77F",
      },
      orange: {
        light: "#FFBA70",
        DEFAULT: "#FFAB52",
      },
      sunny: {
        light: "#F4EE7F",
        DEFAULT: "#E1DB5F",
      },
      grape: {
        light: "#CDC5FF",
        DEFAULT: "#3D68D3",
      },
      strawberry: {
        light: "#F193A9",
        DEFAULT: "#EB6383",
      },
      offWhite: "#F4F7F9", // gray.xlight
      sky: "#DFEEF2",
      iron: "#A2ACB3",
      steel: "#626E76",
      darkBlue: "#173042",
    },
    boxShadow: {
      none: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      1: "0 2px 10px 0 rgba(23, 48, 66, 0.03), 0 2px 12px 0 rgba(23, 48, 66, 0.06)",
      // "2" and DEFAULT are the same
      2: "0 8px 24px 0 rgba(23, 48, 66, 0.04), 0 6px 12px 0 rgba(23, 48, 66, 0.08)",
      DEFAULT:
        "0 8px 24px 0 rgba(23, 48, 66, 0.04), 0 6px 12px 0 rgba(23, 48, 66, 0.08)",
      3: "0 18px 88px 0 rgba(23, 48, 66, 0.08), 0 8px 28px 0 rgba(23, 48, 66, 0.16)",
      glow: "0 8px 12px 0 rgba(78, 179, 212, 0.4)",
      nav: "4px 4px 12px 0 rgb(98, 110, 118, 0.4)",
    },
    spacing: {
      0: "0px",
      px: "1px", // 'px' is a Tailwind convention
      "2px": "2px", // 'px' is a Tailwind convention
      0.5: "4px",
      1: "8px", // base unit
      2: "16px",
      2.5: "20px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
      11: "88px",
      12: "96px",
      16: "128px",
      20: "160px",
      24: "192px",
      32: "256px",
      36: "288px",
      40: "320px",
      80: "640px",
      // add more as necessary and in between
    },
    fontFamily: {
      // Gotham
      sans: ["Gotham", "Arial", "Helvetica", "sans-serif"],
      mono: defaultTheme.fontFamily.mono,
    },
    fontSize: {
      // Headings / Mobile Headings
      h1: ["48px", "1.25em"],
      m1: ["40px", "1.25em"],
      h2: ["32px", "1.25em"],
      m2: ["24px", "1.25em"],
      h3: ["24px", "1.25em"],
      m3: ["20px", "1.25em"],

      // Body / Other
      body: ["18px", "1.333em"],
      label: ["16px", "1.5em"],
      caption: ["14px", "1.15em"],
      tiny: ["12px", "1.333em"],
      counter: ["10px", "1em"],

      // Webfont Icons, adapted from `spacing`
      "icon-1": "8px", // base unit
      "icon-2": "16px",
      "icon-2.5": "20px",
      "icon-3": "24px",
      "icon-4": "32px",
      "icon-5": "40px",
      "icon-6": "48px",
      "icon-7": "56px",
      "icon-8": "64px",
      "icon-9": "72px",
      "icon-10": "80px",
    },

    /**
     * Extend Tailwind theme
     */
    extend: {
      animation: {
        focus: `focus 0.3s ${transitionTimingFunction["out-quart"]}`,
        focusLg: `focusLg 0.3s ${transitionTimingFunction["out-quart"]}`,
        toastEnter: `toastEnter 0.3s ${transitionTimingFunction["out-quart"]} forwards`,
        toastLeave: `toastLeave 0.3s forwards ${transitionTimingFunction["out-quart"]}`,
        alertEnter: `alertEnter 0.3s backwards 0.6s ${transitionTimingFunction["out-quart"]}`,
        spin: `spin 15s forwards infinite linear`,
      },
      keyframes: {
        focus: {
          from: {
            transform: "scale(1.2)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        focusLg: {
          from: {
            transform: "scale(1.5)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        toastEnter: {
          from: {
            transform: "translate3d(0,-200%,0) scale(0.6)",
            opacity: 0,
          },
          to: {
            transform: "translate3d(0,0,0) scale(1)",
            opacity: 1,
          },
        },
        toastLeave: {
          from: {
            transform: "translate3d(0,0,-1) scale(1)",
            opacity: 1,
          },
          to: {
            transform: "translate3d(0,-150%,-1px) scale(0.6)",
            opacity: 0,
          },
        },
        alertEnter: {
          from: {
            transform: "scale(0.9)",
            opacity: 0,
          },
          to: {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      rotate: {
        270: "270deg",
        360: "360deg",
        "-270": "-270deg",
        "-360": "-360deg",
      },
      scale: {
        25: "0.25",
      },
      transitionTimingFunction,
      zIndex: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
      },
    },
  },
  plugins: [],
};
