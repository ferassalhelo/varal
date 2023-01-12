import { priceDisplayCardDataType } from "../../../types/priceDisplayCardData;";
import Button from "../../Button/Button";
import style from "./PriceDisplayCard.module.css";

interface IProps {
  active?: boolean;
  data: priceDisplayCardDataType;
}

function PriceDisplayCard({ active, data }: IProps) {
  return (
    <div
      className={`${style.card_box} ${active ? style.card_box_active : null}`}
    >
      <div>
        <h2 className={style.title}>{data.title}</h2>
        <p className={style.price}>
          ${data.price}
          <span className={style.price_text}>One Time Payment</span>
        </p>
      </div>
      <div>
        <p className={style.description}>{data.description}</p>
        {data.points.map((item) => (
          <p key={item} className={style.point}>
            <i className={`fa-solid fa-check ${style.tick}`}></i>
            {item}
          </p>
        ))}
      </div>
      <Button light fs="28px" p="20px 0" width="100%">
        Continue
      </Button>
    </div>
  );
}

export default PriceDisplayCard;
