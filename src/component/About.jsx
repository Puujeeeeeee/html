import Fiskill from "./button/Fiskill";
import { forwardRef } from "react";
function About({ props }, ref) {
  return (
    <div ref={ref}>
      {props}
      <div className="About flex justify-between py-24 px-20 bg-gray-100  max-md:items-center ">
        <div className="Container flex py-0 px-8 items-center gap-12  ">
          <div className=" Row flex flex-col items-start gap-4 ">
            <div className="Roww flex flex-col justify-center items-center"></div>
          </div>

          <div className="flex items-start gap-12 flex-no-wrap max-md:flex-col max-md:items-center max-md:justify-center ">
            <div className="flex min-w-[444px] flex-col relative z-20">
              <img src="ulaanaa.png" alt="" />
            </div>
            <div className="flex min-w-[444px] flex-col items-start gap-6  ">
              {/* <Fiskill></Fiskill> */}
              <h1 className="text-3xl font-semibold leading-9">
                Curious about me? Here you have it:
              </h1>
              <div className="flex flex-col gap-4 items-start">
                <p>
                  I'm a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </p>
                <p>
                  I began my journey as a web developer in 2015, and since then,
                  I've continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I'm building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </p>
                <p>
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                </p>
                <p>
                  When I'm not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </p>
                <p>Finally, some quick bits about me.</p>
                <div className="Checklist flex items-start gap-2 flex-wrap">
                  <li>B.E. in Computer Engineering</li>
                  <li>Avid learner</li>
                  <li>Full time freelancer</li>
                  <li>Aspiring indie hacker</li>
                </div>
                <p>
                  One last thing, I'm available for freelance work, so feel free
                  to reach out and say hello! I promise I don't bite 😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default forwardRef(About);
