'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { tracks } from '@/utils/tracks/tracks';
import { useContext } from 'react';
import { CarContext } from '@/context/CarProvider';
import { myCars } from '@/utils/cars/mycars/mycars';
import styles from '../../styles/game/game.module.css';
import { otherCars } from '@/utils/cars/otherCars/otherCars';

export default function Page() {
  const [track, setTrack] = useState(0)
  const [myPoint, setMyPoint] = useState(0)
  const [machinePoint, setMachinePoint] = useState(0)
  const { setIndexCar, index } = useContext(CarContext);
  const [vitory, setVitory] = useState(false)
  const handleSpeed = () => {
    const moveOtherCar = () => {
      const randomNumberOne = Number((Math.random() * 2).toFixed(2))
      const randomNumberTwo = Number((Math.random() * 2).toFixed(2))
  
      const otherCar = document.querySelector('#otherCar');
      const myCar = document.querySelector('#myCar');
      const result = document.querySelector('#result');
      const btnStartCars = document.querySelector('#btnStartCars')
      btnStartCars.style.display = 'none'
      let leftMy = 0;
      let leftOther = 0;
      
      const intervalId = setInterval(() => {
        if (leftMy < 100) {
          leftMy += randomNumberOne;
          myCar.style.marginLeft = `${leftMy}vw`;
          result.innerText = ''
  
          if (leftMy >= 100 && leftOther < 100) {
            setVitory(true);
            setTrack(track + 1);
            leftMy = 0;
            clearInterval(intervalId);
            result.innerText = 'Parabens Vocẽ GANHOU!'
            btnStartCars.style.display = 'inline-block'
            result.style.color = 'green'
            btnStartCars.innerText = 'DENOVO'
            setMyPoint(myPoint + 1)
          }
        }
        if (leftOther < 100) {
          leftOther += randomNumberTwo;
          otherCar.style.marginLeft = `${leftOther}vw`;
          if (leftOther >= 100 && leftMy < 100) {
            setVitory(false);
            leftOther = 0;
            clearInterval(intervalId);
            result.innerText = 'infelizmente Vocẽ PERDEU!'
            btnStartCars.style.display = 'inline-block'
            result.style.color = 'red'
            btnStartCars.innerText = 'DENOVO'
            setMachinePoint(machinePoint + 1)
          }
        }
      }, 10);
    };
  
    setTimeout(moveOtherCar, 1000);
  };
  return (
    <div>
      <Image priority style={{ zIndex: '0' }} layout='fill' src={tracks[localStorage.getItem('track')]} alt='menu thumbnail' />

          <Link href='/custom' className={styles.menu}>MENU</Link>
          <div className={styles.points}>
          <h4 >Eu {myPoint}</h4>
          <h4 >Adversario {machinePoint}</h4>
          </div>
      <div className={styles.default}>
        <div className={styles.containerInfo}>
          {localStorage.getItem('name') === '' ? <h1 className={styles.name}>player</h1> : <h1 className={styles.name}>{localStorage.getItem('name')}</h1>}
        </div>
        <h1 className={styles.result} id='result'></h1>
        <button id='btnStartCars' className={styles.startCars} onClick={handleSpeed}>VAI!</button>
        <div className={styles.containerCars}>
          <Image priority id='otherCar' src={otherCars[localStorage.getItem('carSelected')]} width='200' height='200' alt='mycar' />
          <Image priority id='myCar' src={myCars[localStorage.getItem('car')]} width='200' height='200' alt='mycar' />
        </div>
      </div>
    </div>
  );
}
