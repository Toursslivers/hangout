module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
        10.5: '2.625rem',
        13: '3.25rem',
        18: '4.5rem',
        27.5: '6.875rem',
        34: '8.5rem',
        55: '13.75rem',
        95: '23.75rem',
        100: '25rem',
        102: '25.5rem',
        110: '27.5rem',
        120: '30rem',
        170: '42.5rem',
        196: '49rem',
      },
      colors: {
        'interactive-normal': '#b9bbbe',
        'interactive-hover': '#dcddde',
        muted: '#72767d',
        'header-primary': '#fff',
        'header-secondary': '#b9bbbe',
        'header-primary-light': '#060607',
        danger: '#ed4245',
        invite: '#72767d',
      },
      backgroundColor: {
        background: '#fdd716',
        'notFound-bg': '#f6f6f7',
        tertiary: '#202225',
        secondary: '#2f3136',
        primary: '#36393f',
        'modifier-selected': 'rgba(79,84,92,0.32)',
        'message-bar': '#5564e9',
        accent: '#4f545c',
        'text-normal': '#dcddde',
        'quite-black': '#23272a',
        brand: '#5865f2',
        'text-input-bg': '#313338',
        'saturation-factor': '#3ba55d',
        'header-secondary': '#b9bbbe',
      },
      borderColor: {
        danger: '#ed4245',
      },
      cursor: {
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
