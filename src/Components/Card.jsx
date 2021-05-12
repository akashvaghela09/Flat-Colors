import React from 'react';
import styles from "../Styles/Home.module.css";
import Ripples from 'react-ripples'

const Card = ({color}) => {
    return (
        <Ripples>
            <div className={styles.card} style={{background: `#${color}`}}>#{color}</div>
        </Ripples>
    )
}

export { Card }