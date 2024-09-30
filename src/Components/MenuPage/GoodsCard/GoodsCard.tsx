'use client'
import React from 'react';
import styles from "./GoodsCard.module.css"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
    title: string,
    rate: number,
    image: string,
    price: number,
    id: number
}

const GoodsCard : React.FC<CardProps> = ({
    title,
    rate,
    image,
    price,
    id
}: CardProps) => {
    const {push} = useRouter()
    return (
        <div className={styles.card} onClick={() => {push(`/menu/${id}`)}}>
            <Image src={image} width={100} height={100} alt="Изображение товара"/>
            <h1 className={styles.card_header}>{title}</h1>
            <p className={styles.card_text}>Оценка: {rate}</p>
            <p className={styles.card_text}>Цена: {price}$</p>
        </div>
    );
}

export default GoodsCard;
