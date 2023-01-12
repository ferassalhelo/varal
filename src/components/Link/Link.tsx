import style from "./Link.module.css";

interface IProps {
  children: string;
  path: string;
  color?: string;
  arrow?: boolean
}

function Link(props: IProps) {
  return (
    <>
      <a
        href={props.path}
        className={style.link}
        style={{ color: props.color ? `${props.color}` : "" }}
      >
        {props.children}
      {props.arrow ? <i className={`fa-solid fa-arrow-right ${style.arrow}`}></i> : null
      }
      </a >
    </>
  );
}

export default Link;
