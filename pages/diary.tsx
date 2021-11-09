import React from "react";
import Nav from "../components/nav";
import { useRouter } from "next/router";
import Image from 'next/image'


const Diary = () => {
  const router = useRouter();
  return (
    <div>
      <Nav pathName={router.pathname.substr(1)}></Nav>
    </div>
  );
};

export default Diary;
