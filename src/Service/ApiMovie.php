<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Mapper\MovieMapper;
use App\Mapper\GenreMapper;
use App\Model\Movie;



class ApiMovie
 {
    private HttpClientInterface $client;

    public function __construct(HttpClientInterface $tmdbClient){
        $this->client = $tmdbClient;
    }

    public function getGenres() : array 
    {

        $response = $this->client->request('GET', '/3/genre/movie/list');
        $parsedResponse = $response->toArray();
        
        $genres = [];
        $genreMapper = new GenreMapper();
        foreach($parsedResponse['genres'] as $genre)
        {
            $genres[] = $genreMapper->mapGenre($genre);
        }
        return $genres;
        
        
    }

    public function getMovies($genreId = null) : array
    {

        $response = $this->client->request('GET', '3/discover/movie', [
            'query' => ['with_genres' => $genreId]
        ]);        
        $parsedResponse = $response->toArray();
        $movieMapper = new MovieMapper();
        $movies = [];
        foreach($parsedResponse['results'] as $movie){
            $movies[] = $movieMapper->mapMovie($movie);
        }


        return $movies;
    }

    public function getMovie($movieId) : array
    {
        $url = '3/movie/'.$movieId;
        $response = $this->client->request('GET', $url);
        $parsedResponse = $response->toArray();

        return $parsedResponse;
    }

    public function getTrailer(int $movieId) : string
    {
        $url = '3/movie/'.$movieId.'/videos';

        $response = $this->client->request('GET', $url);
        $parsedResponse = $response->toArray();
        $result = !empty($parsedResponse['results']) ? $parsedResponse['results'][0]['key'] : "";

        return $result;
    }
 }
