import React, {useContext} from 'react';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Header from './Header/Header';
import SongRow from './SongRow/SongRow';
import PlayerContext from '../../../context/player/PlayerContext'
import './Body.css';

const Body = () => {
	const { discoverWeekly } = useContext(PlayerContext);
	return (
		<div className='body'>
			<Header />
			<div className='body_info'>
				<img src={discoverWeekly?.images[0].url} alt='' />
				<div className='body_infoText'>
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discoverWeekly?.description}</p>
				</div>
			</div>
			<div className='body_songs'>
				<div className="body_icons">
					<PlayCircleFilledIcon
						className="body_shuffle"
					/>
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>

				{discoverWeekly?.tracks.items.map(item => {
					return <SongRow track={item.track}/>
				})}
			</div>
		</div>
	);
};

export default Body;
