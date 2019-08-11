import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
	'Unrecognized WebSocket'
]);

import Routes from './routes';
import { yellow } from 'ansi-colors';

export default function App() {
	return (
		<Routes />
	);
}

/**
 * Notes for android users using local node server
 * 
 * execute 'adb reverse tcp:3333 tcp:3333'
 * so the android app can communicate with the node server
 */