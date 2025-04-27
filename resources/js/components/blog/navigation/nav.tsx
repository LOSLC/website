import { buttonVariants } from '@/components/ui/button';
import ThemeSwitch from '@/components/ui/theming/theme-switch';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Home, Info, Menu, PenSquare, ShoppingCart, User2, X } from 'lucide-react';
import { useState } from 'react';
import { Link as NavLink } from './link';

export default function Navbar() {
    const { auth } = usePage<SharedData>().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const mobileLinks: NavLink[] = [
        {
            name: 'Home',
            href: '/',
            icon: <Home className="h-5 w-5" />,
        },
        {
            name: 'Blog',
            href: '/blog',
            icon: <PenSquare className="h-5 w-5" />,
        },
        {
            name: 'Store',
            href: '/store',
            icon: <ShoppingCart className="h-5 w-5" />,
        },
        {
            name: 'About',
            href: '/about',
            icon: <Info className="h-5 w-5" />,
        },
    ];

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
        <header className="bg-background/50 sticky top-0 z-50 mb-4 flex w-full justify-center border-b backdrop-blur-2xl">
            <nav className="container flex items-center justify-between p-2">
                <button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
                    {isMenuOpen ? <X className="motion-preset-compress h-6 w-6" /> : <Menu className="motion-preset-compress h-6 w-6" />}
                </button>

                <Link href="/" className="ml-2 cursor-default text-2xl font-bold uppercase sm:ml-0">
                    loslc
                </Link>

                <ul className="hidden h-full w-1/2 items-center justify-center gap-6 sm:flex">
                    {navLinks.map((link, index) => (
                        <li className="flex items-center gap-2" key={index}>
                            {link.icon}
                            <Link href={link.href} className="hover:text-primary">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side Controls */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                        <ThemeSwitch />
                    </div>
                    {auth.user ? (
                        <Link className="flex items-center gap-2" href="/settings">
                            <User2 className="h-5 w-5" />
                            <span className="hidden sm:inline">{auth.user.name}</span>
                        </Link>
                    ) : (
                        <Link href="/login" className={`uppercase ${buttonVariants({ variant: 'default', size: 'sm' })}`}>
                            <span className="hidden sm:inline">Login</span>
                            <User2 className="h-5 w-5 sm:hidden" />
                        </Link>
                    )}
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="motion-preset-blur-down fixed top-16 left-0 z-50 h-screen w-full bg-transparent backdrop-blur-lg sm:hidden">
                        <div className="bg-background container p-4">
                            <ul className="flex flex-col gap-4">
                                {mobileLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="hover:bg-accent flex items-center gap-4 rounded-lg p-2 text-lg"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.icon}
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className="mt-4 border-t pt-4">
                                    <div className="flex items-center justify-between">
                                        <ThemeSwitch />
                                        <span>Toggle Theme</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="h-full" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>
                )}
            </nav>
        </header>
    );
}
