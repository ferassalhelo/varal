import { useState } from "react";
import Slider from "react-slick";

import { priceDisplayCardDataType } from "../../../types/priceDisplayCardData;";
import PriceDisplayCard from "../PriceDisplayCard/PriceDisplayCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PriceDisplaySlider({ data }: { data: priceDisplayCardDataType[] }) {
  const [active, setActive] = useState(1);
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500,
    active:2,
    
  };
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={item.id} onClick={() => setActive(index)}>
            <PriceDisplayCard active={index === active} data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PriceDisplaySlider;
