import React from "react";
import ButtonExampleAnimated from "./ButtonExampleAnimated.js";

function DecreaseSpeed(props) {
  const speedDown = () => {
    if (props.factor === 1) alert("Can't Decrease Speed Than 1000 ms/second");
    return props.data(props.factor - 1);
  };

  return (
    <div>
      <ButtonExampleAnimated
        data={speedDown}
        name="Decrease Speed"
        isUp={false}
      />
    </div>
  );
}

export default DecreaseSpeed;
