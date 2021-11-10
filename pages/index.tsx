import type { NextPage } from "next";
/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { jsx } from "theme-ui";
import glyph from "../public/glyph.png";
import mail from "../public/mail.png";
import Image from "next/image";

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
        <div sx={{ variant: "containers.icons" }}>
          <Link passHref={true} href="https://www.instagram.com/khor_music/">
            <a sx={{ width: "3.2rem" }}>
              <Image src={glyph} alt="Instagram"></Image>
            </a>
          </Link>
          <Link passHref={true} href="mailto:khorwallofsound@gmail.com">
            <a sx={{ width: "4.9rem" }}>
              <Image src={mail} alt="Instagram"></Image>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Home;
