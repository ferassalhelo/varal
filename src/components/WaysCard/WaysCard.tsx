import Img from "../Img/Img";
import style from "./WaysCard.module.css";
import Link from "../Link/Link";
import wayCardData from "../../types/wayCardData";

function WaysCard({ data }: { data: wayCardData }) {
  return (
    <div className={style.card_box}>
      <div className={style.img_box}>
        <Img src={data.img} />
      </div>
      <h2 className={style.title}>{data.title}</h2>
      <p className={style.description}>{data.description}</p>
      <Link path={data.path} arrow>
        Learn more
      </Link>
    </div>
  );
}

export default WaysCard;
