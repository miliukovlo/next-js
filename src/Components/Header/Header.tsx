"use client"

import React, { useEffect, useState } from 'react';
import styles from "./Header.module.css"
import { useRouter } from 'next/navigation';

const Header : React.FC = () => {

    const [isLogin, setIsLogin] = useState(false)
    const {replace} = useRouter()

    useEffect(() => {
        try {
            if (localStorage.getItem("isLogin")) {
                setIsLogin(true)
            }
        } catch (e) {
            console.error(e)
        }
    },[])

    const handleEscape = () : void => {
        localStorage.removeItem("isLogin")
        localStorage.removeItem("userName")
        replace('/')
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.header__text}>Интернет магазин на NextJS</h1>
            {isLogin ?
                <button className={styles.button} onClick={() => {handleEscape()}}>
                    <svg fill="#fafafa" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fafafa">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <title>door-open</title> <path d="M30 28.75h-0.75v-24.75c-0-0.69-0.56-1.25-1.25-1.25h-6c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h4.75v24.75c0.001 0.69 0.56 1.249 1.25 1.25h2c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM17.77 0.767l-11.977 2c-0.596 0.103-1.044 0.616-1.044 1.233v0 24.75h-2.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h15.977c0.69-0.001 1.249-0.56 1.25-1.25v-28c0-0 0-0.001 0-0.001 0-0.69-0.559-1.25-1.25-1.25-0.073 0-0.144 0.006-0.214 0.018l0.007-0.001zM7.25 28.75v-23.691l9.477-1.583v25.274zM14.58 15.12c-0.116-0.107-0.248-0.201-0.39-0.275l-0.010-0.005c-0.142-0.057-0.307-0.090-0.48-0.090s-0.338 0.033-0.489 0.093l0.009-0.003c-0.157 0.068-0.29 0.163-0.4 0.28l-0.001 0.001c-0.115 0.112-0.209 0.244-0.276 0.391l-0.003 0.008c-0.064 0.141-0.101 0.306-0.101 0.48s0.037 0.339 0.104 0.488l-0.003-0.008c0.071 0.156 0.165 0.288 0.279 0.4l0 0c0.11 0.117 0.244 0.212 0.393 0.276l0.008 0.003c0.143 0.051 0.308 0.080 0.48 0.080s0.337-0.029 0.49-0.083l-0.010 0.003c0.153-0.079 0.284-0.172 0.401-0.28l-0.001 0.001c0.108-0.112 0.196-0.245 0.257-0.392l0.003-0.008c0.063-0.141 0.1-0.306 0.1-0.48s-0.037-0.339-0.103-0.488l0.003 0.008c-0.064-0.155-0.152-0.287-0.26-0.4l0 0z"/> </g>

                    </svg>
                </button>
            :
            ""
            }
        </header>
    );
}

export default Header;
