import React, { useReducer } from 'react';
import PlayerReducer from './PlayerReducer';
import PlayerContext from './PlayerContext';

import {} from '../types';

const PlayerState = (props) => {
	const initialState = {
		user: null,
		playlists: [],
		playing: false,
		item: null,
	};

	const [state, dispatch] = useReducer(PlayerReducer, initialState);

	return (
		<PlayerContext.Provider
			value={{
				user: state.user,
				playlists: state.playlists,
				playing: state.playing,
				item: state.item,
			}}
		>
			{props.children}
		</PlayerContext.Provider>
	);
};

export default PlayerState;
