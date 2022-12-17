import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Post: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default Post;
