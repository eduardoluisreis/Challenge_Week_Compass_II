// import React from 'react';

import styles from './Details.module.css';
// import { Link } from 'react-router-dom';


const Details = () => {
    const handleClick = () => {
        window.location.href = '/registration';
    }

    return (
        <div className={styles.container}>
            <img src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80" 
                alt="Echinocereus Cactus" 
                className={styles.image}
            />
            <div className={styles.content}>
                <h1>Echinocereus Cactus</h1>
                <span className={styles.title_description}>A Majestic Addition to Your Plant Collection</span>
                <div className={styles.tags}>
                    <p className={styles.tag}>indoor</p>
                    <p className={styles.tag}>cactus</p>
                </div>
                <p className={styles.price}>$139.99</p>
                {/* <Link to="../Registration/PlantRegistration.jsx"> */}
                    <button onClick={handleClick} className={styles.button}>Check out</button>
                {/* </Link> */}
                <h2>Features</h2>
                <ul className={styles.features}>
                    <li>Species: Echinocereus spp.</li>
                    <li>Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height.</li>
                    <li>Blooming Season: Typically spring or summer, with flowers lasting several days to weeks.</li>
                    <li>Por Size: Available in various pot sizes to suit your preference and needs.</li>                   
                </ul>
                <h2>Description</h2>
                <p className={styles.description}>Ladyfinger cactus (&#39;Echinocereus pentalophus&#39;) is also known as Alice, 
                    Devil&#39;s Finger, and Dog Tail.
                   It needs bright sunlinght, light fertilizer, and is prone to root rot.
                   The root system is shallow and weak.
                   Aphids and mealybus are also a danger.
                   Avoiding wet soil can help with success with a ladyginer cactus. 
                </p>                
            </div>
        </div>

    );
}

export default Details;