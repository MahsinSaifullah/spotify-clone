import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

import PlayerContext from '../../../../context/player/PlayerContext';
import './Header.css';

const Header = () => {
	const { user } = useContext(PlayerContext);
	return (
		<div className='header'>
			<div className='header_left'>
				<SearchIcon />
				<input
					placeholder='Search for Artists, Songs, or Podcasts'
					type='text'
				/>
			</div>
			<div className='header_right'>
				<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
