// Tailwind CSS Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#FF4500',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        background: {
          dark: '#0F172A',
          light: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 6s steps(20) infinite, blink .7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typing: {
          '0%': {
            width: '0%',
            visibility: 'visible'
          },
          '33%': {
            width: '100%'
          },
          '66%': {
            width: '100%'
          },
          '100%': {
            width: '0%'
          }
        },
        blink: {
          '50%': {
            borderColor: 'transparent'
          },
          '100%': {
            borderColor: 'white'
          }
        }
      },
    },
  },
}