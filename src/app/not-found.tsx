"use client"

import React from 'react';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import Button from './Components/Common/Button/Button';

const NotFound = () => {
    const {push} = useRouter()

    return (
        <>
        <main className={styles.main}>
            <h1>Страница не найдена</h1>
            <Button
            size='m'
            text="Вернуться назад"
            onClick={() => {push("/")}}
            />
        </main>
    </>
    );
} 

export default NotFound;
