import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard';

export default function BrowseMovie() {



  const data = 
    [
      {
        "adult": false,
        "backdrop_path": "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg",
        "genre_ids": [
            28,
            12,
            16,
            35,
            10751
        ],
        "id": 1011985,
        "original_language": "en",
        "original_title": "Kung Fu Panda 4",
        "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
        "popularity": 3781.812,
        "poster_path": "/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg",
        "release_date": "2024-03-02",
        "title": "Kung Fu Panda 4",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 158
    },
    {
        "adult": false,
        "backdrop_path": "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
        "genre_ids": [
            14,
            12,
            28
        ],
        "id": 763215,
        "original_language": "en",
        "original_title": "Damsel",
        "overview": "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
        "popularity": 3001.85,
        "poster_path": "/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg",
        "release_date": "2024-03-08",
        "title": "Damsel",
        "video": false,
        "vote_average": 7.261,
        "vote_count": 867
    },
    {
        "adult": false,
        "backdrop_path": "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
        "genre_ids": [
            28,
            12,
            35
        ],
        "id": 848538,
        "original_language": "en",
        "original_title": "Argylle",
        "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
        "popularity": 1674.191,
        "poster_path": "/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg",
        "release_date": "2024-01-31",
        "title": "Argylle",
        "video": false,
        "vote_average": 6.133,
        "vote_count": 607
    },
    {
        "adult": false,
        "backdrop_path": "/cu5Qk2QHxOyyMrD3Bq93DxgmJer.jpg",
        "genre_ids": [
            28,
            80
        ],
        "id": 1046090,
        "original_language": "zh",
        "original_title": "周處除三害",
        "overview": "The arrogant, third most-wanted criminal in Taiwan, decides to get rid of the top two competitors and crowns himself the most-wanted criminal before dying.",
        "popularity": 1407.442,
        "poster_path": "/7IJ7F8tX7IAkpUdaGovOBJqORnJ.jpg",
        "release_date": "2023-10-06",
        "title": "The Pig, the Snake and the Pigeon",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 87
    },
    {
        "adult": false,
        "backdrop_path": "/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg",
        "genre_ids": [
            28,
            27,
            53
        ],
        "id": 1096197,
        "original_language": "pt",
        "original_title": "No Way Up",
        "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
        "popularity": 1709.062,
        "poster_path": "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
        "release_date": "2024-01-18",
        "title": "No Way Up",
        "video": false,
        "vote_average": 6.073,
        "vote_count": 241
    },
    {
        "adult": false,
        "backdrop_path": "/47olX0FCvUCfAqlp8cK0O5fKLav.jpg",
        "genre_ids": [
            16,
            35,
            878
        ],
        "id": 1239251,
        "original_language": "en",
        "original_title": "Megamind vs. the Doom Syndicate",
        "overview": "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
        "popularity": 1275.225,
        "poster_path": "/yRZfiG1QpRkBc7fAmxfcR7Md5EC.jpg",
        "release_date": "2024-03-01",
        "title": "Megamind vs. the Doom Syndicate",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 121
    },
    {
        "adult": false,
        "backdrop_path": "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
        "genre_ids": [
            28,
            12,
            878,
            14,
            18
        ],
        "id": 624091,
        "original_language": "id",
        "original_title": "Sri Asih",
        "overview": "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
        "popularity": 1704.084,
        "poster_path": "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
        "release_date": "2022-11-17",
        "title": "Sri Asih",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 26
    },
    {
        "adult": false,
        "backdrop_path": "/o6e8Y0Q7RZIWi4qcJq4s5OYOVJs.jpg",
        "genre_ids": [
            878,
            10749,
            35
        ],
        "id": 792307,
        "original_language": "en",
        "original_title": "Poor Things",
        "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        "popularity": 1077.325,
        "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        "release_date": "2023-12-07",
        "title": "Poor Things",
        "video": false,
        "vote_average": 7.868,
        "vote_count": 2397
    },
    {
        "adult": false,
        "backdrop_path": "/87IVlclAfWL6mdicU1DDuxdwXwe.jpg",
        "genre_ids": [
            878,
            12
        ],
        "id": 693134,
        "original_language": "en",
        "original_title": "Dune: Part Two",
        "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
        "popularity": 1180.358,
        "poster_path": "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        "release_date": "2024-02-27",
        "title": "Dune: Part Two",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1798
    },
    {
        "adult": false,
        "backdrop_path": "/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg",
        "genre_ids": [
            878,
            28,
            80
        ],
        "id": 932420,
        "original_language": "en",
        "original_title": "Code 8 Part II",
        "overview": "In a world where superpowered people are heavily policed by robots, an ex-con teams up with a drug lord he despises to protect a teen from a corrupt cop.",
        "popularity": 1146.099,
        "poster_path": "/hhvMTxlTZtnCOe7YFhod9uz3m37.jpg",
        "release_date": "2024-02-27",
        "title": "Code 8 Part II",
        "video": false,
        "vote_average": 6.599,
        "vote_count": 298
    },
    {
        "adult": false,
        "backdrop_path": "/gklkxY0veMajdCiGe6ggsh07VG2.jpg",
        "genre_ids": [
            16,
            28,
            12,
            35,
            10751
        ],
        "id": 940551,
        "original_language": "en",
        "original_title": "Migration",
        "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
        "popularity": 903.985,
        "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
        "release_date": "2023-12-06",
        "title": "Migration",
        "video": false,
        "vote_average": 7.565,
        "vote_count": 946
    },
    {
        "adult": false,
        "backdrop_path": "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
        "genre_ids": [
            28,
            53,
            10752
        ],
        "id": 969492,
        "original_language": "en",
        "original_title": "Land of Bad",
        "overview": "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
        "popularity": 1067.477,
        "poster_path": "/lYwjlcBjokC9EhfzfAOkTMQd5Ku.jpg",
        "release_date": "2024-01-25",
        "title": "Land of Bad",
        "video": false,
        "vote_average": 6.994,
        "vote_count": 350
    },
    {
        "adult": false,
        "backdrop_path": "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 1072790,
        "original_language": "en",
        "original_title": "Anyone But You",
        "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        "popularity": 836.569,
        "poster_path": "/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
        "release_date": "2023-12-21",
        "title": "Anyone But You",
        "video": false,
        "vote_average": 7.051,
        "vote_count": 1017
    },
    {
        "adult": false,
        "backdrop_path": "/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "popularity": 806.344,
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
        "video": false,
        "vote_average": 8.113,
        "vote_count": 7222
    },
    {
        "adult": false,
        "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 787699,
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "popularity": 802.821,
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "release_date": "2023-12-06",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.199,
        "vote_count": 2557
    },
    {
        "adult": false,
        "backdrop_path": "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
        "genre_ids": [
            28
        ],
        "id": 1049948,
        "original_language": "en",
        "original_title": "Vikings: Battle of Heirs",
        "overview": "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
        "popularity": 1050.14,
        "poster_path": "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
        "release_date": "2023-04-28",
        "title": "Vikings: Battle of Heirs",
        "video": false,
        "vote_average": 7.0,
        "vote_count": 3
    },
    {
        "adult": false,
        "backdrop_path": "/wqmemsQb8xcLVQkwt8WTYnMIYms.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 1217409,
        "original_language": "es",
        "original_title": "Jaque Mate",
        "overview": "Duque, an international secret agent who retired years ago after a traumatic event, is forced to return to action when a commando operative kidnaps his niece and forces him to steal a precious scientific formula as part of the ransom.",
        "popularity": 679.967,
        "poster_path": "/26VzK0GVAsZhVXIbv3qDKiwBYud.jpg",
        "release_date": "2024-01-25",
        "title": "Jaque Mate",
        "video": false,
        "vote_average": 4.6,
        "vote_count": 6
    },
    {
        "adult": false,
        "backdrop_path": "/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
        "genre_ids": [
            878,
            12
        ],
        "id": 438631,
        "original_language": "en",
        "original_title": "Dune",
        "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
        "popularity": 663.721,
        "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "release_date": "2021-09-15",
        "title": "Dune",
        "video": false,
        "vote_average": 7.788,
        "vote_count": 10809
    },
    {
        "adult": false,
        "backdrop_path": "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
        "genre_ids": [
            28,
            14
        ],
        "id": 634492,
        "original_language": "en",
        "original_title": "Madame Web",
        "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
        "popularity": 595.689,
        "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
        "release_date": "2024-02-14",
        "title": "Madame Web",
        "video": false,
        "vote_average": 5.38,
        "vote_count": 487
    },
    {
        "adult": false,
        "backdrop_path": "/6SLyu9ygASsrOqkCpjAwtyG9PWW.jpg",
        "genre_ids": [
            10751,
            878,
            28,
            35
        ],
        "id": 1094556,
        "original_language": "en",
        "original_title": "The Thundermans Return",
        "overview": "Twins Phoebe and Max are enjoying their superhero lifestyle, but when one 'save' goes awry, the Thundermans are sent back to Hiddenville. While Hank and Barb enjoy their return, and Billy and Nora look forward to a normal high school life, Max and Phoebe are determined to regain their superhero status.",
        "popularity": 583.77,
        "poster_path": "/rz98XwP0VJq6e1jnWDCxn6EDLfP.jpg",
        "release_date": "2024-03-07",
        "title": "The Thundermans Return",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 43
    }
    ]

    const movieCards = data.map((item) => {
      return (
              <Col className="movieItems">
                <MovieCard 
                title={item.title}
                id={item.id}
                poster_path={item.poster_path}
                adult={item.adult}
                rating={item.vote_average}
                total_reviews={item.vote_count}/>
              </Col>
      );
    });

  return (
    <div className='browse-info'>
        <Container fluid className='browse-movie'>
            <h2 style={{alignContent:'left',color:'white'}}>Popular Movies</h2>

            <Row md={5} xs={3}>
                {movieCards}
            </Row>
        </Container>
      </div>
  )
}
