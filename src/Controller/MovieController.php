<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\ApiMovie;

class MovieController extends AbstractController
{

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

    #[Route('/api/genres', name: 'genres')]
    public function getGenres() : Response
    {

        $response = new Response();
        $genres = $this->apiMovie->getGenres();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent(json_encode($data));

        return $response;
    }

    #[Route('/api/movie', name: 'movie')]
    public function getMovie(Request $request) : Response
    {
        $response = new Response();
        $movieId = $request->query->get('id');
        $movie = $this->apiMovie->getMovie($movieId);
        $trailer = $this->apiMovie->getMovieTrailer($movieId);

        $data = [
            "movie" => $movie,
            "trailer" => $trailer,
        ];

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent(json_encode($data));

        return $response;
    }

    #[Route('/api/movies', name: 'movies')]
    public function getMovies(Request $request): Response
    {
        $response = new Response();

        $genreId = $request->query->get('id');
        $movies = $this->apiMovie->getMovies($genreId);
        

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent(json_encode($movies));

        return $response;
    }

    #[Route('/api/init', name: 'init')]
    public function getInit(): Response
    {

        $response = new Response();
        
        $genres = $this->apiMovie->getGenres();
        $movies = $this->apiMovie->getPopularMovies();
        $trailer = $this->apiMovie->getMovieTrailer($movies[0]["id"]);

        $data = [
            "genres" => $genres,
            "movies" => $movies,
            "trailer" => $trailer,
        ];

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($data));

        return $response;
    }
}
