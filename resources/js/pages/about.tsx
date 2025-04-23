import Layout from "@/components/blog/layout";
import StaffMember, { StaffProfile } from "@/components/people/staff-member";
import { Separator } from "@/components/ui/separator";
import { Link } from "@inertiajs/react";
import { IoLogoDiscord, IoLogoGithub, IoLogoWhatsapp } from "react-icons/io5";

const STAFF = "/assets/img/staff";

const teamMembers: StaffProfile[] = [
  {
    firstName: "Daniel",
    lastName: "AMETSOWOU",
    email: "frusadev@gmail.com",
    title: "Founder",
    image: `${STAFF}/dani.png`,
    bio: "Daniel has a lifelong passion for science and technology. He began programming in middle school and has been creating projects and sharpening his skills ever since.",
  },
  {
    firstName: "Laureen",
    lastName: "EKON",
    email: "ekonlaureen16@gmail.com",
    title: "Community Relations Manager",
    image: `${STAFF}/laur.png`,
    bio: "Laureen is dedicated to open-source and robotics, actively contributing to innovative projects and collaborating with the tech community. She thrives on learning and staying ahead of emerging technologies.",
  },
  {
    firstName: "Rayane",
    lastName: "TCHABODI",
    email: "rayanetchabodi360@gmail.com",
    title: "Communication Lead",
    image: `${STAFF}/ray.jpg`,
    bio: "Rayane is a full-stack web developer who enjoys creating modern, scalable applications. He is always eager to learn new technologies and improve user experiences.",
  },
  {
    firstName: "Denise",
    lastName: "DEABALO",
    email: "dinaisedeabalo@gmail.com",
    title: "Secretary",
    image: `${STAFF}/den.png`,
    bio: "Denise is a full-stack web developer who builds dynamic, responsive, and efficient web applications. She loves solving problems and exploring new technologies to enhance user experiences.",
  },
  {
    firstName: "Emerick",
    lastName: "MITCHIKPE",
    email: "mitchikpeemerick2@gmail.com",
    title: "Community Manager",
    image: `${STAFF}/emer.png`,
    bio: "Emerick specializes in cybersecurity and is the founder of ETHIX Community. As a CTF player, challenge creator, and freelance junior penetration tester, he is steadily advancing in the field.",
  },
  {
    firstName: "Bayédzè",
    lastName: "COMLAN",
    email: "bayedzenetworking@gmail.com",
    title: "Community Manager",
    image: `${STAFF}/bay.png`,
    bio: "Bayédzè is a system administrator with a strong focus on network security and infrastructure management. He enjoys optimizing systems and ensuring reliable performance.",
  },
  {
    firstName: "Kallern",
    lastName: "ATTER",
    email: "hackusman@gmail.com",
    title: "Project Security Tester",
    image: `${STAFF}/kall.png`,
    bio: "Kallern is a cybersecurity enthusiast passionate about ethical hacking and digital security. He continuously sharpens his skills to protect systems from emerging threats.",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="relative h-screen w-full flex-col scroll-smooth">
        <div className="bg-background/50 z-20 flex min-h-[60vh] w-full justify-center backdrop-blur-2xl md:h-screen md:items-center">
          <div className="flex w-10/12 items-center justify-center py-16 sm:w-8/12 md:py-0">
            <span className="text-foreground motion-preset-slide-up text-center text-3xl font-extrabold sm:text-4xl md:text-6xl">
              A community for{" "}
              <span className="from-primary bg-gradient-to-r to-sky-400 bg-clip-text text-transparent">
                open-source
              </span>{" "}
              enthousiasts and{" "}
              <span className="bg-gradient-to-r from-yellow-800 to-yellow-400 bg-clip-text text-transparent">
                Linux
              </span>{" "}
              lovers.
            </span>
          </div>
        </div>
        {/* Next section */}
        <div className="flex h-auto w-full flex-col items-center justify-around gap-6 px-4 py-8 md:h-screen md:flex-row md:gap-10 md:px-20 md:py-4">
          <div className="bg-background flex h-full w-full flex-col justify-around gap-8 rounded-xl p-4 sm:w-11/12 md:w-1/2 md:gap-0 md:p-6">
            <div className="flex flex-col gap-3 text-center md:gap-4">
              <span className="text-xl font-bold sm:text-2xl md:text-4xl">
                Building Open-Source as a community
              </span>
              <span className="text-sm text-slate-500 sm:text-base">
                Open-source thrives on collaboration and shared ownership.
                Contributors create innovative solutions that benefit everyone,
                driving a movement that reshapes technology.
              </span>
            </div>
            <div className="flex flex-col gap-3 text-center md:gap-4">
              <span className="text-xl font-bold sm:text-2xl md:text-4xl">
                Grow together
              </span>
              <span className="text-sm text-slate-500 sm:text-base">
                Growth is stronger when shared. Through mentorship and
                collaboration, we accelerate progress and create an environment
                where everyone can thrive together.
              </span>
            </div>
          </div>
          <div className="bg-background flex h-full w-full flex-col justify-around gap-8 rounded-xl p-4 sm:w-11/12 md:w-1/2 md:gap-0 md:p-6">
            <div className="flex flex-col gap-3 text-center md:gap-4">
              <span className="text-xl font-bold sm:text-2xl md:text-4xl">
                Teach others by sharing your knowledge
              </span>
              <span className="text-sm text-slate-500 sm:text-base">
                Knowledge sharing empowers others, fosters innovation, and
                pushes boundaries. It's about making a meaningful impact beyond
                individual learning.
              </span>
            </div>
            <div className="flex flex-col gap-3 text-center md:gap-4">
              <span className="text-xl font-bold sm:text-2xl md:text-4xl">
                Thriving Together, Not Just Surviving
              </span>
              <span className="text-sm text-slate-500 sm:text-base">
                In a strong community, no one struggles alone. We support each
                other, share knowledge, and grow collectively. Progress is
                faster and more fulfilling when we build together.
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
              <span className="text-3xl font-bold md:text-4xl">Our team</span>
              <span className="w-11/12 text-center text-sm text-slate-600 sm:text-base md:w-auto">
                Passionate, skilled, and collaborative, our team brings ideas to
                life and drives innovation forward.
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
            Join our community and start collaborating today.
          </span>
          <div className="flex items-center justify-center gap-8 py-6 sm:gap-12 md:gap-20 md:py-10">
            <Link
              href="https://chat.whatsapp.com/BcapIUdCapFLBsHgdXVfcQ"
              className="transition-transform hover:scale-110"
            >
              <IoLogoWhatsapp
                className="h-10 w-10 md:h-[50px] md:w-[50px]"
                color="#25D366"
              />
            </Link>
            <Link
              href="https://discord.gg/eu7WKAnv"
              className="transition-transform hover:scale-110"
            >
              <IoLogoDiscord
                className="h-10 w-10 md:h-[50px] md:w-[50px]"
                color="#5865F2"
              />
            </Link>
            <Link
              href="https://github.com/LOSLC"
              className="transition-transform hover:scale-110"
            >
              <IoLogoGithub className="h-10 w-10 md:h-[50px] md:w-[50px]" />
            </Link>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-background/50 flex w-full flex-col py-4">
          <span className="text-center text-sm text-slate-500">
            © 2025 LOSLC. All rights reserved.
          </span>
        </div>
      </div>
    </Layout>
  );
}
