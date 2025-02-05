import React, { useEffect, useState } from 'react';
import thorImage from '../assets/thor.jpg';
import { Movie } from '../types/movies';
import { fetchMovies } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Recherche:', searchTerm);
    };

    const handleMovieClick = (movie: Movie) => {
        navigate(`/description/${movie.id}`, { state: movie }); 
      };
    

    useEffect(() => {
        fetchMovies("/movie/popular").then((data) => {
            if (data) {
                console.log('Données récupérées :', data); // Afficher les données récupérées
                setMovies(data); // Mettre à jour l'état avec les films récupérés
            }
        }).catch((error) => {
            console.error('Erreur lors de la récupération des films :', error); // Gérer les erreurs d'API
        });
    }, []);


    return (
        <div style={{
            textAlign: 'center' as 'center',
            padding: '20px'
        }}>
            {/* Image en haut */}
            <img
                src={thorImage}
                alt="Thor"
                style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '0px',
                    left: 0,
                    objectFit: 'cover' as 'cover',
                    zIndex: -1,
                    position: "absolute",
                    top: '60px',
                }}
            />
            <div style={{
                position: 'absolute',
                top: '200px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                width: '100%'
            }}>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Rechercher des films ou séries..."
                        style={styles.searchInput}
                    />
                </form>
            </div>
            <div>
                {/* Liste des films */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '500px',
                    }}>
                    <h1>Tendance</h1>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',

                }}>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div key={movie.id} style={styles.movieCard}  onClick={() => handleMovieClick(movie)}>
                                {/* Image du film */}
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <h2 style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                }}>{movie.title}</h2>
                            </div>
                        ))
                    ) : (
                        <p>Aucun film trouvé.</p>
                    )}
                </div>
            </div>
        </div>

    );
};

const styles = {
    container: {
        textAlign: 'center' as 'center',
        padding: '20px',

    },
    searchContainer: {
        marginTop: '30px',
    },
    searchInput: {
        padding: '10px',
        fontSize: '16px',
        width: '300px',
        marginRight: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    searchButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'navy',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },


    movieCard: {
        width: '200px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        transition: 'transform 0.3s',
    },
    movieCardHover: {
        transform: 'scale(1.05)',
    },
    movieDescription: {
        fontSize: '14px',
        padding: '10px',
        color: '#555',
        textAlign: 'center',
    },
};

export default Home;
