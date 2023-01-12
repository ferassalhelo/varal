import missionData from "../../types/missionData";
import MissionCard from "./MissionCard/MissionCard";
import style from "./MissionGroup.module.css";

function MissionGroup({ data }: { data: missionData[] }) {
  return (
    <section className={style.mission_box}>
      {data.map((item) => (
        <div key={item.id} className={style.missionItem}>
          <MissionCard data={item} />
        </div>
      ))}
    </section>
  );
}

export default MissionGroup;
