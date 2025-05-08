import { ReactNode } from 'react';

export default function HeroCard({ icon, title, content, className }: { icon: ReactNode; title: string; content: ReactNode; className?: string }) {
    return (
        <div className={`flex min-h-[300px] w-[400px] cursor-default flex-col overflow-hidden rounded-xl border md:w-[500px] ${className} bg-card`}>
            <div className="bg-accent border-b">
                <div className="flex gap-2 p-4 font-medium">
                    {icon}
                    <span>{title}</span>
                </div>
            </div>
            <code className="bg-card h-full p-4 text-lg">{content}</code>
        </div>
    );
}
