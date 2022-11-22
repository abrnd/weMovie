<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
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

    #[Route('/api/init', methods: ['GET'] , name: 'init')]
    public function getInit(): JsonResponse
    {

        $genres = $this->apiMovie->getGenres();
        $movies = $this->getMovies();

        $data = [
            "genres" => $genres,
            "movies" => $movies,
        ];

        return new JsonResponse($data);
    }

    #[Route('/api/movies/{id}', methods: ['GET'] , name: 'movies')]
    public function getMoviesByGenre(int $id = null): JsonResponse
    {

        $genreId = $id;
        $movies = $this->getMovies($genreId);
        
        return new JsonResponse($movies);
    }

    private function getMovies(int $id = null) : array
    {
        $genreId = $id;
        $movies = $this->apiMovie->getMovies($genreId);

        //get trailer of movie :
        $movies[0]->trailer = $this->apiMovie->getTrailer($movies[0]->id);

        return $movies;
    }

    //TODO : vérifier trailer name
    #[Route('/api/movie/{id}', methods: ['GET'] , name: 'movie')]
    public function getMovie(int $id) : JsonResponse
    {

        $trailer = $this->apiMovie->getTrailer($id);

        return new JsonResponse($trailer);
    }


}
