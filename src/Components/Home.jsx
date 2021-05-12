import React, { useEffect, useState } from 'react';
import styles from "../Styles/Home.module.css";
import {Card }from "../Components/Card"
import EndlessScroll from 'react-endless-scroll'

const Home = () => {
   
    const [cards, setCards] = useState(["945add"])
    
    const fetch = () => {
        let randomColor = ((1<<24)*Math.random() | 0).toString(16)
        setCards([...cards , randomColor])
    }

    useEffect(() => {
        
    }, []);

    return (
        <div className={styles.wrapper}>

            <EndlessScroll
            onReachBottom={fetch}
            isLoading={false}
            hasMore={true}
            >
            <div className={styles.cardDiv}>
                {
                    cards.map((item) => (
                        <Card key={item} color={item}/>
                    ))
                }
            </div>
            </EndlessScroll>
        </div>
    )
}

export { Home }