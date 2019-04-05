import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

// TODO: convert to material-ui styled component
// const MyLink = styled.li`
//   list-style: none;
//   margin: 5px 0;

//   a {
//     text-decoration: none;
//     color: green;
//     font-family: "Arial";
//   }

//   a:hover {
//     opacity: 0.6;
//   }
// `;

const ShowLink = ({ show: { id, name } }) => (
  <li>
    <Link href={`/post?id=${id}`} as={`/p/${id}`}>
      <a>{name}</a>
    </Link>
  </li>
);

// TODO: convert to material-ui styled component
// const Container = styled.div`
//   h1 {
//     font-family: "Arial";
//   }

//   ul {
//     padding: 0;
//   }
// `;

const Home = ({ shows }) => (
  <div>
    <h1>My Blog</h1>
    <ul>
      {shows.map(show => (
        <ShowLink key={show.id} show={show} />
      ))}
    </ul>
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
