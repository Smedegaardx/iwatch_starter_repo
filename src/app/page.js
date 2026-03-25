import Image from "next/image";

import WatchNavy from "../../public/navy.png";
import WatchMint from "../../public/mint.png";
import WatchOcean from "../../public/ocean.png";

import Heading from "./components/Heading";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import PageButtons from "./components/PageButtons";
import ColorCircles from "./components/ColorCircles";

export default function Home() {
  return (
    <div className="grid-container">
      <NavBar />
      <Heading />
      <Button />
      <PageButtons />
      <Image
        src={WatchNavy}
        alt="Picture of an Apple iWatch in the color Navy"
        className="watch-image"
      />
      <ColorCircles />
    </div>
  );
}
