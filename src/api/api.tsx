import { Movie } from "../types/movies";

const API_KEY = "7c51ce5f51b2a0e2bb3bf45b2afaa9ae";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (endpoint: string): Promise<Movie[] | null> => {
    try {
        // Effectuer la requête
        const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
        
        // Vérification du code de statut HTTP
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        // Parsing de la réponse JSON
        const data = await response.json();

        // Vérifier si 'results' est présent dans la réponse
        if (data && data.results) {
            return data.results; // Retourner les films
        } else {
            throw new Error('Aucun film trouvé dans la réponse.');
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
        return null; // Retourner null en cas d'erreur
    }
};
