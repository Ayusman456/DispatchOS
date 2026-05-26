/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        // IBM Design System Colors
        'ibm-primary': '#0f62fe',           // IBM Blue
        'ibm-blue-60': '#0043ce',
        'ibm-blue-80': '#002d9c',
        'ibm-blue-hover': '#0050e6',
        'ibm-ink': '#161616',               // Charcoal
        'ibm-ink-muted': '#525252',
        'ibm-ink-subtle': '#8c8c8c',
        'ibm-canvas': '#ffffff',            // White
        'ibm-surface-1': '#f4f4f4',         // Light gray
        'ibm-surface-2': '#e0e0e0',         // Slightly darker gray
        'ibm-hairline': '#e0e0e0',
        'ibm-hairline-strong': '#161616',
        'ibm-inverse-canvas': '#161616',    // Charcoal for footer
        'ibm-inverse-surface-1': '#262626',
        'ibm-inverse-ink': '#ffffff',
        'ibm-inverse-ink-muted': '#c6c6c6',
        // Semantic colors
        'ibm-success': '#24a148',
        'ibm-warning': '#f1c21b',
        'ibm-error': '#da1e28',
        'ibm-info': '#0f62fe',              // Same as primary
      },
      spacing: {
        'xxs': '4px',
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'section': '96px',
      },
      borderRadius: {
        'none': '0px',
        'xs': '2px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'pill': '9999px',
        'full': '9999px',
      },
      // Letter spacing for body text (Carbon precision)
      letterSpacing: {
        'tight': '-0.5px',
        'normal': '0px',
        'wide': '0.16px',   // IBM/Carbon body letter spacing
      },
      lineHeight: {
        'tight': '1.17',
        'normal': '1.50',
        'display': '1.17',
        'heading': '1.25',
        'body': '1.50',
      },
      // Font weights
      fontWeight: {
        'light': '300',     // IBM Plex Sans light for display
        'normal': '400',    // Regular
        'medium': '500',
        'semibold': '600',  // For emphasis
        'bold': '700',
      },
      // Font sizes matching DESIGN.md typography
      fontSize: {
        'display-xl': '76px',
        'display-lg': '60px',
        'display-md': '42px',
        'headline': '32px',
        'card-title': '24px',
        'subhead': '20px',
        'body-lg': '18px',
        'body': '16px',
        'body-sm': '14px',
        'caption': '12px',
        'button': '14px',
        'eyebrow': '14px',
      },
    },
  },
  plugins: [],
}
