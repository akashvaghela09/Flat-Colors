import React, { useState } from 'react';
import styles from "../Styles/Home.module.css";
import Ripples from 'react-ripples'
import { Fade } from "react-awesome-reveal";

const Card = ({color}) => {

    const [toastStatus, setToastStatus] = useState(false)
   
    return (
        
        <Ripples>
            {
                toastStatus &&
                <Fade style={{zIndex: "100"}}>
                <h3 className={styles.toast}>{color} Copied</h3>
                </Fade>
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