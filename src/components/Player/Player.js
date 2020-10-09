import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './Player.css';

const Player = () => {
	return (
		<div className='player'>
			<div className='player_body'>
				<Sidebar />
				<Body />
			</div>
			<Footer />
		</div>
	);
};

export default Player;
