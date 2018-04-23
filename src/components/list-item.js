import React from 'react';

const ListItem = ({movie}) => {
	const IMG_URL = "https://image.tmdb.org/t/p/w500/"
	return <li>
		<img height="100px" width="100px" src={`${IMG_URL}${movie.poster_path}`}/>
		<h3>{movie.title}</h3>
	</li>
}

export default ListItem;