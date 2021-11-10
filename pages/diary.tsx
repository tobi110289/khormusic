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
          <div key={image.src} sx={{ variant: "containers.image" }}>
            <Image
              src={image}
              alt="Picture of Khor"
              quality="30"
              placeholder="blur"
              objectFit="scale-down"
              sizes="50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
