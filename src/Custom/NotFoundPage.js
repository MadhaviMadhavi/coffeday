import React from "react";
import { Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  let history = useNavigate();

  const handleBackHome = () => {
    history("../");
  };
  return (
    <Paper elevation={3} style={{ width: "500px" }}>
      <h1>Seems the page not exist! Try to enter correct path.</h1>
      <footer>
        <button className="capital btn_next" onClick={handleBackHome}>
          Go HOME
        </button>
      </footer>
    </Paper>
  );
}

export default NotFoundPage;
