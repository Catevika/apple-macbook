import type {JSX} from 'react';

type Macbook14Props = {
	position: [number, number, number];
	scale: number;
};

declare module './Macbook-16' {
	const MacbookModel16: (props: Macbook16Props) => JSX.Element;
	export default MacbookModel16;
}
