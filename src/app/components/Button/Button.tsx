import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Button: {
    background: "#ff00ff",
    color: "#ffffff",
    padding: "3rem",
    width: "1rem",
    height: "1rem",
    margin: ".25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "100%",

    border: "none",
    "&:hover": {
      background: "#00ff00",
      cursor: "pointer",
    },
    "&:active": {
      background: "#00ffaa",
      cursor: "pointer",
    },
  },
});

type ButtonProps = {
  children: string;
};

function Button({ children }: ButtonProps): JSX.Element {
  const classes = useStyles();

  return <button className={classes.Button}>{children}</button>;
}

export default Button;
