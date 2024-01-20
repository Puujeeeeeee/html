function Experience() {
  return (
    <div className="Experience py-24 px-20 flex-col justify-center items-center  bg-gray-100">
      <div className="flex  px-8 py-0  flex-col justify-center items-center gap-12  self-stretch mb-8">
        <div className="flex-col items-start  gap-12">
          <div className="flex flex-col justfify-center items-center my-10 ">
            <p
              className="text-xl font-normal
            "
            >
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
          <div className="flex w-[896px] p-8 flex-col items-start bg-slate-50 rounded-xl  my-10 shadow-xl">
            <div className="flex items-start gap-20 ">
              <div className="flex flex-col items-start gap-3">
                <img src="logo-upwork.svg" alt="" />
              </div>
              <div className="flex w-[384px] flex-col items-start gap-4">
                <h1 className="text-xl leading-6">Sr. Frontend Developer</h1>
                <div className="flex gap-1 flex-col items-start">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <p>Nov 2021 - Present</p>
              </div>
            </div>
          </div>
          {/* 😇 */}
          <div className="flex w-[896px] p-8 flex-col rounded-xl items-start  my-10 bg-slate-50 shadow-xl">
            <div className="flex items-start gap-20">
              <div className="flex flex-col items-start gap-3">
                <img src="logo-upwork.svg" alt="" />
              </div>
              <div className="flex w-[384px] flex-col items-start gap-4">
                <h1 className="text-xl leading-6">Team Lead</h1>
                <div className="flex gap-1 flex-col items-start">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <p>Jul 2017 - Oct 2021</p>
              </div>
            </div>
          </div>
          <div className="flex w-[896px] p-8 flex-col items-start rounded-xl bg-slate-50 shadow-xl">
            <div className="flex items-start gap-20">
              <div className="flex flex-col items-start gap-3">
                <img src="logo-upwork.svg" alt="" />
              </div>
              <div className="flex w-[384px] flex-col items-start gap-4">
                <h1 className="text-xl leading-6">Full Stack Developer</h1>
                <div className="flex gap-1 flex-col items-start">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Ut pretium arcu et massa semper, id fringilla leo semper.
                  </li>
                  <li>Sed quis justo ac magna.</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <p>Dec 2015 - May 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
