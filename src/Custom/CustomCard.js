import React from "react";
import { Paper } from "@material-ui/core";
import { Footer, Header } from "../Components/Card";

function CustomCard(props) {
  return (
    <Paper elevation={3} style={{ width: "500px" }}>
      <Header />
      {props.children}
      <Footer />
    </Paper>
  );
}

export default CustomCard;
