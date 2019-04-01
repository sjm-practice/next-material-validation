import Link from "next/link";

const Home = () => (
  <div>
    <p>Hello Next.js - Home.</p>
    <Link href="/about">
      <button type="button">About Page</button>
    </Link>
  </div>
);

export default Home;
