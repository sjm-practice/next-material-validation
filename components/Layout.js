import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";

const styles = {
  pageContainer: {
    padding: "10px",
  },
};

const Layout = ({ children, classes }) => {
  return (
    <div>
      <Header />
      <div className={classes.pageContainer}>{children}</div>
    </div>
  );
};

export default withStyles(styles)(Layout);
