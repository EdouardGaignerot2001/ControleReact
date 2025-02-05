import React, { useState } from 'react';
import thorImage from '../assets/thor.jpg'; // Assurez-vous d'importer correctement l'image

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Vous pouvez ajouter la logique de recherche ici (par exemple, rediriger ou afficher les résultats)
        console.log('Recherche:', searchTerm);
    };

    return (
        <div style={{
            textAlign: 'center' as 'center', // Forcer le type 'center' pour textAlign
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

            {/* Zone de recherche */}
            <div style={{
                position: 'absolute', // Positionner la zone de recherche par-dessus l'image
                top: '200px', // Placer la zone de recherche verticalement au milieu de l'image
                left: '50%', // Placer la zone de recherche horizontalement au centre
                transform: 'translate(-50%, -50%)', // Centrer parfaitement la zone de recherche
                zIndex: 1, // Assurer que la zone de recherche est au-dessus de l'image
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
        </div>
    );
};

// Styles pour la page Home
const styles = {
    container: {
        textAlign: 'center' as 'center', // Forcer le type 'center' pour textAlign
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
};

export default Home;
