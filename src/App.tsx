import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HighLights from './components/HighLights';
import Navbar from './components/Navbar';
import Performance from './components/Performance';
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
			<Performance />
			<Features />
			<HighLights />
			<Footer />
		</>
	);
};

export default App;
