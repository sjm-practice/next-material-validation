import React from "react";
import fetch from "isomorphic-unfetch";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

const Post = ({ show, classes }) => (
  <>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={show.image.medium}
        title={show.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {show.name}
        </Typography>
        <Typography>{show.summary.replace(/<[/]?p>/g, "")}</Typography>
      </CardContent>
    </Card>
  </>
);

Post.getInitialProps = async function getShowData(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log("Fetch show:", show.name);

  return { show };
};

export default withStyles(styles)(Post);
