import React from 'react';

const NavbarFin: React.FC = () => {
    return (
        <nav style={{
            backgroundColor: '#032541',
            padding: '10px 20px',
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
        }}>
            <ul style={styles.navList}>
                <li style={{color: "white",
                    fontSize: "5px"
                }}>
                    <h1>Tout droits reserves</h1>
                </li>

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

export default NavbarFin;
