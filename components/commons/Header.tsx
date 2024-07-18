import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mb-8 flex flex-col items-center lg:flex-row lg:justify-between gap-4">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" width={50} height={50} alt="" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-300 lg:text-left bg-gradient-to-t from-indigo-900 via-indigo-500 to-indigo-400 inline-block text-transparent bg-clip-text text-center py-2">
          Tone Changer
        </h1>
      </div>
    </header>
  );
};

export default Header;
