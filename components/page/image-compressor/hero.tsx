function Hero() {
  return (
    <section className="border-grid">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center mx-auto gap-2 px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
          <h1 className="text-primary leading-tighter text-3xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
            Image Compression Tool
          </h1>
          <p className="text-foreground max-w-4xl text-base text-balance sm:text-lg">
            Select your image and compress it on click
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
