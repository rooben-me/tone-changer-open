import React, { useState, useEffect } from "react";
import useMagicBackgroundStore from "../../../store/useMagicBackgroundStore";

const MagicBackground: React.FC = () => {
  const { isBackgroundVisible } = useMagicBackgroundStore();

  return (
    <iframe
      src="https://unicorn.studio/embed/8z1j7fMVuTEcPYu372Py?scale=1&dpi=2&fps=60"
      width="407px"
      className={`
        fixed inset-0 scale-125 w-full h-full top-1 rotate-180 hidden lg:block
        transition-opacity duration-300 ease-in-out
        ${isBackgroundVisible ? "opacity-100" : "opacity-0"}
      `}
      height="738px"
      loading="lazy"
    />
  );
};

export default MagicBackground;
