import style from "./Review.module.css";
import img from "../../../assets/images/Vector-3.png";
import Img from "../../Img/Img";
import reviewData from "../../../types/reviewData";
function Review({ data }: { data: reviewData }) {
  return (
    <div className={style.contanie}>
      <div className={style.box}>
        <div className={style.item1}>
          <div className={style.img_box}>
            <Img src={img} />
          </div>
        </div>
        <div className={style.item2}>
          <h4 className={style.text}>{data.review}</h4>
        </div>
      </div>
      <div className={style.name_box}>
        <div className={style.item1}>
          <div className={style.line_box}></div>
        </div>
        <div className={style.item2}>
          <h2 className={style.name}>{data.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Review;
