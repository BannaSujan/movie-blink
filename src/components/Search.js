import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {Row,Col,Container} from 'react-bootstrap'
import MovieCard from './MovieCard';

export default function Search () {
    let location = useLocation();
    
    // Extract the search query parameter
    let searchParams = new URLSearchParams(location.search);
    let query = searchParams.get('query');

    const apiKey = '1ddb288e3c9b94f8d030c5f0334eca39'

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        // example api hit : https://api.themoviedb.org/3/search/movie?api_key=###&query=the+avengers
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
            .then(response => {
                setSearchResults(response.data.results);
            })
            .catch(err => console.log(err));
    },);

    const movieCards = searchResults.map((item) => {
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
    
                <h2 style={{alignContent: 'left', color: 'white'}}>Search results</h2>
    
                <Row md={5} xs={3}>
                    {movieCards}
                </Row>
            </Container>
        </div>
    )
}
