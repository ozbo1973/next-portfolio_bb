import Link from "next/link";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => {
  return (
    <div className="root">
      <Head>
        <title>{`Next-Portfolio | ${title}`} </title>
      </Head>

      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blogs</a>
        </Link>
        <Link href="/hire_me">
          <a>Hire Me</a>
        </Link>
      </header>
      <div className="container">
        <h1>{title}</h1>
        {children}
      </div>
      <footer>&copy; {new Date().getFullYear()}</footer>

      <style jsx>
        {`
          .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1em;
            font-size: 1.2rem;
            background: indigo;
          }

          header a {
            color: white;
          }

          header a:hover {
            color: darkgray;
            font-weight: bold;
          }

          .container {
            display: flex;
            flex-direction: column;
            width: 85vw;
            height: 100vh;
          }

          footer {
            padding: 1em;
          }
        `}
      </style>
      <style global jsx>
        {`
          html,
          body {
            font-size: 110%;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};
