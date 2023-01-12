import wayCardData from "../../types/wayCardData";
import Link from "../Link/Link";
import WaysCard from "../WaysCard/WaysCard";
import style from "./WaysGroup.module.css";

function WayGroup({ data }: { data: wayCardData[] }) {
  return (
    <section className={style.ways_box}>
      <div className={style.way_item}>
        <div>
          <p className={style.xl_text}>
            Learn the ways in which you can benefit from a UAE/Offshore Company.
            Then get started on fulfilling your UAE dream.
          </p>
          <Link path="#">Claim a Free Quote</Link>
        </div>
        <WaysCard data={data[0]} />
        <WaysCard data={data[1]} />
      </div>
      <div className={style.way_item}>
        <WaysCard data={data[2]} />
        <WaysCard data={data[3]} />
        <div>
          <p className={style.xl_text}>
            Learn the ways in which you can benefit from a UAE/Offshore Company.
            Then get started on fulfilling your UAE dream.
          </p>
          <Link path="#">Claim a Free Quote</Link>
        </div>
      </div>
    </section>
  );
}

export default WayGroup;
