import React, { useEffect, useState } from 'react';
import styles from "../Styles/Home.module.css";
import {Test} from "../Components/Test"
import EndlessScroll from 'react-endless-scroll'


const Home = () => {
   
    const [cards, setCards] = useState([])
    
    const fetch = () => {
        alert("Page Loaded")
        // setCards([...cards , <Test/>,<Test/>, <Test/>])
    }

    useEffect(() => {
        
    }, []);

    return (
        <div className={styles.wrapper}>
            <h1>Home</h1>
            <EndlessScroll
            onReachBottom={fetch}
            isLoading={false}
            hasMore={true}
            >
            {
                cards.map((item) => (
                    item
                ))
            }
            </EndlessScroll>
        </div>
    )
}

export { Home }