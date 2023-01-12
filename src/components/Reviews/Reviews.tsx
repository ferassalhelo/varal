import reviewData from "../../types/reviewData";
import Review from "./Review/Review";

function Reviews({ data }: { data: reviewData[] }) {
  return (
    <>
      {data.map((item) => (
        <Review key={item.id} data={item} />
      ))}
    </>
  );
}

export default Reviews;
