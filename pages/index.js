import Link from "next/link";
import Layout from "../components/MyLayout";

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Home = () => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js" />
        <PostLink title="Deploy Next.js" />
      </ul>
    </Layout>
  </div>
);

export default Home;
