import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BuildIcon from "@material-ui/icons/Build";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const ListItemLink = ({ show: { id, name } }) => (
  <ListItem button>
    <ListItemIcon>
      <BuildIcon />
    </ListItemIcon>
    <Link href={`/post?id=${id}`} as={`/p/${id}`}>
      <ListItemText primary={name} />
    </Link>
  </ListItem>
);

const Home = ({ shows, classes }) => (
  <div className={classes.root}>
    <Typography variant="h4">Batman Shows</Typography>
    <List component="nav">
      {shows.map(show => (
        <ListItemLink key={show.id} show={show} />
      ))}
    </List>
  </div>
);

Home.getInitialProps = async function getShowData() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log("Show data fetched. Count:", data.length);

  return {
    shows: data.map(entry => entry.show),
  };
};

export default withStyles(styles)(Home);
