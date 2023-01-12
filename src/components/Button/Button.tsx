import style from "./Button.module.css";

interface IProps {
  children: string;
  light?: boolean;
  fs?: string;
  p?: string;
  width?: string
}

function Button(props: IProps) {
  return (
    <>
      {props.light ? (
        <button
          style={{ fontSize: props.fs, padding: props.p, width: props.width }}
          className={`${style.main_button} ${style.light_button}`}
        >
          {props.children}
        </button>
      ) : (
        <button
          style={{ fontSize: props.fs, padding: props.p, width: props.width }}
          className={style.main_button}
        >
          {props.children}
        </button>
      )}
    </>
  );
}

export default Button;
