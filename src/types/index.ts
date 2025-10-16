export type MacbookStore = {
	color: string;
	setColor: (color: string) => void;
	scale: number;
	setScale: (scale: number) => void;
	texture: string;
	setTexture: (texture: string) => void;
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

export type ImagePosition = {
	id: string;
	left?: number;
	right?: number;
	bottom?: number;
	transform?: string;
};
