import React, { useEffect, useState } from 'react';
import styles from "./GoodsContent.module.css"
import Image from 'next/image';

interface GoodsProps {
    id: string
}
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

const GoodsContent : React.FC<GoodsProps> = ({
    id
}: GoodsProps) => {

    const [goods, setGoods] = useState<goodsInterface | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(json=>setGoods(json))
                setIsLoading(false)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    },[])
    console.log(goods)
    return (
            <div className={styles.content}>
            {isLoading ?
            <div className={styles.loader}></div>
            :
            <>
                <div className={styles.content__image}>
                    {goods!.image ?
                        <Image className={styles.image} src={goods!.image} alt="Изображение товара" width={300} height={300}/>
                        :
                        <div className={styles.loader}></div>
                    }
                </div>
                <div className={styles.content__info}>
                    <h1 className={styles.header__text}>{goods!.title}</h1>
                    <ul className={styles.info__list}>
                        <li className={styles.info__element}>Описание: {goods!.description}</li>
                        <li className={styles.info__element}>Цена: {goods!.price}</li>
                        <li className={styles.info__element}>Категория: {goods!.category}</li>
                        <li className={styles.info__element}>Рейтинг: {goods!.rating.rate} Количество оцено: {goods!.rating.count}</li>
                    </ul>
                </div>
            </>
        }
        </div>
    );
}

export default GoodsContent;
