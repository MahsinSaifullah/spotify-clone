import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getTokenFromResponse } from './utility/spotify';

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				console.log(user);
			});
		}
	}, []);
	return <div className='app'>{token ? <Player /> : <Login />}</div>;
}

export default App;
