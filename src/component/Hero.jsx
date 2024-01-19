function Hero() {
  return (
    <div className="flex gap-12 flex-wrap py-0 px-20">
      <div className="flex max-w-3xl flex-col justify-center gap-12 items-start">
        <div className=" gap-6">
          <h1 className="text-6xl font-bold">Hi, I’m Sagar 👋</h1>
          <p className="text-base leading-6 text-gray-500">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex items-center gap-2">
            <img className="icon-xs font-normal" src="icon.svg" alt="" />
            Ahmedabad, India
          </div>

          <div className="flex items-center gap-2">
            <img src="icon.svg" alt="" />
            <p className="text-base">Available for new projects</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-start gap-1">
            <img src="ff.svg" alt="" />
            <img src="aa.svg" alt="" />
            <img src="xx.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex min-w-96 flex-col justify-center items-end">
        <img src="Pic.png" alt="" />
      </div>
    </div>
  );
}
export default Hero;
