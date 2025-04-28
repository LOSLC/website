import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.min.css"; // ou un autre thème highlight.js
import parse, {
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
} from "html-react-parser";
import React, { useEffect, useRef } from "react";

interface PostContentProps {
  content: string;
}

// Mapping des balises HTML vers leurs classes Tailwind CSS correspondantes
const classMap: Record<string, string> = {
  h1: "text-4xl font-bold my-6",
  h2: "text-3xl font-semibold my-5",
  h3: "text-2xl font-semibold my-4",
  p: "mb-4 text-muted-foreground",
  ul: "list-disc list-inside mb-4 pl-4",
  ol: "list-decimal list-inside mb-4 pl-4",
  a: "text-primary hover:underline",
  blockquote:
    "border-l-4 border-accent pl-4 italic my-4 text-muted-foreground bg-accent/30 p-2",
  pre: "bg-muted p-4 mb-4 overflow-auto text-sm rounded-md",
  code: "bg-muted px-1 font-mono text-sm rounded",
};

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.querySelectorAll("pre").forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }, [content]);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.attribs) {
        const tagName = domNode.name.toLowerCase();
        const tailwindClass = classMap[tagName];

        if (tailwindClass) {
          const { class: existingClass, ...restAttribs } = domNode.attribs;
          const className = [existingClass, tailwindClass]
            .filter(Boolean)
            .join(" ");

          return React.createElement(
            tagName,
            { ...restAttribs, className },
            domToReact(domNode.children as DOMNode[], options),
          );
        }
      }
      return undefined;
    },
  };

  return <div ref={contentRef}>{parse(content, options)}</div>;
};

export default PostContent;
