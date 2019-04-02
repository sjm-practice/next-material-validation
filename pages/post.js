import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";

const Post = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={show.image.medium} alt={show.name} />
  </Layout>
);

Post.getInitialProps = async function getShowData(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log("Fetch show:", show.name);

  return { show };
};

export default Post;
