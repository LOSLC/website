import JoinButton from "@/components/home/join-button";
import HomeTitle from "@/components/home/title";

export default function HomeHeader() {
  return (
    <div className=" blur-none flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-24 px-4 sm:px-6 md:px-8 lg:px-12 z-20">
      <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-10 w-full lg:max-w-[60%] xl:max-w-[50%]">
        <div className="flex w-full min-h-[20vh] justify-start md:items-center">
          <HomeTitle />
        </div>

        <div className="flex justify-start">
          <span className="font-medium text-lg sm:text-xl md:text-2xl max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[600px]">
            <span className="font-black">LOSLC</span> is a tech community for
            open-source enthusiasts and Linux lovers. Where we build and share
            innovative ideas.
          </span>
        </div>

        <div className="flex justify-start">
          <JoinButton />
        </div>
      </div>

      <div className="relative w-full max-w-[500px] lg:w-[50%] xl:w-[40%] aspect-square motion-preset-rebound motion-preset-oscillate drop-shadow-lg">
        <img
          src="/assets/img/hero/Laptop.png"
          alt="Laptop"
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[55%] z-20 
                 transition-transform duration-300 hover:scale-105 motion-safe:animate-float"
        />

        <img
          src="/assets/img/hero/Pingouin.png"
          alt="Linux Penguin"
          className="absolute bottom-[5%] left-[5%] w-[40%] z-10 
                 transition-transform duration-300 hover:scale-105 motion-safe:animate-float-delayed"
        />

        <img
          src="/assets/img/hero/People.png"
          alt="Community Members"
          className="absolute bottom-[5%] right-[5%] w-[45%] z-10 
                 transition-transform duration-300 hover:scale-105 motion-safe:animate-float-delayed"
        />

        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                        rounded-full blur-3xl opacity-50 -z-10"
        />
      </div>
    </div>
  );
}
