import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductViewer from './components/ProductViewer';
import ShowCase from './components/ShowCase';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<>
			<h1 className='text-3xl font-bold underline text-indigo-700'>
				Hello Macbook Pro!
			</h1>
			<Navbar />
			<Hero />
			<ProductViewer />
			<ShowCase />
		</>
	);
};

export default App;
