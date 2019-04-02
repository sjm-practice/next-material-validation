import Link from "next/link";
import Layout from "../components/MyLayout";

const PostLink = ({ title, id }) => (
  <li>
    <Link href={`/post?title=${title}`} as={`/p/${id}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Home = () => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js" />
        <PostLink id="deploy-nextjs" title="Deploy Next.js" />
      </ul>
    </Layout>
  </div>
);

export default Home;
