function Contact() {
  return (
    <div className="py-24 px-20 flex flex-col justify-center items-center">
      <div className="flex px-8 py-0 flex-col justify-center gap-12 items-center">
        <div className="flex felx-col items-start gap-4"></div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-xl font-normal leading-7 flex flex-wrap w-[500px]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div className="flex justify-center items-center gap-5 ">
            <img src="ssms.svg" alt="" />
            <p className="text-3xl">reachsagarshah@gmail.com</p>
            <img src="copy.svg" alt="" />
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src="cal.svg" alt="" />
            <p className="text-3xl">+91 8980500565</p>
            <img src="copy.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="flex felx-col items-start gap-4">
            <p>You may also find me on these platforms!</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-3">
              <img src="ff.svg" alt="" />
              <img src="aa.svg" alt="" />
              <img src="icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
