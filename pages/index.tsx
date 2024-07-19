import Head from "next/head";

import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import ToneAdjuster from "../components/ToneAdjuster";
import { Toaster } from "../components/ui/sonner";

function Home() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>Tone Changer | Adjust Your Text's Tone</title>
        <meta
          name="description"
          content="Use our Tone Changer to adjust the tone of your text from casual to professional. Improve your writing for any context."
        />
        <meta
          name="keywords"
          content="tone changer, text tone, writing tool, professional writing, casual writing"
        />
        <meta name="author" content="rooben" />
      </Head>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans">
        <div className="w-full z-10 max-w-7xl mx-auto p-2 lg:p-8">
          <Header />
          <ToneAdjuster />
          <Footer />
        </div>

        <Toaster />

        {/* <iframe
          src="https://unicorn.studio/embed/8z1j7fMVuTEcPYu372Py?scale=1&dpi=2&fps=60"
          width="407px"
          className="fixed inset-0 scale-125 w-full h-full rotate-180 hidden lg:block"
          height="738px"
          loading="lazy"
        ></iframe> */}
      </div>
    </>
  );
}

export default Home;
