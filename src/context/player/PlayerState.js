import React, { useReducer } from 'react';
import PlayerReducer from './PlayerReducer';
import PlayerContext from './PlayerContext';
import SpotifyWebApi from 'spotify-web-api-js';

import { SET_USER, SET_TOKEN, SET_PLAYLIST } from '../types';

const spotify = new SpotifyWebApi();

const PlayerState = (props) => {
	const initialState = {
		token:
			'BQDByjPqG4btlIfyehJYctnUfQzASLDdntIXfs6QkDYXrzAsEtCZ9eSt_Sd_88J5dG1qgFPjnY3Hvpj7nPNKCVen1pDwgFFRJk9MXsce_k05COoZmL9HmY9EwwAo5vgOdSHhyesB1DQnbrjqHw7zf7t1IFw5feoePzoHXWtALdYnS4Jy',
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
