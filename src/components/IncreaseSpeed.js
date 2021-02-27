import React from "react";
import ButtonExampleAnimated from "./ButtonExampleAnimated.js";

function IncreaseSpeed(props) {
  const speedUp = () => {
    if (props.factor === 60)
      alert("Can't Increase Speed Than 60,000 ms/second");
    return props.data(props.factor + 1);
  };

  return (
    <div>
      <ButtonExampleAnimated data={speedUp} name="Increase Speed" isUp={true} />
    </div>
  );
}

export default IncreaseSpeed;
