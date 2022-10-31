<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\ApiMovie;

class MovieController extends AbstractController
{
    /*private MoviesHelper $moviesHelper; */
    private ApiMovie $apiMovie;

    public function __construct( ApiMovie $apiMovie)
    {
        
        $this->apiMovie = $apiMovie;
        
    }

    #[Route('/', name: 'app_movie')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/api/movie', name: 'movie')]
    public function getMovie(): Response
    {

        $response = new Response();

        
        $genres = $this->apiMovie->getGenres();
        $movies = $this->apiMovie->getPopularMovies();
        $data = [
            "genres" => $genres,
            "movies" => $movies
        ];

        $movies = $this->apiMovie->getPopularMovies();

        
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($data));

        return $response;
    }
}
