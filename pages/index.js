import ToneAdjuster from "../components/ToneAdjuster";
import Head from "next/head";

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
        <ToneAdjuster />
      </div>
    </>
  );
}

export default Home;
