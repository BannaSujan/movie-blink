import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard';
import axios from 'axios';

export default function BrowseMovie() {
    const apiKey = '1ddb288e3c9b94f8d030c5f0334eca39'

    const [browseState, setBrowseState] = useState('movie');
const [headerText, setHeaderText] = useState('Movies');
const [movieData, setMovieData] = useState([]);

useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/${browseState}?api_key=${apiKey}`)
        .then(response => {
            console.log(response.data.results);
            setMovieData(response.data.results);
        })
        .catch(err => console.log(err));
}, [browseState]);

const changeBrowseState = (st) => {
    if (st === 'movies') {
        setBrowseState('movie');
        setHeaderText('Movies');
    } else {
        setBrowseState('tv');
        setHeaderText('TV shows');
    }
};

const movieCards = movieData.map((item) => {
    return (
        <Col className="movieItems" key={item.id}>
            <MovieCard 
                title={item.title || item.name}
                id={item.id}
                poster_path={item.poster_path}
                adult={item.adult}
                rating={item.vote_average}
                total_reviews={item.vote_count}
                release_date={item.release_date}
            />
        </Col>
    );
});

return (
    <div className='browse-info'>
        <Container fluid className='browse-movie'>
            <div className='chip-container'>
                <button className='chip-button' onClick={() => changeBrowseState('movies')}>Movies</button>
                <button className= 'chip-button' onClick={() => changeBrowseState('tvshows')}>TV shows</button>
            </div>

            <h2 style={{alignContent: 'left', color: 'white'}}>Popular {headerText}</h2>

            <Row md={5} xs={3}>
                {movieCards}
            </Row>
        </Container>
    </div>
)
}