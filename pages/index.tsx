import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href='/post/abc'>Go to pages/post/[pid].js</Link>
      </li>

      <li>
        <Link href='/post/abc?foo=bar'>Also goes to pages/post/[pid].js</Link>
      </li>

      <li>
        <Link href='/post/abc/a-comment'>
          Go to pages/post/[pid]/[comment].js
        </Link>
      </li>
    </ul>
  );
};
export default Home;
