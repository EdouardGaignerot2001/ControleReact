import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={{
            backgroundColor: '#032541',
            padding: '10px 20px',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
        }}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.link}>Accueil</Link>
                </li>
                <div style={styles.rightLinks}>
                    <li style={styles.navItem}>
                        <Link to="/series" style={styles.link}>Séries</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/films" style={styles.link}>Films</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/populaires" style={styles.link}>Populaires</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

// Style inline pour la navbar
const styles = {
    navList: {
        display: 'flex',
        justifyContent: 'space-between', 
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        padding: '5px 10px',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    rightLinks: {
        display: 'flex', 
        marginLeft: 'auto', 
        
    },
};

export default Navbar;
