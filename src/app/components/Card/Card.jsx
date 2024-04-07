"use client";
import Image from "next/image";
import img from "../../../../public/notFound.jpg"
import styles from "./style.module.css"
import Link from "next/link";
import car1 from "../../../../public/carNew1.jpg"
import car2 from "../../../../public/carNew2.jpg"
import car3 from "../../../../public/carOld1.jpg"
import car4 from "../../../../public/carOld2.jpg"
import car5 from "../../../../public/nexia.jpg"

function Card(props) {
  const {brand, model, year, color, price, carBody, image} = props.data;

  return (
    <Link className={styles.card} href={`pages/about/${carBody}`}>
        <div className={styles.carImage}>
            <Image className={styles.carImage} src={
              model === "Citan" && car1 ||
              model === "GX" && car2 ||
              model === "RAV4" && car3 ||
              model === "Grand i10 Nios" && car4 ||
              model === "Civic" && car5 
            } alt="car image" height={250} width={400}/>
        </div>
        <div className={styles.cardText}>
            <h2 className={styles.cardTitle}>{model}</h2>
            <p className={styles.cardCar}><b>Type: </b>{brand}</p>
            <p className={styles.cardYear}><b>Year: </b>{year}</p>
            <p className={styles.cardYear}><b>Price: </b>{price}</p>
            <p className={styles.cardYear}><b>Color: </b>{color}</p>
            {
              year >= 2018 ? <p className={styles.conditional}>NEW CAR</p> : <p className={styles.conditional}>OLD CAR</p>
            }
        </div>
    </Link>
  )
}

export default Card