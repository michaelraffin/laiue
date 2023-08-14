import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-white bg-black">
      <NextSeo
        title="Home: Laiue"
        description="Powered by A.I"
        canonical="https://nine4-1.vercel.app/"
        openGraph={{
          url: "https://nine4-1.vercel.app/",
        }}
      />
      <Head>
        <title>Laiue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
