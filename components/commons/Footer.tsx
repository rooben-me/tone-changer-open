import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "../Icons/LinkedInIcon";
import GitHubIcon from "../Icons/GithubIcon";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-4 items-center justify-center mt-24 mb-24 lg:mb-0">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://rooben.site/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-900/10 border border-orange-800/30 text-orange-400 grayscale hover:grayscale-0 ease-in-out transition-all backdrop-blur-md"
          >
            <div className="-ml-2">
              <Image src="/rooben-photo.webp" width={24} height={24} alt="" />
            </div>
            My Portfolio
          </Link>
          <Link
            href="https://www.linkedin.com/posts/rooben-me_ui-ux-userexperience-activity-7218310729014075392-0ywm"
            target="_blank"
            className="group px-4 py-2 rounded-lg bg-blue-900/10 border border-blue-800/30 flex items-center gap-2 grayscale hover:grayscale-0 ease-in-out transition-all backdrop-blur-md"
          >
            <div className="-ml-2 text-white/20 opacity-50 group-hover:text-blue-400/80 transition-all ease-in-out group-hover:opacity-100">
              <LinkedInIcon size={24} />
            </div>
            <span className="text-blue-400">My Linkedin</span>
          </Link>

          <Link
            href="https://github.com/rooben-me/tone-changer-open"
            target="_blank"
            className="group px-4 py-2 rounded-lg bg-fuchsia-900/10 border border-fuchsia-800/30 flex items-center gap-2 grayscale hover:grayscale-0 ease-in-out transition-all"
          >
            <div className="-ml-2 text-white/20 opacity-50 group-hover:text-fuchsia-400/80 transition-all ease-in-out group-hover:opacity-100">
              <GitHubIcon size={24} />
            </div>
            <span className="text-fuchsia-400">Source code</span>
          </Link>
        </div>

        <span className="text-gray-500">
          Background by{" "}
          <a href="unicorn.studio" className="font-medium">
            unicorn.studio
          </a>
        </span>

        <Image src="/Signature_White.png" width={240} height={120} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
