# apple-macbook

![apple-macbook](public\Apple-MacBookPro.jpg)

## Overview

This project simulates the MacBook Pro product page, inspired by Apple's official website. It allows you to explore the various versions, features, and technological innovations of the MacBook Pro 14" and 16".

## Technologies Used

- [Vite](https://vite.dev/): is a lightning-fast build tool and development server that powers this project's workflow. It enables instant hot module replacement, fast startup, and optimized production builds—ideal for an animation-heavy React site with smooth, real-time development feedback and minimal config.
- [React](https://react.dev/): is a declarative JavaScript library for building interactive UIs. It provides the component structure for modular development, allowing smooth integration of GSAP animations, reusable logic for scroll behavior, and support for responsive layout and state-driven UI features like carousels and video sections.
- [GSAP](https://gsap.com/resources/React/): is a powerful JavaScript animation library used in this project to create dynamic, scroll-driven visuals. Features include SplitText animations for bold text reveals, ScrollTrigger for timeline control, parallax scrolling, pinned sections, scroll-synced video playback, seamless multi-section timelines, image masking effects, and a fully custom animated carousel.
- [Three.js](https://threejs.org/): Interactive 3D rendering in the browser
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction): is a lightweight and flexible state management library for React. In this project, it's used to manage global state efficiently, enabling reactive updates with minimal boilerplate. Features include simple store creation, easy state slicing, middleware support for logging and persistence, seamless integration with React components, and performant state updates without unnecessary re-renders.
- [TailwindCss](https://tailwindcss.com/docs/installation/using-vite): is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.

- [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html): Added for improved type safety and maintainability _(extension by Catevika)_

## Features

- **3D Product Scene with Realistic Lighting System**: Showcase products in lifelike 3D environments for maximum visual impact.

- **Animate 3D Model on Scroll**: Create immersive interactions by animating 3D models based on user scroll position.

- **ScrollTrigger Effects**: Power scroll-based animations and timeline control with GSAP's ScrollTrigger.

- **Pinned Sections**: Lock sections in view while animating content for engaging scroll experiences.

- **Image Masking Effects**: Use scroll-triggered pins and masks for visually striking image transitions.

- **Seamless Timeline Animations**: Craft smooth animation timelines that span across multiple sections.

- **Responsive Design**: Ensure fluid UI and adaptive GSAP animations across all screen sizes.

And many more, including code architecture and reusability.

## Prerequisites

- Node.js >= 18
- NPM or Yarn
- Modern browser

## Installation

```bash
git clone https://github.com/Rel1cx/apple-macbook.git
cd apple-macbook
npm install
npm run dev
```

Then access the application at [http://localhost:5173](http://localhost:5173)

## NEW React + Vite Plugins

Two official plugins are available for React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is enabled on this project. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

### ESLint configuration

For production application, it is recommended updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			// Other configs...

			// Remove tseslint.configs.recommended and replace with this
			tseslint.configs.recommendedTypeChecked,
			// Alternatively, use this for stricter rules
			tseslint.configs.strictTypeChecked,
			// Optionally, add this for stylistic rules
			tseslint.configs.stylisticTypeChecked,

			// Other configs...
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

You can also install:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			// Other configs...
			// Enable lint rules for React
			reactX.configs['recommended-typescript'],
			// Enable lint rules for React DOM
			reactDom.configs.recommended,
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

## Attribution

The original project was created by **JavaScriptMastery**. The respective tutorial is available on [Youtube](https://youtu.be/DEeaT6FxEws).

This version adds TypeScript support and updates all dependencies to the latest versions.

## Contributing

1. Fork the project
2. Create a new branch `feature/my-feature`
3. Submit a Pull Request with a clear description

## Support

For any questions, open an issue on the GitHub repository.
