import { Breadcrumbs } from '@/components/breadcrumbs';
import LangDialog from '@/components/language/lang-dialog';
import MetaDatas from '@/components/meta-data';
import Navbar from '@/components/navigation/nav';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItemType[];
};

export default function Layout({ children, breadcrumbs = [] }: Props) {
  return (
    <>
      <Head title="LOSLC">
        <MetaDatas />
      </Head>
      <Navbar />
      <LangDialog />
      <main className="flex min-h-screen w-full justify-center pb-6">
        <div className="container p-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div className="relative mt-4">{children}</div>
        </div>
      </main>
    </>
  );
}
