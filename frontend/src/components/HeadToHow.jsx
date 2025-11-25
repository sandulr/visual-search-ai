import React from "react";

import { Link } from "react-scroll";


export default function HeadToHow() {
  return (
    <Link
  to="howitworks"
  smooth={true}
  duration={800}
  offset={-80}
  className="cursor-pointer px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold rounded-lg hover:scale-105 transition"
>
  How it Works
</Link>
  );
}