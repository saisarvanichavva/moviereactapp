import React from 'react';
import axios from 'axios';
import './style.css';

//import MoviesList from './MoviesList';
class Moreinfo extends React.Component {
    state= {
        Data : {}
    };
    componentDidMount(){
        axios.get(`http://www.omdbapi.com/?apikey=f89cee00&i=${this.props.movieID}&plot=full`)
        .then(res => res.data)
        .then(res => {
            this.setState ({Data : res});
        });
    }
    render(){
        const{
            Title,
            Released,
            Genre,
            Plot,
            
            imdbRating
        }=this.state.Data;
        console.log(this.state.Data)
       
        return(
            <div className="movie-card-container">
                <div className="movie-info">
                    <h2>Movie Details</h2>
                    <div>
                        <h1>{Title}</h1>
                        <small>Released Date: {Released}</small>
                    </div>
                    <h4>Rating: {imdbRating} / 10</h4>
                    <p>{Plot && Plot.substr(0, 350)}</p>
                    <div className="tags-container">
                        {Genre && Genre.split(', ').map(g => <span>{g}</span>)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Moreinfo;