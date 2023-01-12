// This component displays a backup image when the original link is invalid...
import { useState } from "react";
import ImgNotFound from "../../assets/images/image.jpg";
import style from "./Img.module.css";

interface IProps {
  src: string;
  width?: string;
  hegit?: string;
}

export default function Img(props: IProps) {
  const [imgError, setImgError] = useState<boolean>(false);
  return (
    <img
      style={{
        height: props.hegit ? `${props.hegit}` : "100%",
      }}
      className={style.img}
      onError={() => setImgError(true)}
      src={imgError ? ImgNotFound : props.src}
      alt="img not found"
    />
  );
}
