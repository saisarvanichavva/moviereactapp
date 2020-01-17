import React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
//import {Redirect} from 'react-router-dom';
import pic from './images/pic.webp';
//import Header from './Header';
import keydown from 'react-keydown';

class MoviesList extends React.Component {
    state={
        moviesList : [' '],
        searchTerm : ''
    };
    search = event => {
        event.preventDefault();
        axios.get(`http://www.omdbapi.com/?apikey=f89cee00&s=${this.state.searchTerm}&plot=full`)
        .then(res => res.data)
        .then(res =>{
            if(!res.Search){
                this.setState({moviesList : []});
                return;
            }
            const moviesList=res.Search.map(movie=>movie.imdbID);
            this.setState({
                moviesList
            });
        });
    };
    handleChange = event =>{
        this.setState({
            searchTerm:event.target.value
        });
    };
   
    
    render() {
        const { moviesList } = this.state;
       
        return(
            
            
            <div style = {{padding: '100px 100px',overflow:'hidden'}}>
               
                <form onSubmit = {this.search} style={{overflowY:'hidden'}}>
                    
                    <input placeholder="search for ur fav movie"
                    onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.onSubmit} >
                     submit
                        <i className="fa fa-search" />
                    </button>
                    
                </form>
                {moviesList.length > 0 ?(
                    moviesList.map(movie => (
                        <MovieCard movieID = {movie} key = {movie} />

                    ))
                ):(
                    <p>
                        couldnt find.
                    </p>
                )}
            </div>
             
        );
        
    }

}

export default MoviesList;