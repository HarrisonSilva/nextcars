/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { menu } from "@/utils/menu/menu";
import styles from "../../styles/custom/custom.module.css";
import { CarContext } from "@/context/CarProvider";
import { myCars } from "@/utils/cars/mycars/mycars";
import Link from "next/link";
import { tracks } from "@/utils/tracks/tracks";

export default function page() {
  const { nextCar, previourCar, index, hundleChange, name, selectCarStorage, previourTrack, nextTrack, trackIndex } =
    useContext(CarContext);
  const proximo = ">";
  const anterior = "<";
  return (
    <div>
      <div className={styles.container}>
        <Image
          style={{ zIndex: "0" }}
          layout="fill"
          src={menu[1]}
          alt="menu thumbnail"
        />
        <div className={styles.custom}>
          <div className={styles.defaultCenter}>
            <h2>Digite seu Nome</h2>
            <input onChange={hundleChange} type="text" name="" id="" />
            <h4 className={styles.displayName}>{name}</h4>
          </div>
          <div className={styles.defaultCenter}>
            <h4>Escolha seu Carro</h4>
            <div className={styles.containerCar}>
              <button onClick={previourCar}>
                <h1>{anterior}</h1>
              </button>
              <Image
                className={styles.carchoose}
                src={myCars[index]}
                width="200"
                height="200"
                alt="car"
              />
              <button onClick={nextCar}>
                <h1>{proximo}</h1>
              </button>
            </div>
            <div className={styles.containerTrack}>
              <h4>Escolha sua Pista</h4>
            <div className={styles.containerCard}>
            <button onClick={previourTrack}>
                <h1>{anterior}</h1>
              </button>
                  <Image
                    src={tracks[trackIndex]}
                    width="150"
                    height="150"
                    alt="thumbnail track"
                  />
            <button onClick={nextTrack}>
                <h1>{proximo}</h1>
              </button>
            </div>
            </div>
            <Link className={styles.containerButton} href="/game">
              <button onClick={selectCarStorage} className={styles.start}>
                Iniciar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
