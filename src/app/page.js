import Image from "next/image";
import Heading from "./components/Heading";
import Button from "./components/Button";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="grid-container">
      <NavBar />
      <Heading />
      <Button />
    </div>
  );
}
