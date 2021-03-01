import React, { Component } from "react";
import IncreaseSpeed from "./IncreaseSpeed.js";
import DecreaseSpeed from "./DecreaseSpeed.js";
import Reset from "./Reset.js";
import "./style.scss";
import { Grid } from "semantic-ui-react";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      timeCount: 0,
      factor: 1,
      theposition: 0,
    };
    this.changeSpeed = this.changeSpeed.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }
  async componentDidMount() {
    console.log(this.state.factor, "<--");
    window.addEventListener("scroll", this.handleScroll, true);

    document.title = "Counter Test";
    if (this.state.factor < 1) {
      await this.setStateAsync({
        factor: 1,
      });
    }
    const val = parseFloat(1000 / this.state.factor);
    this.timeInterval = setInterval(() => {
      this.setState((prevState) => ({
        timeCount: (prevState.timeCount + 1) % 60,
      }));
    }, val);
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log(prevState.factor, "-", this.state.factor);
    if (prevState.factor !== this.state.factor) {
      if (this.state.factor < 1) {
        await this.setStateAsync({
          factor: 1,
        });
      }

      clearInterval(this.timeInterval);
      const val = parseFloat(1000 / this.state.factor);
      this.timeInterval = setInterval(() => {
        this.setState((prevState) => ({
          timeCount: (prevState.timeCount + 1) % 60,
        }));
      }, val);
    }
  }

  handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    let up = false,
      down = false;
    if (winScroll - this.state.theposition >= 10) {
      down = true;
    }
    if (this.state.theposition - winScroll >= 10) {
      up = true;
    }
    if (up || down)
      this.setState({
        theposition: winScroll,
      });
    if (up) this.changeSpeed(this.state.factor - 1);
    if (down) this.changeSpeed(this.state.factor + 1);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.timeInterval);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async changeSpeed(value) {
    await this.setStateAsync({
      factor: value,
    });
  }

  async resetCounter() {
    await this.setStateAsync({
      factor: 1,
      timeCount: 0,
    });
  }

  render() {
    return (
      <div className="Background">
        <div className="CountText">
          <div className="TxtSize">
            00 : {this.state.timeCount < 10 ? 0 : ""}
            {this.state.timeCount}
          </div>
        </div>
        <br />
        <div className="Speed-1">
          Current Speed : <b>{this.state.factor}</b> second/s
        </div>
        <div className="Speed-2">
          Current Interval :{" "}
          <b>{parseFloat(1000 / this.state.factor).toFixed(2)} </b>ms
        </div>
        <div className="Buttons">
          <Grid>
            <Grid.Column width="8">
              <IncreaseSpeed
                data={this.changeSpeed}
                factor={this.state.factor}
              />
            </Grid.Column>

            <Grid.Column width="8">
              <DecreaseSpeed
                data={this.changeSpeed}
                factor={this.state.factor}
              />
            </Grid.Column>
          </Grid>
        </div>
        <div className="ResetBtn">
          <Reset data={this.resetCounter} />
        </div>
      </div>
    );
  }
}

export default HomePage;
