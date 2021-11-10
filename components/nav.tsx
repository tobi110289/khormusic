import type { NextPage } from "next";
/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { jsx } from "theme-ui";

interface Props {
  pathName: string;
}

const Nav: NextPage<Props> = ({ pathName }) => {
  return (
    <header>
      <nav sx={{ variant: "containers.nav" }}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/diary">
          <a sx={{ color: pathName === "diary" ? "#ad7c60" : "inherit" }}>
            DIARY
          </a>
        </Link>
        <Link href="/music">
          <a sx={{ color: pathName === "music" ? "#ad7c60" : "inherit" }}>
            MUSIC
          </a>
        </Link>
        <Link href="/videos">
          <a sx={{ color: pathName === "videos" ? "#ad7c60" : "inherit" }}>
            VIDEOS
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
