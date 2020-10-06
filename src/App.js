import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

import Login from './components/Login/Login';
import { getTokenFromResponse } from './utility/spotify';

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
		}
	}, []);
	return (
		<div className='app'>{token ? <h1>I am logged in</h1> : <Login />}</div>
	);
}

export default App;
