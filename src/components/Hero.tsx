import {useEffect, useRef} from 'react';

const Hero = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) videoRef.current.playbackRate = 2;
	}, []);

	return (
		<section id='hero'>
			<div>
				<h1>Macbook Pro</h1>
				<img
					src='/title.png'
					alt='Macbook Title'
				/>
				<video
					ref={videoRef}
					src='/videos/hero.mp4'
					autoPlay
					muted
					playsInline
				/>
				<button>Buy</button>
				<p>from $1599 or $133/month for 12 months </p>
			</div>
		</section>
	);
};

export default Hero;
