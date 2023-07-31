import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  vertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.vertical}>
          <div className={classes.horizontal}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </div>
          <div className={classes.horizontal}>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
          </div>
          <div className={classes.horizontal}>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
          </div>
          <div className={classes.horizontal}>
            <Button>BACK</Button>
            <Button>0</Button>
            <Button>ENTER</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
