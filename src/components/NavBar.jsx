/** @format */

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to={"/"}>logo</Link>
      <Link to={"search"}> 검색창 </Link>
      <Link to={"login"}>로그인</Link>
      <Link to={"join"}>회원가입</Link>
    </>
  );
}

export default NavBar;
