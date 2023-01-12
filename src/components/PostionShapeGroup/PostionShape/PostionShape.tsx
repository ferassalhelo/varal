import style from "PostionShape.module.css";

interface IProps {
  img: string;
  width?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  height?: string;
}
function PostionShape(props: IProps) {
  return (
    <img
      src={props.img}
      alt=""
      style={{
        position: "absolute",
        zIndex: "-1",
        width: props.width || "auto",
        height: props.height || "auto",
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right,
      }}
    ></img>
  );
}

export default PostionShape;
