import { ReactNode } from "react";

export default function HeroCard({
  icon,
  title,
  content,
  className,
}: { icon: ReactNode; title: string; content: ReactNode; className?: string }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl min-h-[300px]
                  border cursor-default w-[400px] md:w-[500px] ${className}
                  bg-card`}
    >
      <div className="border-b bg-accent">
        <div className="font-medium flex gap-2 p-4">
          {icon}
          <span>{title}</span>
        </div>
      </div>
      <code className="text-lg p-2 bg-card">{content}</code>
    </div>
  );
}
