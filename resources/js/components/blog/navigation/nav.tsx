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
        <header className="relative mb-4 flex justify-center">
            <nav className="border-b-border sticky container flex items-center justify-between border-b p-4">
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
                    <Link href="/login" className={`uppercase ${buttonVariants({ variant: 'default' })}`}>
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
}
