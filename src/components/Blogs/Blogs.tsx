import { useState } from "react";
import { blogsData } from "../../types/blogsData";
import Blog from "./Blog/Blog";

function Blogs({ data }: { data: blogsData }) {
  const [active, setActive] = useState(-1);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={item.id} onClick={() => setActive(index)}>
            <Blog active={index === active} data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
