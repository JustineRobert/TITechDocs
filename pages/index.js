import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TITech Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className="bg-[#F8F9FA] pb-10 px-10" >
        <div className="max-w-3xl mx-auto ">
        <div className="flex items-center justify-between py-6" >
          <h2>Create a new document</h2>
        </div>
        </div>
      </section>
    </div>
  );
}
