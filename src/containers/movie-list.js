import React from 'react';
import ListItem from '../components/list-item';

const movies = ["film", "film2", "film3"]
const MovieList = ({movieList}) => {
	return (
		<div>
			<ul>
				{
					movieList.map(movie=>{
						return <ListItem key={movie.id} movie={movie}/>
					})
				}
			</ul>
		</div>
		);
}

export default MovieList;