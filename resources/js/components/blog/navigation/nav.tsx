import { buttonVariants } from '@/components/ui/button';
import ThemeSwitch from '@/components/ui/theming/theme-switch';
import { Link } from './link';

export default function Navbar({ links }: { links?: Link[] }) {
    return (
        <div className="relative">
            <nav className="border-b-border sticky flex h-[100px] items-center justify-between border-b px-8">
                <span className="cursor-default text-2xl font-bold uppercase" onClick={() => window.open('http://localhost:8000')}>
                    loslc
                </span>
                <div className="invisible flex h-full w-1/2 items-center justify-center gap-6 sm:visible">
                    {links?.map((link, index) => {
                        return (
                            <div className="flex items-center gap-2">
                                {link.icon}
                                <a href={link.href} key={index}>
                                    {link.name}
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitch />
                    <a href="/login" className={`rounded-none uppercase ${buttonVariants({ variant: 'default' })}`}>
                        Login
                    </a>
                </div>
            </nav>
        </div>
    );
}
