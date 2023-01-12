import style from "./TitleWithAfterLine.module.css";

function TitleWithAfterLine({ title }: { title: string }) {
  return (
    <div className={style.box}>
      <div className={style.title_line}></div>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
}

export default TitleWithAfterLine;
