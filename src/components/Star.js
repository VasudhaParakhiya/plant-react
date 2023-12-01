import { BsStar } from "react-icons/bs";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

function Star({ star }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <div>
        <span>
          {star >= index + 1 ? (
            <BiSolidStar />
          ) : star >= number ? (
            <BiSolidStarHalf />
          ) : (
            <BsStar></BsStar>
          )}
        </span>
      </div>
    );
  });
}

export default Star;
