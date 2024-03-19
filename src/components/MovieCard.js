import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { RiMovieFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function MovieCard(props) {

    /*
        <MovieCard 
                title={item.title}
                id={item.id}
                poster_path={item.poster_path}
                adult={item.adult}
                rating={item.vote_average}
                total_reviews={item.vote_count}/>   
    */


    const ratings =  props.rating/2

    const ImageURl = "https://image.tmdb.org/t/p/w500"

    const r_date = new Date(props.release_date);
    const movie_year = r_date.getFullYear()

    const getURL = () =>{
        return ImageURl + props.poster_path ;
    }

    const getRating = ()=>{
        if (props.adult)
            return 'A'
        else
            return 'U/A'
    }

    const renderRatings =()=>{

        let content = [];
        for (let i = 0; i < ratings; i++) {
          content.push(<FaStar style={{color:'orange'}}/>);
        }
        for (let i = 0; i < (4-ratings); i++) {
            content.push(<CiStar/>);
          }
        
        content.push(<span>({props.total_reviews})</span>)
        return content;
    };

  return (
    <Card style={{ width: '16rem', height:'100%',margin:'10px',display: 'flex',padding:'10px',background:'transparent',border:'none'}} id={props.id} className='movie-Card'>
      <Card.Img variant="top" src={getURL()} style={{border:'none'}}/>
      <Card.Body style={{color:'white'}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {getRating()} | {movie_year}
        </Card.Text>
        {renderRatings()}
      </Card.Body>

      <Button className='card-button' style={{color:'white', background:'rgba(89,0,0,1)', border:'none'}}>Watch Now<RiMovieFill /></Button>
    </Card>
  )
}
