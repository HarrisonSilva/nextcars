"use client"
import React from 'react'
import Image from 'next/image'
import { menu } from '@/utils/menu/menu'
import styleDefault from '../styles/containerDefault.module.css'
import styles from '../styles/menu/menu.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <div className={styleDefault.containerDefault}>
      <div className={styles.boxMenu}>
       <Link href='/custom'>JOGAR</Link>
      </div>
      <Image
          style={{zIndex: '0' }}
          layout='fill'
          src={menu[0]}
          alt='menu thumbnail'
        />    
    </div>
  )
}
