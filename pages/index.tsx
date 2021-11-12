import type { NextPage } from "next";
/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { jsx } from "theme-ui";
import glyph from "../public/glyph.webp";
import mail from "../public/mail.webp";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div
      role="navigation"
      aria-label="Main"
      sx={{
        variant: "containers.page",
      }}
    >
      <nav sx={{ variant: "containers.main" }}>
        <Link href="/">
          <a className="main_nav_item">HOME</a>
        </Link>
        <Link href="/diary">
          <a className="main_nav_item">DIARY</a>
        </Link>
        <Link href="/music">
          <a className="main_nav_item">MUSIC</a>
        </Link>
        <Link href="/videos">
          <a className="main_nav_item">VIDEOS</a>
        </Link>
        <div sx={{ variant: "containers.icons" }}>
          <Link passHref={true} href="https://www.instagram.com/khor_music/">
            <a className="main_nav_item" sx={{ variant: "containers.insta" }}>
              <Image src={glyph} alt="Instagram"></Image>
            </a>
          </Link>
          <Link passHref={true} href="mailto:khorwallofsound@gmail.com">
            <a className="main_nav_item" sx={{ variant: "containers.mail" }}>
              <Image src={mail} alt="Instagram"></Image>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Home;
