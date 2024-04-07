"use client";
import styles from "./page.module.css";
import data from "../../public/cars.json"
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>CARS</h1>
      <div className={styles.container}>
      {
        data.cars && data.cars.map((el, index) => {
          return (
            <Card key={index} data = {el}/>
          )
        })
      }
      </div>
    </>
  );
}
