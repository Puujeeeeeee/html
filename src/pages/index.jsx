import React, { useRef } from "react";
import Head from "@/component/Head";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Skilss from "@/component/Skilss";
import Experience from "@/component/Experience";
import Work from "@/component/Work";
import Contact from "@/component/GetInTouch";
import Footer from "@/component/Footer";

export default function Home() {
  const Ref = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (ref) => {
    ref.current?.handleClick({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-[1440px] ">
        <Head onClick={handleClick}></Head>

        {/* <Hero />
        <About ref={Ref} />

        <Skilss onClick={handleClick}></Skilss>
        <Experience ref={experienceRef} />
        <Work ref={workRef} />
        <Contact ref={contactRef} /> */}
      </div>
    {/* <Footer />   */}
    </div>
  );
}

// import { useRef } from "react";

// export default function Home() {
//   const ref = useRef(null);
//   const handleClick = () => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Scroll to element</button>
//       <div style={{ height: "155rem" }} />
//       <div ref={ref}>Some content here</div>
//       <div style={{ height: "155rem" }} />
//     </div>
//   );
// }
