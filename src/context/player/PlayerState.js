import React, { useReducer } from 'react';
import PlayerReducer from './PlayerReducer';
import PlayerContext from './PlayerContext';
import SpotifyWebApi from 'spotify-web-api-js';

import { SET_USER, SET_TOKEN, SET_PLAYLIST, SET_DISCOVER_WEEKLY } from '../types';

const spotify = new SpotifyWebApi();

const PlayerState = (props) => {
	const initialState = {
		token:
		"",
		user: null,
		playlists: [],
		playing: false,
		item: null,
		discoverWeekly: null
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
		dispatch({
			type: SET_PLAYLIST,
			payload: playlist,
		});
	};

	const setDiscoverWeekly = async () => {
		const discoverWeekly = await spotify.getPlaylist('37i9dQZEVXcDJytPqwdT0j');
		dispatch({
			type: SET_DISCOVER_WEEKLY,
			payload: discoverWeekly
		})
	}

	return (
		<PlayerContext.Provider
			value={{
				token: state.token,
				user: state.user,
				playlists: state.playlists,
				playing: state.playing,
				item: state.item,
				discoverWeekly: state.discoverWeekly,
				setToken,
				setUser,
				setPlaylist,
				setDiscoverWeekly
			}}
		>
			{props.children}
		</PlayerContext.Provider>
	);
};

export default PlayerState;
