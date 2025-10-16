import type {JSX} from 'react';

type Macbook14Props = {
	scale: number;
};

declare module './Macbook-14' {
	const MacbookModel14: (props: Macbook14Props) => JSX.Element;
	export default MacbookModel14;
}
