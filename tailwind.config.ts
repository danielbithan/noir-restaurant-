import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { ink: '#123B5D', ocean: '#A9DCEB', foam: '#F8F7F2', sand: '#DCCDB8', wood: '#B99A72', dusk: '#092A43' }, fontFamily: { serif: ['Georgia', 'serif'], sans: ['Arial', 'sans-serif'] }, letterSpacing: { luxe: '.22em' } } }, plugins: [] };
export default config;
