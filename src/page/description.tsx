import React from 'react';
import { useLocation } from 'react-router-dom';
import { Movie } from '../types/movies';

const FilmDescription: React.FC = () => {
    const location = useLocation(); // Hook pour récupérer les données passées dans l'état de la navigation
    const movie = location.state as Movie; // Extraire les données du film

    return (
        <div style={{
            padding: '20px',
            textAlign: 'center',
        }}>
            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                }}
            />
            <p><strong>Date de sortie :</strong> {movie.release_date}</p>
            <p><strong>Description :</strong> {movie.overview}</p>
            <p><strong>Note :</strong> {movie.vote_average}</p>
        </div>
    );
};


export default FilmDescription;
