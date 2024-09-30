"use client"

import React from 'react';
import styles from "./menu.module.css"
import GoodsList from '@/Components/MenuPage/GoodsList/GoodsList';

const Menu = () => {

    return (
        <main className={styles.main}>
            <GoodsList/>
        </main>
    );
}

export default Menu;
