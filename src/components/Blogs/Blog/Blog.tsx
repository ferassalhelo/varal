import Img from "../../Img/Img";
import style from "./Blog.module.css";
import img from "../../../assets/images/Vector-4.png";
import imgLight from "../../../assets/images/Vector-4-light.png";
import Link from "../../Link/Link";
import { blogData } from "../../../types/blogsData";

interface IProps {
  data: blogData;
  active: boolean;
}

function Blog(props: IProps) {
  return (
    <div className={`${style.box}  ${props.active ? style.box_active : null}`}>
      <div className={style.item1}>
        <div className={style.img_box}>
          <Img src={props.active ? imgLight : img} />
        </div>
      </div>
      <div className={style.item2}>
        <h2 className={style.text}>{props.data.title}</h2>
        <Link path={props.data.path} color={props.active ? "white" : ""}>
          5 Minutes
        </Link>
      </div>
    </div>
  );
}

export default Blog;
