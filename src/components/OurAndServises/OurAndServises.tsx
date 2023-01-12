import React from "react";
import ourAndServises from "../../types/ourAndSevisesType";
import Img from "../Img/Img";
import style from "./OurAndServises.module.css";
import img from "../../assets/images/Group 34.png";
import img3 from "../../assets/images/Vector-5.png";
import img4 from "../../assets/images/Vector-6.png";
import img5 from "../../assets/images/Vector-8.png";
import img6 from "../../assets/images/Vector-7.png";

function OurAndServises({ data }: { data: ourAndServises[] }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.title}>
          <h4 className={style.title}>{item.title}</h4>
          {item.containt.map((item) => {
            return item.path ? (
              <p key={item.text} className={style.details}>
                <a className={style.link} href={item.path}>
                  {item.text}
                </a>
              </p>
            ) : (
              <p key={item.text} className={style.details}>{item.text}</p>
            );
          })}
        </div>
      ))}
      <div className={style.input_box}>
        <input
          type="text"
          placeholder="Enter email address"
          className={style.input}
        />
        <button className={style.btn}>
          <Img src={img} />
        </button>
      </div>
      <div>
        <a href="#" className={style.icon}>
          <Img src={img3} />
        </a>
        <a href="#" className={style.icon}>
          <Img src={img4} />
        </a>
        <a href="#" className={style.icon}>
          <Img src={img5} />
        </a>
        <a href="#" className={style.icon}>
          <Img src={img6} />
        </a>
      </div>
    </div>
  );
}

export default OurAndServises;
