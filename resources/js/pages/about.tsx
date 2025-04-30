import Layout from "@/components/blog/layout";
import StaffMember, { StaffProfile } from "@/components/people/staff-member";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/components/providers/language-provider";
import { IoLogoDiscord, IoLogoGithub, IoLogoWhatsapp } from "react-icons/io5";

const STAFF = "/assets/img/staff";

export default function Home() {
  const languageProvider = useLanguage();
  
  const teamMembers: StaffProfile[] = [
    {
      firstName: "Daniel",
      lastName: "AMETSOWOU",
      email: "frusadev@gmail.com",
      title: languageProvider.get("about.team.daniel.title", "Founder"),
      image: `${STAFF}/dani.png`,
      bio: languageProvider.get("about.team.daniel.bio", "Daniel has a lifelong passion for science and technology. He began programming in middle school and has been creating projects and sharpening his skills ever since."),
    },
    {
      firstName: "Laureen",
      lastName: "EKON",
      email: "ekonlaureen16@gmail.com",
      title: languageProvider.get("about.team.laureen.title", "Community Relations Manager"),
      image: `${STAFF}/laur.png`,
      bio: languageProvider.get("about.team.laureen.bio", "Laureen is dedicated to open-source and robotics, actively contributing to innovative projects and collaborating with the tech community. She thrives on learning and staying ahead of emerging technologies."),
    },
    {
      firstName: "Rayane",
      lastName: "TCHABODI",
      email: "rayanetchabodi360@gmail.com",
      title: languageProvider.get("about.team.rayane.title", "Communication Lead"),
      image: `${STAFF}/ray.jpg`,
      bio: languageProvider.get("about.team.rayane.bio", "Rayane is a full-stack web developer who enjoys creating modern, scalable applications. He is always eager to learn new technologies and improve user experiences."),
    },
    {
      firstName: "Denise",
      lastName: "DEABALO",
      email: "dinaisedeabalo@gmail.com",
      title: languageProvider.get("about.team.denise.title", "Secretary"),
      image: `${STAFF}/den.png`,
      bio: languageProvider.get("about.team.denise.bio", "Denise is a full-stack web developer who builds dynamic, responsive, and efficient web applications. She loves solving problems and exploring new technologies to enhance user experiences."),
    },
    {
      firstName: "Emerick",
      lastName: "MITCHIKPE",
      email: "mitchikpeemerick2@gmail.com",
      title: languageProvider.get("about.team.emerick.title", "Community Manager"),
      image: `${STAFF}/emer.png`,
      bio: languageProvider.get("about.team.emerick.bio", "Emerick specializes in cybersecurity and is the founder of ETHIX Community. As a CTF player, challenge creator, and freelance junior penetration tester, he is steadily advancing in the field."),
    },
    {
      firstName: "Kallern",
      lastName: "ATTER",
      email: "hackustheinforman@gmail.com",
      title: languageProvider.get("about.team.kallern.title", "Project Security Tester"),
      image: `${STAFF}/kall.jpg`,
      bio: languageProvider.get("about.team.kallern.bio", "Kallern is a cybersecurity enthusiast passionate about ethical hacking and digital security. He continuously sharpens his skills to protect systems from emerging threats."),
    },
    {
      firstName: "Bayédzè",
      lastName: "COMLAN",
      email: "bayedzenetworking@gmail.com",
      title: languageProvider.get("about.team.bayedze.title", "Community Manager"),
      image: `${STAFF}/bay.png`,
      bio: languageProvider.get("about.team.bayedze.bio", "Bayédzè is a system administrator with a strong focus on network security and infrastructure management. He enjoys optimizing systems and ensuring reliable performance."),
    },
  ];

  return (
    <Layout>
      <div className="relative h-screen w-full flex-col scroll-smooth">
        <div className="bg-background/50 z-20 flex min-h-[60vh] w-full justify-center backdrop-blur-2xl md:h-screen md:items-center">
          <div className="flex w-10/12 items-center justify-center py-16 sm:w-8/12 md:py-0">
            <span className="text-foreground motion-preset-slide-up text-center text-3xl font-extrabold sm:text-4xl md:text-6xl">
              {languageProvider.get("about.title")}
            </span>
          </div>
        </div>
        {/* Next section */}
        <div className="flex h-auto w-full flex-col items-center justify-around gap-6 px-4 py-8 md:h-screen md:flex-row md:gap-10 md:px-20 md:py-4">
          <div className="bg-background flex h-full w-full flex-col justify-around gap-8 rounded-xl p-4 sm:w-11/12 md:w-1/2 md:gap-0 md:p-6">
            <div className="flex flex-col gap-3 text-center md:gap-4">
              <span className="text-xl font-bold sm:text-2xl md:text-4xl">
                {languageProvider.get("about.mission.title")}
              </span>
              <span className="text-sm text-slate-500 sm:text-base">
                {languageProvider.get("about.mission.desc")}
              </span>
            </div>
            <div className="flex flex-col gap-3 text-center md:gap-4">
              <span className="text-xl font-bold sm:text-2xl md:text-4xl">
                {languageProvider.get("about.collaborative.title")}
              </span>
              <span className="text-sm text-slate-500 sm:text-base">
                {languageProvider.get("about.collaborative.desc")}
              </span>
            </div>
          </div>
          <div className="bg-background flex h-full w-full flex-col justify-around gap-8 rounded-xl p-4 sm:w-11/12 md:w-1/2 md:gap-0 md:p-6">
            <div className="flex flex-col gap-3 text-center md:gap-4">
              <span className="text-xl font-bold sm:text-2xl md:text-4xl">
                {languageProvider.get("about.teach.title")}
              </span>
              <span className="text-sm text-slate-500 sm:text-base">
                {languageProvider.get("about.teach.desc")}
              </span>
            </div>
            <div className="flex flex-col gap-3 text-center md:gap-4">
              <span className="text-xl font-bold sm:text-2xl md:text-4xl">
                {languageProvider.get("about.thrive.title")}
              </span>
              <span className="text-sm text-slate-500 sm:text-base">
                {languageProvider.get("about.thrive.desc")}
              </span>
            </div>
          </div>
        </div>
        {/* Staff and Contact section*/}
        <div className="min-h-screen">
          <div className="mt-6 w-full px-4 md:mt-10 md:px-20">
            <Separator />
          </div>
          <div
            id="contact"
            className="mt-6 flex w-full flex-col items-center md:mt-10"
          >
            <div className="flex w-full flex-col items-center justify-center gap-3 px-4 md:gap-4 md:px-52">
              <span className="text-3xl font-bold md:text-4xl">
                {languageProvider.get("about.team.title")}
              </span>
              <span className="w-11/12 text-center text-sm text-slate-600 sm:text-base md:w-auto">
                {languageProvider.get("about.team.desc")}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 px-2 md:mt-9 md:gap-6 md:px-4">
              {teamMembers.map((member, index) => {
                return <StaffMember key={index} profile={member} />;
              })}
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col items-center py-4 md:mt-10 md:py-6">
          <span className="w-full px-4 text-center text-xl font-bold sm:text-2xl md:w-9/12 md:text-3xl">
            {languageProvider.get("about.join.title")}
          </span>
          <div className="flex items-center justify-center gap-8 py-6 sm:gap-12 md:gap-20 md:py-10">
            <a
              href="https://chat.whatsapp.com/BcapIUdCapFLBsHgdXVfcQ"
              className="transition-transform hover:scale-110"
            >
              <IoLogoWhatsapp
                className="h-10 w-10 md:h-[50px] md:w-[50px]"
                color="#25D366"
              />
            </a>
            <a
              href="https://discord.gg/eu7WKAnv"
              className="transition-transform hover:scale-110"
            >
              <IoLogoDiscord
                className="h-10 w-10 md:h-[50px] md:w-[50px]"
                color="#5865F2"
              />
            </a>
            <a
              href="https://github.com/LOSLC"
              className="transition-transform hover:scale-110"
            >
              <IoLogoGithub className="h-10 w-10 md:h-[50px] md:w-[50px]" />
            </a>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-background/50 flex w-full flex-col py-4">
          <span className="text-center text-sm text-slate-500">
            {languageProvider.get("footer.copyright")}
          </span>
        </div>
      </div>
    </Layout>
  );
}
