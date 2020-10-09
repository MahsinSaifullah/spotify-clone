import React, { useReducer } from 'react';
import PlayerReducer from './PlayerReducer';
import PlayerContext from './PlayerContext';
import SpotifyWebApi from 'spotify-web-api-js';

import { SET_USER, SET_TOKEN, SET_PLAYLIST } from '../types';

const spotify = new SpotifyWebApi();

const PlayerState = (props) => {
	const initialState = {
		token:
			'BQADPby8vLFKN0Z6v8ES0aoms8hUrbx2UDqaD3jpzQM_yQuIiXekO4Nrhoxl1nXtsTY7rqgK9DmSHOwde3FN_0hCIS03Gt2-g0adzaQZLKckSAQmc025wRrXd0MsD3USSbmUlS4OSkLRqN6zGZjVH3nuEUGP4kJ6zwduwx1sIyCoXd5w',
		user: null,
		playlists: [],
		playing: false,
		item: null,
	};

	const [state, dispatch] = useReducer(PlayerReducer, initialState);

	const setToken = (_token) => {
		spotify.setAccessToken(_token);

		console.log(_token);

		dispatch({
			type: SET_TOKEN,
			payload: _token,
		});
	};

	const setUser = async () => {
		const _user = await spotify.getMe();

		dispatch({
			type: SET_USER,
			payload: _user,
		});
	};

	const setPlaylist = async () => {
		const playlist = await spotify.getUserPlaylists();
		console.log('Playlist: ', playlist);

		dispatch({
			type: SET_PLAYLIST,
			payload: playlist,
		});
	};

	return (
		<PlayerContext.Provider
			value={{
				token: state.token,
				user: state.user,
				playlists: state.playlists,
				playing: state.playing,
				item: state.item,
				setToken,
				setUser,
				setPlaylist,
			}}
		>
			{props.children}
		</PlayerContext.Provider>
	);
};

export default PlayerState;