import Img from "../../Img/Img";
import style from "./MissionCard.module.css";
import Link from "../../Link/Link";
import missionData from "../../../types/missionData";

function MissionCard({ data }: { data: missionData }) {
  return (
    <div className={style.box}>
      <div className={style.img_box}>
        <Img src={data.img} />
      </div>
      <h2 className={style.title}>{data.title}</h2>
      <p className={style.secondary_text}>{data.description}</p>
      <Link color="#ffa500" path={data.path}>
        Get Started
      </Link>
    </div>
  );
}

export default MissionCard;
