"use client";
import React from "react";
import data from "../../../../../public/cars.json"
import car1 from "../../../../../public/carNew1.jpg"
import car2 from "../../../../../public/carNew2.jpg"
import car3 from "../../../../../public/carOld1.jpg"
import car4 from "../../../../../public/carOld2.jpg"
import car5 from "../../../../../public/nexia.jpg"
import style from "./style.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";

function About() {
  const router = useParams();
  const id = router.slug;
  let message = data.cars.find(el => id === el.carBody);

  return (
    <div className={` ${style.container}`}>
      <div className={`mt-6 grid gap-y-8 lg:grid-cols-2 ${style.wrapper}`}>
        <Image src={
           message.model === "Citan" && car1 ||
           message.model === "GX" && car2 ||
           message.model === "RAV4" && car3 ||
           message.model === "Grand i10 Nios" && car4 ||
           message.model === "Civic" && car5 
        } alt="Lounge Chair" className={style.image} />
        <div className={`${style.textWrap}`}>
          <h1 className={`capitalize text-3xl font-bold ${style.capitalize}`}>
          {message.brand}
          </h1>
          <h4
            className={`text-xl text-neutral-content font-bold mt-2 ${style.opacity}`}
          >
           {message.model}
          </h4>
          <p className={`mt-3 text-xl ${style.price}`}>${message.price}</p>
          <p className={`mt-6 leading-8 ${style.leading}`}>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>
          <div className={`mt-6`}>
            <h4
              className={`${style.trackingWider} text-md font-medium tracking-wider capitalize mt-2`}
            >
              Colors
            </h4>
            <div className="mt-2">
              <button
                type="button"
                style={{background:`${message.color}`}}
                className={`badge w-6 h-6 mr-2 false ${style.color}`}
              >
                &nbsp;
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button className={`btn btn-secondary btn-md ${style.btn}`}>
             Car buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
