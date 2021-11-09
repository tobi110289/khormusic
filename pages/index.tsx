import type { NextPage } from "next";
/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { jsx } from "theme-ui";

const Home: NextPage = () => {
  return (
    <div
      sx={{
        variant: "containers.page",
      }}
    >
      <nav sx={{ variant: "containers.main" }}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/diary">
          <a>DIARY</a>
        </Link>
        <Link href="/music">
          <a>MUSIC</a>
        </Link>
        <Link href="/videos">
          <a>VIDEOS</a>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
