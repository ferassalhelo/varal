import Img from "../Img/Img";
import style from "./HeroBanner.module.css";
import img from "../../assets/images/ILLUSTRATION.png";
import img2 from "../../assets/images/Group 117.png";
import Button from "../Button/Button";

function HeroBanner() {
  return (
    <div>
      <div className={style.box}>
        <div className={style.item1}>
          <p className={style.blue_text}>Claim a Free Quote</p>
          <h1 className={style.title}>
            Get started on fulfilling your Dubai or UAE dream.
          </h1>
          <div className={style.img_box}>
            <Img src={img} />
          </div>
          <p className={style.blue_text}>UAE & Offshore Company</p>
          <p className={style.secondary_text}>
            We provide you with information about UAE or Offshore Company
            Registration & help you setup your company with a bank account and
            visas.
          </p>
          <div className={style.btns}>
            <Button fs="1.4rem" p="1.6rem 1.12rem">
              Start a Company
            </Button>
            <Button fs="1.4rem" light p="1.6rem 1.12rem">
              Renew a Company
            </Button>
          </div>
        </div>
        <div className={style.item2}>
          <Img src={img} />
        </div>
      </div>
      <div className={style.flex_box}>
        <p>Watch the video about UAE or Offshore Company Registration</p>
        <div className={style.img_box2}>
          <Img src={img2} />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
