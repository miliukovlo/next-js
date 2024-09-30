import React, { useEffect, useState } from 'react';
import styles from "./GoodsList.module.css"
import GoodsCard from '../GoodsCard/GoodsCard';

interface goodsInterface {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

const GoodsList = () => {

    const [goods, setGoods] = useState<goodsInterface[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch('https://fakestoreapi.com/products/')
                .then(res=>res.json())
                .then(json=>setGoods(json))
                setIsLoading(false)
            } catch (e) {
                console.error(e)
            }
        }
    
        fetchData()
    },[])

    return (
        <div className={styles.content}>
            {isLoading ?
            <div className={styles.loader}></div>
            :
            goods?.map(card => {
                return (
                    <GoodsCard
                    title={card.title}
                    image={card.image}
                    key={card.id}
                    rate={card.rating.rate}
                    id={card.id}
                    price={card.price}
                    />
                )
            })
        }
        </div>
    );
}

export default GoodsList;
