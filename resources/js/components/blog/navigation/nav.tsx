import { buttonVariants } from '@/components/ui/button';
import ThemeSwitch from '@/components/ui/theming/theme-switch';
import { Link } from '@inertiajs/react';
import { Link as NavLink } from './link';

export default function Navbar() {
    const navLinks: NavLink[] = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: 'Store',
            href: '/store',
        },
        {
            name: 'About',
            href: '/about',
        },
    ];

    return (
        <header className="bg-background/50 sticky top-0 z-20 mb-4 flex w-full justify-center border-b backdrop-blur-2xl">
            <nav className="container flex items-center justify-between p-2">
                <Link href="/" className="cursor-default text-2xl font-bold uppercase">
                    loslc
                </Link>
                <ul className="invisible flex h-full w-1/2 items-center justify-center gap-6 sm:visible">
                    {navLinks.map((link, index) => {
                        return (
                            <li className="flex items-center gap-2" key={index}>
                                {link.icon}
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex items-center gap-2">
                    <ThemeSwitch />
                    <Link href="/login" className={`uppercase ${buttonVariants({ variant: 'default', size: 'sm' })}`}>
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
}
