import {footerLinks} from '../constants';
import type {FooterLinkProps} from '../types';

const Footer = () => {
	return (
		<footer>
			<div className='info'>
				<p>
					More ways to shop: Find an Apple Store or other retailer near you. Or
					call 00 800 040 1966.
				</p>
				<img
					src='/logo.svg'
					alt='Apple Logo'
				/>
			</div>
			<hr />
			<div className='links'>
				<p>copyright © 2024 Apple Inc. All rights reserved</p>
				<u>
					{footerLinks.map(({label, link}: FooterLinkProps) => (
						<li key={label}>
							<a href={link}>{label}</a>
						</li>
					))}
				</u>
			</div>
		</footer>
	);
};

export default Footer;
