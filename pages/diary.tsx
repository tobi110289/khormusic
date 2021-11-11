import type { NextPage } from "next";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Nav from "../components/nav";
import { useRouter } from "next/router";
import Image from "next/image";
import images from "../helpers/images";
import { useEffect, useState } from "react";

const Diary = () => {
  const router = useRouter();
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    function onChange() {
      setChanged(!changed);
    }
    window && window.addEventListener("orientationchange", onChange);
    return () => {
      window.removeEventListener("orientationchange", onChange);
    };
  });

  return (
    <div>
      <Nav pathName={router.pathname.substr(1)}></Nav>
      <div sx={{ variant: "containers.images" }}>
        {images.map((image) => (
          <div key={image.src.src} sx={{ variant: "containers.image" }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality="70"
              placeholder="blur"
              layout="responsive"
              objectFit="scale-down"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
