<?php declare(strict_types=1);


namespace App\Mapper;
use App\Model\Genre;

class GenreMapper{
    public function mapGenre($data) : Genre
    {
        return new Genre(
            $data['id'],
            $data['name'],
        );
    }
}