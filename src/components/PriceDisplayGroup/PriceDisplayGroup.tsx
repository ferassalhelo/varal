import { useState } from "react";
import { priceDisplayCardDataType } from "../../types/priceDisplayCardData;";
import PriceDisplayCard from "./PriceDisplayCard/PriceDisplayCard";
import style from "./PriceDisplayGroup.module.css";
import PriceDisplaySlider from "./PriceDisplaySlider/PriceDisplaySlider";

function PriceDisplayGroup({ data }: { data: priceDisplayCardDataType[] }) {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={style.box}>
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className={style.item}
              onClick={() => setActive(index)}
            >
              <PriceDisplayCard active={index === active} data={item} />
            </div>
          );
        })}
      </div>
      <div className={style.slider_box}>
        <PriceDisplaySlider data={data} />
      </div>
    </>
  );
}

export default PriceDisplayGroup;
