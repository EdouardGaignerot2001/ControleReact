import React from 'react';
import { Link } from 'react-router-dom'; // Pour créer un lien vers la page d'accueil

const ErrorPage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // S'assurer que le conteneur prend toute la hauteur de l'écran
      backgroundColor: '#f8d7da', // Fond rouge clair
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <div style={styles.content}>
        <h1 style={styles.title}>Oups !</h1>
        <p style={styles.message}>La page que vous recherchez n'existe pas ou un problème est survenu.</p>
        <img
          src="https://via.placeholder.com/400x300?text=Error+Image" // Remplacez par une image d'erreur réelle si vous en avez
          alt="Page non trouvée"
          style={styles.image}
        />
        <p style={styles.linkText}>
          Retournez à <Link to="/" style={styles.link}>l'Accueil</Link>.
        </p>
      </div>
    </div>
  );
};

// Styles CSS pour la page d'erreur
const styles = {
  
  content: {
    maxWidth: '600px',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
  },
  title: {
    fontSize: '36px',
    color: '#721c24', // Couleur rouge sombre
    marginBottom: '10px',
  },
  message: {
    fontSize: '18px',
    color: '#721c24',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
  },
  linkText: {
    fontSize: '18px',
    color: '#007bff', // Couleur bleue pour le lien
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default ErrorPage;
