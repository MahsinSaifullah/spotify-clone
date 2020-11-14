import React, { useEffect, useState, useContext } from 'react';
import './App.css';

import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getTokenFromResponse } from './utility/spotify';
import PlayerContext from './context/player/PlayerContext';

function App() {
	const { token, setToken, setUser, setPlaylist, setDiscoverWeekly } = useContext(
		PlayerContext
	);

	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = '';
		const _token = hash.access_token;

		console.log(_token);

		if (token) {
			setToken(token);
			setUser();
			setPlaylist();
			setDiscoverWeekly();
		} else if (_token) {
			setToken(_token);
			setUser();
			setPlaylist();
			setDiscoverWeekly();
		}
	}, []);

	return <div className='app'>{token ? <Player /> : <Login />}</div>;
}

export default App;
