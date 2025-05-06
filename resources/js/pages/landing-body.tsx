import HeroCard from "@/components/home/hero-card";
import JoinButton from "@/components/home/join-button";
import { useLanguage } from "@/components/providers/language-provider";
import { buttonVariants } from "@/components/ui/button";
import { useScrollScale } from "@/hooks/use-scrollscale";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Terminal, Users, Code, BookOpen, Calendar } from "lucide-react";

export default function LandingBody() {
  const scale = useScrollScale({ scaleRange: [0.5, 1], scrollRange: [0, 0.5] });
  const languageProvider = useLanguage();

  const missionText = (
    <div className="space-y-4">
      {languageProvider
        .get("landing.mission")
        .split("\n")
        .map((paragraph) => {
          return <p key={paragraph}>{paragraph}</p>;
        })}
    </div>
  );

  const activities = [
    {
      icon: <Code />,
      title: languageProvider.get("landing.why_join.res1.title"),
      text: languageProvider.get("landing.why_join.res1"),
    },
    {
      icon: <BookOpen />,
      title: languageProvider.get("landing.why_join.res2.title"),
      text: languageProvider.get("landing.why_join.res2"),
    },
    {
      icon: <Users />,
      title: languageProvider.get("landing.why_join.res3.title"),
      text: languageProvider.get("landing.why_join.res3"),
    },
  ];

  return (
    <div className="flex flex-col mt-32 min-h-[300vh]">
      {/* Parallax Section */}
      <div className="h-[200vh]">
        <motion.div
          style={{ scale }}
          className="sticky top-32 flex flex-col items-center justify-center w-full gap-[600px]"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl px-4 text-3xl font-bold text-center md:text-5xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            “{languageProvider.get("landing.hero.message")}”
          </motion.span>

          <div className="w-full">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              className="w-full gap-8 px-4 flex flex-wrap lg:px-20 justify-center"
            >
              <HeroCard
                title="Our Mission"
                icon={<Terminal className="text-green-400" />}
                content={missionText}
              />
              <HeroCard
                title="Next Event"
                icon={<Calendar className="text-blue-400" />}
                content={
                  <div className="space-y-4 h-full flex justify-around flex-col">
                    <div>
                      <h3 className="text-xl font-bold">IY2L</h3>
                      <p>{languageProvider.get("landing.event.iy2l")}</p>
                    </div>
                    <div className="flex items-center justify-start mb-6">
                      <a
                        href={"https://discord.gg/B3hPHmvddP"}
                        className={`${buttonVariants({ variant: "default" })}`}
                        target="_blank"
                      >
                        {languageProvider.get("landing.event.rsvp")}
                      </a>
                    </div>
                  </div>
                }
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Community Section */}
      <section className="container px-4 py-20 mx-auto cursor-default">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-4xl font-bold text-center"
        >
          {languageProvider.get("landing.why_join")}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border"
            >
              <div className="mb-4 text-primary">{activity.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{activity.title}</h3>
              <p className="text-neutral-400">{activity.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="px-4 py-20 text-center cursor-default"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
          {languageProvider.get("landing.footer.question")}
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-xl text-neutral-400">
          {languageProvider.get("landing.footer.desc")}
        </p>
        <JoinButton />
      </motion.div>
    </div>
  );
}
