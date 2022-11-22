<?php declare(strict_types=1);


namespace App\Mapper;
use App\Model\Movie;

class MovieMapper{
    public function mapMovie($data) : Movie
    {
        return new Movie(
            $data['id'],
            $data['title'],
            $data['overview'],
            $data['poster_path'],
            $data['vote_average'],
            $data['vote_count'],
            $data['release_date'],
            null,
            null,
        );
    }
}