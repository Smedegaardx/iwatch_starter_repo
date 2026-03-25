import WatchColor from "./undercomponents/WatchColor";

const ColorSelector = () => {
  return (
    <div className="color-selector">
      <WatchColor color="navy" />
      <WatchColor color="mint" />
      <WatchColor color="ocean" />
    </div>
  );
};

export default ColorSelector;
