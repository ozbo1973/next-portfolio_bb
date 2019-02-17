import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/posts/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => {
  return (
    <Layout title="My Blogs">
      <ul>
        <PostLink slug="react-post" title="React Post" />
        <PostLink slug="vba-post" title="VBA Post" />
        <PostLink slug="node-express-post" title="Node/Express Post" />
      </ul>
    </Layout>
  );
};
