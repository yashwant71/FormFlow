import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-amber-700 to-fuchsia-900 bg-clip-text text-transparent hover:cursor-pointer"
    >
      FormFlow
    </Link>
  );
}

export default Logo;
