import type { NextPage } from "next";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Nav from "../components/nav";
import { useRouter } from "next/router";
import Image from "next/image";
import images from "../helpers/images";

const Diary = () => {
  const router = useRouter();
  return (
    <div>
      <Nav pathName={router.pathname.substr(1)}></Nav>
      <div sx={{ variant: "containers.images" }}>
        {images.map((image) => (
          <div className="image_wrapper" key={image.src.src} sx={{ variant: "containers.image" }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality="92"
              placeholder="blur"
              layout="responsive"
              objectFit="contain"
            />
            {(image.alt == "Photo of the video shoot for Khor") ? <p className="credit">- Photo by <a className="credit" href="https://www.paulinefabry.de/">Pauline Fabry</a> -</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
