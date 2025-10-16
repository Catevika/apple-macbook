import type {JSX} from 'react';

type MacbookModelProps = {
	position: [number, number, number];
	scale: number;
};

declare module './Macbook' {
	const MacbookModel: (props: MacbookModelProps) => JSX.Element;
	export default MacbookModel;
}
