import {create} from 'zustand';
import type {MacbookStore} from '../types';

const useMacbookStore = create<MacbookStore>((set) => ({
	color: '#2e2c2e',
	setColor: (color: string) => set({color}),
	scale: 0.08,
	setScale: (scale: number) => set({scale}),
	reset: () => set({color: '#2e2c2e', scale: 0.08}),
}));

export default useMacbookStore;
