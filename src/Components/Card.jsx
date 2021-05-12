import React, { useState } from 'react';
import styles from "../Styles/Home.module.css";
import Ripples from 'react-ripples'

const Card = ({color}) => {

    const [toastStatus, setToastStatus] = useState(false)
   
    return (
        <Ripples>
            {
                toastStatus && 
                        <h3 className={styles.toast}>{color} Copied</h3>
            }
            <div 
                onClick={() => {
                    setToastStatus(true); 
                    setTimeout(() => {
                        setToastStatus(false)
                    }, 1200);
                    navigator.clipboard.writeText(color)
                }} 

                className={styles.card} 
                style={{background: color}} />
        </Ripples>
    )
}

export { Card }