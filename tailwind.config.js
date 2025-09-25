/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        inasal: {
          // Primary colors - inspired by Filipino flag and grilled chicken
          red: '#E53E3E',        // Vibrant red like Philippine flag
          orange: '#FF6B35',     // Grilled chicken orange
          yellow: '#FFD700',     // Golden yellow for highlights
          
          // Secondary colors - warm and inviting
          brown: '#8B4513',      // Rich brown like grilled meat
          dark: '#2D1B1B',       // Deep brown-black
          cream: '#FFF8DC',      // Warm cream
          beige: '#F5E6D3',      // Light beige
          
          // Accent colors
          green: '#22C55E',      // Fresh green for vegetables
          blue: '#3B82F6',       // Cool blue for contrast
          purple: '#8B5CF6',     // Royal purple for premium items
          
          // Neutral colors
          gray: '#6B7280',
          lightGray: '#F3F4F6',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
        'noto-kr': ['Noto Serif KR', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-6px)' },
          '60%': { transform: 'translateY(-3px)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      boxShadow: {
        'inasal': '0 4px 20px rgba(255, 107, 53, 0.15)',
        'inasal-lg': '0 10px 40px rgba(255, 107, 53, 0.2)',
        'inasal-xl': '0 20px 60px rgba(255, 107, 53, 0.25)'
      },
      backgroundImage: {
        'gradient-inasal': 'linear-gradient(135deg, #FF6B35 0%, #E53E3E 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFF8DC 0%, #F5E6D3 100%)',
        'gradient-grilled': 'linear-gradient(135deg, #8B4513 0%, #FF6B35 100%)'
      }
    },
  },
  plugins: [],
};