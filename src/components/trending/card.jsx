import React from 'react';
import styles from './styles.module.css';

const Card = ({card, handleChange}) => {
    return (
        <button onClick={()=>handleChange(card)} className={styles.card}>
            <img alt={card.CoverImage} src={`${process.env.PUBLIC_URL}/assets/${card.CoverImage}`} />
        </button>
    );
}

export default Card;
