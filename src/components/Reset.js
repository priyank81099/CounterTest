import React from "react";
import { Button } from "semantic-ui-react";

function Reset(props) {
  const reset = () => {
    return props.data();
  };

  return (
    <div>
      <Button content="Reset Counter" primary size="huge" onClick={reset} />
    </div>
  );
}

export default Reset;
