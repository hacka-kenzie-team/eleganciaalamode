import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxo': "url('/backgrounds/bg-resumo-luxo.png')",
      },
      boxShadow: {
        'white': '0px 0px 4px 2px rgba(61,61,61,0.41)',
      },
      backgroundColor: {
        'ewhite': '#C7C9C6',
        'egray': '#3D3D3D'
      },
      textColor: {
        'ewhite': '#C7C9C6',
        'egray': '#3D3D3D'
      },
    },
  },
  plugins: [],
}
export default config
