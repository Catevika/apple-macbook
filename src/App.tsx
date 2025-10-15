import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<>
			<h1 className='text-3xl font-bold underline text-indigo-700'>
				Hello Macbook Pro!
			</h1>
			<Navbar />
			<Hero />
		</>
	);
};

export default App;
