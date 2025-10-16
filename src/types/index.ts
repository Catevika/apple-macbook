export type MacbookStore = {
	color: string;
	setColor: (color: string) => void;
	scale: number;
	setScale: (scale: number) => void;
	reset: () => void;
};

export type ProductViewerProps = {
	color: string;
	setColor: (color: string) => void;
	scale: number;
	setScale: (scale: number) => void;
};

export type ModelSwitcherProps = {
	scale: number;
	isMobile: boolean;
};

export type ControlsConfig = {
	snap: boolean;
	speed: number;
	zoom: number;
	polar?: [number, number];
	azimuth: [number, number];
	config: {
		mass: number;
		tension: number;
		friction: number;
	};
};
