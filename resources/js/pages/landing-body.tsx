import HeroCard from '@/components/home/hero-card';
import JoinButton from '@/components/home/join-button';
import { useLanguage } from '@/components/providers/language-provider';
import { buttonVariants } from '@/components/ui/button';
import { useScrollScale } from '@/hooks/use-scrollscale';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Code, Terminal, Users } from 'lucide-react';

export default function LandingBody() {
    const scale = useScrollScale({ scaleRange: [0.5, 1], scrollRange: [0, 0.5] });
    const languageProvider = useLanguage();

    const missionText = (
        <div className="space-y-4">
            {languageProvider
                .get('landing.mission')
                .split('\n')
                .map((paragraph) => {
                    return <p key={paragraph}>{paragraph}</p>;
                })}
        </div>
    );

    const activities = [
        {
            icon: <Code />,
            title: languageProvider.get('landing.why_join.res1.title'),
            text: languageProvider.get('landing.why_join.res1'),
        },
        {
            icon: <BookOpen />,
            title: languageProvider.get('landing.why_join.res2.title'),
            text: languageProvider.get('landing.why_join.res2'),
        },
        {
            icon: <Users />,
            title: languageProvider.get('landing.why_join.res3.title'),
            text: languageProvider.get('landing.why_join.res3'),
        },
    ];

    return (
        <div className="mt-32 flex min-h-[300vh] flex-col">
            {/* Parallax Section */}
            <div className="min-h-[200vh]">
                <motion.div style={{ scale }} className="sticky top-32 flex w-full flex-col items-center justify-center gap-[600px]">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-4xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text px-4 text-center text-3xl font-bold text-transparent md:text-5xl"
                    >
                        “{languageProvider.get('landing.hero.message')}”
                    </motion.span>

                    <div className="w-full">
                        <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} className="flex w-full flex-wrap justify-center gap-8 px-4 lg:px-20">
                            <HeroCard title="Our Mission" icon={<Terminal className="text-green-400" />} content={missionText} />
                            <HeroCard
                                title="Next Event"
                                icon={<Calendar className="text-blue-400" />}
                                content={
                                    <div className="flex h-full flex-col justify-around space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold">IY2L</h3>
                                            <p>{languageProvider.get('landing.event.iy2l')}</p>
                                        </div>
                                        <div className="mb-6 flex items-center justify-start">
                                            <a
                                                href={'https://discord.gg/B3hPHmvddP'}
                                                className={`${buttonVariants({ variant: 'default' })}`}
                                                target="_blank"
                                            >
                                                {languageProvider.get('landing.event.rsvp')}
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
            <section className="container mx-auto cursor-default px-4 py-20">
                <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16 text-center text-4xl font-bold">
                    {languageProvider.get('landing.why_join')}
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-xl border p-6"
                        >
                            <div className="text-primary mb-4">{activity.icon}</div>
                            <h3 className="mb-2 text-xl font-bold">{activity.title}</h3>
                            <p className="p-4 text-neutral-400">{activity.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="cursor-default px-4 py-20 text-center">
                <h2 className="mb-8 text-3xl font-bold md:text-4xl">{languageProvider.get('landing.footer.question')}</h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl text-neutral-400">{languageProvider.get('landing.footer.desc')}</p>
                <JoinButton />
            </motion.div>
        </div>
    );
}
