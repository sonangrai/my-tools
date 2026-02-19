function Hero() {
  return (
    <section className="border-grid">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center mx-auto gap-2 px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
          <h1 className="text-primary leading-tighter text-3xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
            Collection of Tools
          </h1>
          <p className="text-foreground max-w-4xl text-base text-balance sm:text-lg">
            This site consists of tools that I usually require during my work.
            So I created them for myself to use it when required.
          </p>
          <div className="flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none">
            <a
              data-slot="button"
              data-variant="ghost"
              data-size="sm"
              className="inline-flex underline items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 gap-1.5 px-3 has-[&gt;svg]:px-2.5 rounded-lg"
              href="#tools-section"
            >
              View Components
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
