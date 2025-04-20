import { Breadcrumbs } from '@/components/breadcrumbs';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import React from 'react';
import Navbar from './navigation/nav';

type Props = { children: React.ReactNode; breadcrumbs?: BreadcrumbItemType[] };

export default function Layout({ children, breadcrumbs = [] }: Props) {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen w-full justify-center pb-6">
                <div className="container">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <div className="mt-4 p-4">{children}</div>
                </div>
            </main>
        </>
    );
}
