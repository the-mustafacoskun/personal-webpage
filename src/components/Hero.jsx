

function Hero() {
  return (
    <div className="flex justify-between items-center flex-col sm:flex-row py-20">
      <div className=" flex-1 max-w-2xl">
        {/*image ve arkaplan rsmin arkasındaki*/}
        <div className="flex flex-col gap-4 mr-5 md:mr-16.75 font-inter md:pb-12">
          <span className="text-[24px] lg:text-[30px]">Hi! 👋</span>
          <span className="text-[28px] lg:text-[42px]">
            I’m Almila. I’m a full-stack developer. I can craft solid and
            scalable frontend products. Let’s meet!
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-3">
          <a href='https://www.linkedin.com/in/mustafacskn00/' target="_blank">
            <img src="src/assets/linkedin.svg" className="w-8 h-8"></img>
            </a>
            <a href="https://github.com/the-mustafacoskun" target="_blank">
            <img src="src/assets/github.svg" className="w-8 h-8"></img>
            </a>
          </div>
          <div className="mb-8 mr-6 md:mr-16 md:text-[18px] text-[14px]">
            <span >
              Currently Freelancing for UX, UI, & Web Design Project . Invite me
              to join your team - pratamaiosi@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-86 h-86">
        {/*image ve arkaplan rsmin arkasındaki*/}
        <div className="absolute -top-4 -left-4 w-full h-full  bg-pink-600 rounded-4xl z-0"></div>
        <div className="relative z-10 w-full h-full bg-gray-300 rounded-4xl overflow-hidden shadow-2xl">
          <img
            src="src/assets/foto.svg"
            className="w-full h-full object-cover"
            alt="Mustafa"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
