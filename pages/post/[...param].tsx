import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Post: NextPage = () => {
  const router = useRouter();
  const { param } = router.query;

  console.log('params', param);

  return <p>Post: {param}</p>;
};

export default Post;
