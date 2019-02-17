import { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Error from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    let user = { bio: "", status: 0, errMsg: null };

    try {
      const res = await axios.get("https://api.github.com/users/ozbo1973");
      user.bio = res.data;
      user.status = res.status;
    } catch (e) {
      user.status = e.response.status;
      user.errMsg = `Cannot retrieve data: ${e.response.data.message}`;
    }
    return { ...user };
  }

  render() {
    const { bio, status, errMsg } = this.props;

    if (status > 200) {
      return <Error statusCode={status} errMsg={errMsg} />;
    }

    return (
      <Layout title={bio.name}>
        <div>
          <div>
            <img src={bio.avatar_url} alt="bio picture" height="200" />
            <p>{bio.bio} </p>
          </div>
        </div>
      </Layout>
    );
  }
}
