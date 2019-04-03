import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";

const ShowLink = ({ show: { id, name } }) => (
  <li>
    <Link href={`/post?id=${id}`} as={`/p/${id}`}>
      <a>{name}</a>
    </Link>
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          font-family: "Arial";
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </li>
);

const Home = ({ shows }) => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {shows.map(show => (
          <ShowLink key={show.id} show={show} />
        ))}
      </ul>
      <style jsx>
        {`
          h1 {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }
        `}
      </style>
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
