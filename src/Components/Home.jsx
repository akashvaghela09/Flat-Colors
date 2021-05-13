import React, { useState } from 'react';
import styles from "../Styles/Home.module.css";
import {Card }from "../Components/Card"
import EndlessScroll from 'react-endless-scroll'

const Home = () => {
   
    const [cards, setCards] = useState([ ])
    const fetch = () => {
        let randomColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        setCards([...cards , randomColor])
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}> Flat Colors</h1>
            <img onClick={()=> window.open("https://github.com/akashvaghela09/Flat-Colors", "_blank")} className={styles.gitLogo} src="./gitlogo.png" alt="GitHub"/>
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