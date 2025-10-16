import {useGSAP} from '@gsap/react';
import {PresentationControls} from '@react-three/drei';
import gsap from 'gsap';
import {useRef} from 'react';
import type {Group, Mesh} from 'three';
import type {ControlsConfig, ModelSwitcherProps} from '../../types';
import MacbookModel14 from '../models/Macbook-14';
import MacbookModel16 from '../models/Macbook-16';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group: Group | null, opacity: number) => {
	if (!group) return;

	group.traverse((child) => {
		if ((child as Mesh).isMesh) {
			const mesh = child as Mesh;
			if (mesh.material && 'opacity' in mesh.material) {
				mesh.material.transparent = true;
				gsap.to(mesh.material, {
					opacity,
					duration: ANIMATION_DURATION,
				});
			}
		}
	});
};

const moveGroup = (group: Group | null, x: number) => {
	if (!group) return;

	gsap.to(group.position, {
		x,
		duration: ANIMATION_DURATION,
	});
};

const ModelSwitcher = ({scale, isMobile}: ModelSwitcherProps) => {
	const SCALE_LARGE_MOBILE = 0.05;
	const SCALE_LARGE_DESKTOP = 0.08;
	const SCALE_SMALL_MOBILE = 0.03;
	const SCALE_SMALL_DESKTOP = 0.06;

	const smallMacbookRef = useRef<Group>(null);
	const largeMacbookRef = useRef<Group>(null);

	const showLargeMacbook =
		scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

	useGSAP(() => {
		if (showLargeMacbook) {
			moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
			moveGroup(largeMacbookRef.current, 0);

			fadeMeshes(smallMacbookRef.current, 0);
			fadeMeshes(largeMacbookRef.current, 1);
		} else {
			moveGroup(smallMacbookRef.current, 0);
			moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

			fadeMeshes(smallMacbookRef.current, 1);
			fadeMeshes(largeMacbookRef.current, 0);
		}
	}, [scale]);

	const controlsConfig = {
		snap: true,
		speed: 1,
		zoom: 1,
		azimuth: [-Infinity, Infinity],
		config: {mass: 1, tension: 0, friction: 26},
	};

	return (
		<>
			<PresentationControls {...(controlsConfig as ControlsConfig)}>
				<group ref={largeMacbookRef}>
					<MacbookModel16
						scale={isMobile ? SCALE_LARGE_MOBILE : SCALE_LARGE_DESKTOP}
					/>
				</group>
			</PresentationControls>
			<PresentationControls {...(controlsConfig as ControlsConfig)}>
				<group ref={smallMacbookRef}>
					<MacbookModel14
						scale={isMobile ? SCALE_SMALL_MOBILE : SCALE_SMALL_DESKTOP}
					/>
				</group>
			</PresentationControls>
		</>
	);
};

export default ModelSwitcher;
