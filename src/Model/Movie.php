<?php declare(strict_types=1);

namespace App\Model;

class Movie {
    public function __construct(
        public int $id,
        public string $title,
        public string $description,
        public string $background,
        public float $vote_average,
        public int $vote_count,
        public string $release_date,
        public ?string $trailer,    
    ){}
}