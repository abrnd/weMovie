<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;


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

        return $parsedResponse['genres'];
    }

    public function getPopularMovies() : array 
    {
        $response = $this->client->request('GET', '3/movie/top_rated');
        $parsedResponse = $response->toArray();
        
        return $parsedResponse['results'];
    }

    public function getMovie($movieId) : array
    {
        $url = '3/movie/'.$movieId;
        $response = $this->client->request('GET', $url);
        $parsedResponse = $response->toArray();

        return $parsedResponse;
    }

    public function getMovieTrailer($movieId) : array
    {
        $url = '3/movie/'.$movieId.'/videos';
        $result = [];

        $response = $this->client->request('GET', $url);
        $parsedResponse = $response->toArray();
        $result = array_key_exists(0, $parsedResponse['results']) ? $parsedResponse['results'][0] : null;
        
        return $result;

    }
    public function getMovies($genreId = null) : array
    {

        $response = $this->client->request('GET', '3/discover/movie', [
            'query' => ['with_genres' => $genreId]
        ]);        
        $parsedResponse = $response->toArray();

        return $parsedResponse['results'];
    }

 }
