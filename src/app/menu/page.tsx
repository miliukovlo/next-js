"use client"

import React, { useEffect, useState } from 'react';
import styles from "./menu.module.css"
import { useRouter } from 'next/navigation';
import GoodsList from '@/Components/MenuPage/GoodsList/GoodsList';

const Menu = () => {

    const {replace} = useRouter()

    useEffect(() => {
        let isLogin : string | null = null;
        try {
            isLogin = localStorage.getItem("isLogin")
        } catch (e) {
            console.error(e)
        }
        if (!isLogin) {
            replace('/')
        }
    },[])

    return (
        <main className={styles.main}>
            <GoodsList/>
        </main>
    );
}

export default Menu;
