function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-12 py-8 px-4 md:px-20">
      <div className="flex flex-col max-w-full md:max-w-3xl justify-center gap-6 items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m Puujee 👋</h1>
        <p className="text-base leading-6 text-gray-500">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating exceptional digital experiences that are fast, accessible,
          visually appealing, and responsive. Even though I have been creating
          web applications for over 7 years, I still love it as if it was
          something new.
        </p>

        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <img className="icon-xs font-normal" src="icon.svg" alt="" />
            <span>Ahmedabad, India</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="icon.svg" alt="" />
            <p className="text-base">Available for new projects</p>
          </div>
        </div>

        <div className="flex items-start gap-1">
          <img src="ff.svg" alt="" />
          <img src="aa.svg" alt="" />
          <img src="xx.svg" alt="" />
        </div>
      </div>

      <div className="flex min-w-full md:min-w-96 flex-col justify-center items-end">
        <img src="man.jpeg" alt="" className="w-100 h-96 rounded-xl " />
      </div>
    </div>
  );
}

export default Hero;
