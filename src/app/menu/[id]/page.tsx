'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import styles from "./GoodsPage.module.css"
import GoodsContent from '@/Components/GoodsPage/GoodsContent';


const GoodsPage = () => {

    const params = useParams()
    console.log(params)

    return (
        <main className={styles.main}>
            <GoodsContent id={params.id[0]}/>
        </main>
    );
}

export default GoodsPage;
