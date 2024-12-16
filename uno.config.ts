import type { Theme } from 'unocss/preset-uno'
import { presetUno, type PresetOrFactoryAwaitable } from 'unocss'
import presetTheme from 'unocss-preset-theme'
import { defineConfig } from 'unocss'

const lightTheme: Theme = {
  colors: {
    global: '#f0f2f4',
    normal: '#ffffff',
    textPrim: '#4c4948',
    textDesc: '#858585',
    linePrim: '#ccc',
  },
}

const darkTheme: Theme = {
  colors: {
    global: '#191919',
    normal: '#1e1e1f',
    textPrim: '#c9c9d7',
    textDesc: '#777777',
    linePrim: '#404040',
  }
}

export default defineConfig({
  theme: {
    ...lightTheme,
    animation: {
      keyframes: {
        'move-up': `{0% {transform:translateY(40px);opacity:0} 100% {transform: translateY(0);opacity:1}}`,
        'move-up-sm': `{0% {transform:translateY(20px);opacity:0} 100% {transform: translateY(0);opacity:1}}`,
      },
      durations: {
        'move-up': `0.3s`,
        'move-up-sm': `0.2s`,
      },
    },
  },
  presets: [
    presetUno(),
    presetTheme<Theme>({ theme: { dark: darkTheme} }) as PresetOrFactoryAwaitable<Theme>
  ],
  rules: [
    [/^bgi-\[([\w\W]+)\]$/, ([, value]) => (
      { 'background-image': `${value}` }
    )],
  ],
  shortcuts: {
    'card': 'bg-normal rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500',
    'gc-text': 'inline-block font-bold text-transparent bg-clip-text bgi-[var(--gc-text-bgimg)] dark:bgi-[var(--gc-text-bgimg-dark)]',
  },
})
