import Head from "@/component/Head";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Skilss from "@/component/Skilss";
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1440px]">
        <Head></Head>
        <Hero></Hero>
        <About></About>
        <Skilss></Skilss>
      </div>
    </div>
  );
}
