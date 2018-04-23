import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import MovieList from './movie-list';
import axios from 'axios';

const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=image';
const API_KEY = 'api_key=69e2727c436da298b861acd03cb211e8';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {movieList:{}, currentMovie:{}};
  }

  componentWillMount(){
    this.initMovies();
  }

  initMovies(){
    axios.get(`${API_END_POINT}${POPULAR}&${API_KEY}`).then(function(urldata){
      this.setState({movieList:urldata.data.results.slice(1,6), currentMovie:urldata.data.results[0]}, function(){
        
      });
    }.bind(this));
  }

  applyVideoToCurrentMovie(){
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){
      return response.data.videos;
    });

  }

  render() {
    const renderMovieList = () =>{
      if(this.state.movieList.length >= 5){
        return <MovieList movieList={this.state.movieList}/>
      }
    }
    const renderMovieVideos = () =>{
      return this.applyVideoToCurrentMovie();
    }

    return (
      <div>
        <SearchBar/>
        {renderMovieList()}
        {renderMovieVideos()}
        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
      </div>
    );
  }
}

export default App;