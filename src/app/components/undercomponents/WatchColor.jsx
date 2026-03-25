import Image from "next/image";

import navy from "../../../../public/navy.png";
import mint from "../../../../public/mint.png";
import ocean from "../../../../public/ocean.png";

const WatchColor = ({ color }) => {
  if (color === "navy") {
    return (
      <div className="watch-color">
        <Image
          src={navy}
          alt="Picture of an Apple iWatch in the color Navy"
          className="watch-img-small"
        />
        <div className="color-box navy"></div>
      </div>
    );
  } else if (color === "mint") {
    return (
      <div className="watch-color">
        <Image
          src={mint}
          alt="Picture of an Apple iWatch in the color Mint"
          className="watch-img-small"
        />
        <div className="color-box mint"></div>
      </div>
    );
  } else if (color === "ocean") {
    return (
      <div className="watch-color">
        <Image
          src={ocean}
          alt="Picture of an Apple iWatch in the color Ocean"
          className="watch-img-small"
        />
        <div className="color-box ocean"></div>
      </div>
    );
  }
};

export default WatchColor;
