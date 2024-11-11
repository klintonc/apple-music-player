import { useEffect, useRef } from 'react';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';

const setupPlayer = async () => {
	await TrackPlayer.setupPlayer({
		maxCacheSize: 1024 * 10,
	});

	await TrackPlayer.setVolume(0.2);
	await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
	const isInitialized = useRef(false);

	useEffect(() => {
		// the player can only be set up once; calling setupPlayer again throws
		if (isInitialized.current) return;
		isInitialized.current = true;

		setupPlayer()
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				// always continue past the splash screen, even if setup failed
				onLoad?.();
			});
	}, [onLoad]);
};
