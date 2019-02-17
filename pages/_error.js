import Layout from "../components/Layout";

export default props => {
  return <Layout>{showError(props)}</Layout>;
};

const showError = ({ statusCode, errMsg }) => {
  if (!errMsg) {
    return <p>Sorry could not find that page!!</p>;
  }
  return (
    <div>
      {`Status code error: ${statusCode}`}
      <p>{errMsg}</p>
    </div>
  );
};
