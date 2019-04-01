import Link from "next/link";

const Home = () => (
  <div>
    <p>Hello Next.js - Home.</p>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
);

export default Home;
