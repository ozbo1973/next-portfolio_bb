import { withRouter } from "next/router";
import Layout from "../components/Layout";

const Post = ({ router: { query } }) => {
  return (
    <Layout title={query.title}>
      <p>
        Deserunt nulla incididunt mollit magna aute do. Cupidatat aliqua ut
        aliquip cillum minim aliquip nulla aute et occaecat. Veniam deserunt
        amet deserunt culpa dolore eiusmod eiusmod. Commodo nostrud ullamco
        veniam sunt ad magna. Voluptate aute ex ex voluptate non ullamco labore
        nisi. Nulla cillum nostrud ullamco do pariatur sint tempor.{" "}
      </p>
    </Layout>
  );
};

export default withRouter(Post);
