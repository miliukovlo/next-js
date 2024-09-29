"use client"

import React, { useEffect, useState } from 'react';
import Input from '@/Components/Common/Input/Input';
import styles from "./page.module.css"
import Button from '@/Components/Common/Button/Button';
import { useRouter } from 'next/navigation';

const Page : React.FC = () => {

  const {replace} = useRouter()

  useEffect(() => {
    let isLogin : string | null = null;
    try {
        isLogin = localStorage.getItem("isLogin")
    } catch (e) {
        console.error(e)
    }

    if (isLogin) {
        replace('/menu')
    }
  },[])

  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<boolean>(false)



  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  
  const handleLogin : () => void = () => {
    if (login.trim().length !== 0 && password.trim().length !== 0) {
      localStorage.setItem("isLogin", "true")
      localStorage.setItem("userName", login)
      setError(false)
      setLogin("")
      setPassword("")
      replace('/menu')
    } else {
      setError(true)
      setLogin("")
      setPassword("")
    }
  }

  return (
    <>
        <main className={styles.main}>
          <Input
          type='text'
            size='m'
            placeholder='Логин'
            value={login}
            onChange={handleLoginChange}
          />
          <Input
          type='password'
          size="m"
          placeholder='Пароль'
          value={password}
          onChange={handlePasswordChange}
          />
          <p className={error ? "error__text" : "error__text error__text_hidden"}>Вы не ввели логин или пароль!</p>
          <Button
          size='m'
          text="Войти"
          onClick={handleLogin}
          />
        </main>
    </>
  );
}

export default Page;
