import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonExampleAnimated = (props) => {
  const isUp = props.isUp;
  return (
    <div>
      <Button animated="fade" onClick={props.data} inverted size="huge">
        <Button.Content visible>{props.name}</Button.Content>
        <Button.Content hidden>
          {isUp ? (
            <>
              <Icon name="angle double up" />
              <Icon name="angle double up" />
              <Icon name="angle double up" />
            </>
          ) : (
            <>
              <Icon name="angle double down" />
              <Icon name="angle double down" />
              <Icon name="angle double down" />
            </>
          )}
        </Button.Content>
      </Button>
    </div>
  );
};

export default ButtonExampleAnimated;
