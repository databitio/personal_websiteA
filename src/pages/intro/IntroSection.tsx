const IntroSection = () => {
  return (
    <section className="w-full h-full bg-rainbow text-white flex justify-center relative">
      <div className="w-full h-screen flex flex-col justify-center items-center" />
      <div className="absolute intro-cover w-full h-full font-bold flex flex-col items-center justify-center">
        <h3 className="text-center w-full text-3xl xl:text-4xl">
          Hello world!
        </h3>
        <h1 className="text-center w-full text-[6rem] xl:text-[8rem]">
          My name is <span className="">John</span>
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
