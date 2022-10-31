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

    public function getMovies($genreId) : array
    {

        $response = $this->client->request('GET', '3/discover/movie', [
            'query' => ['with_genres' => $genreId]
        ]);
        $parsedResponse = $response->toArray();
        dump($parsedResponse);

        return $parsedResponse;
        
    }

 }
