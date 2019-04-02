import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";

const Home = ({ shows }) => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {shows.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/post?id=${id}`} as={`/p/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
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

export default Home;
