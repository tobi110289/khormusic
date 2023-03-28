import type { NextPage } from "next";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Nav from "../components/nav";
import { useRouter } from "next/router";

const Videos: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Nav pathName={router.pathname.substr(1)}></Nav>
      <div
        sx={{
          variant: "containers.vimeo",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/812585433?h=40747193fe&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "0px",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        sx={{
          variant: "containers.vimeo",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/802275054?h=7d3f2279d9&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "0px",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        sx={{
          variant: "containers.vimeo",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/802272844?h=2c404787ae&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "0px",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        sx={{
          variant: "containers.vimeo",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/642797492?h=f7098ef26a&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "0px",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        sx={{
          variant: "containers.vimeo",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/642807962?h=d2531f7e68&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "0px",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
