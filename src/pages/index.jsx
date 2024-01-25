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
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const skilssRef = useRef(null);
  const aboutHandleClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const skilssHandleClick = () => {
    skilssRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const experienceHandleClick = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contactHandleClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-[1440px] ">
        <Head
          aboutHandleClick={aboutHandleClick}
          skilssHandleClick={skilssHandleClick}
          experienceHandleClick={experienceHandleClick}
          contactHandleClick={contactHandleClick}
        ></Head>

        <Hero />
        <About aboutRef={aboutRef} />

        <Skilss skilssRef={skilssRef} />
        <Experience experienceRef={experienceRef} />
        <Work workRef={workRef} />
        <Contact contactRef={contactRef} />
      </div>
      <Footer />
    </div>
  );
}

// // import { useRef } from "react";

// // export default function Home() {
// //   const ref = useRef(null);
// //   const handleClick = () => {
// //     ref.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleClick}>Scroll to element</button>
// //       <div style={{ height: "155rem" }} />
// //       <div ref={ref}>Some content here</div>
// //       <div style={{ height: "155rem" }} />
// //     </div>
// //   );
// // }

// pages/index.js
// pages/index.js
