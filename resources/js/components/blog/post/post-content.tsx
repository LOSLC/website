import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.min.css';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostContentProps {
  content: string;
}

const classMap: Record<string, string> = {
  img: 'rounded my-2',
  h1: 'text-4xl font-bold my-6',
  h2: 'text-3xl font-semibold my-5 text-white/90',
  h3: 'text-2xl font-semibold my-4 text-white/80',
  p: 'mb-4 text-muted-foreground',
  ul: 'list-disc list-inside mb-4 pl-4 text-muted-foreground',
  ol: 'list-decimal list-inside mb-4 pl-4 text-muted-foreground',
  a: 'text-primary hover:underline',
  blockquote: 'border-l-4 border-accent pl-4 italic my-4 text-muted-foreground bg-accent/30 p-2',
  pre: 'bg-muted p-4 mb-4 overflow-auto text-sm rounded-md',
  code: 'bg-accent px-2 py-1 font-mono text-sm rounded text-accent-foreground',
};

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ src, alt }) => <img src={src} alt={alt} className={classMap.img} />,
        h1: ({ children }) => <h1 className={classMap.h1}>{children}</h1>,
        h2: ({ children }) => <h2 className={classMap.h2}>{children}</h2>,
        h3: ({ children }) => <h3 className={classMap.h3}>{children}</h3>,
        p: ({ children }) => <p className={classMap.p}>{children}</p>,
        ul: ({ children }) => <ul className={classMap.ul}>{children}</ul>,
        ol: ({ children }) => <ol className={classMap.ol}>{children}</ol>,
        a: ({ href, children }) => (
          <a href={href} target="_blank" className={classMap.a}>
            {children}
          </a>
        ),
        blockquote: ({ children }) => <blockquote className={classMap.blockquote}>{children}</blockquote>,
        pre: ({ children }) => <pre className={classMap.pre}>{children}</pre>,
        code: ({ className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          if (match) {
            const language = match[1];
            const highlighted = hljs.highlight(String(children), { language }).value;
            return <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: highlighted }} {...props} />;
          }
          return (
            <code className={classMap.code} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default PostContent;
