import parse, { DOMNode, domToReact, HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';

interface PostContentProps {
    content: string;
}

// Mapping des balises HTML vers leurs classes Tailwind CSS correspondantes
const classMap: Record<string, string> = {
    h1: 'text-4xl font-bold my-6',
    h2: 'text-3xl font-semibold my-5',
    h3: 'text-2xl font-semibold my-4',
    p: 'mb-4 text-muted-foreground',
    ul: 'list-disc list-inside mb-4 pl-4',
    ol: 'list-decimal list-inside mb-4 pl-4',
    a: 'text-primary hover:underline',
    blockquote: 'border-l-4 border-accent pl-4 italic my-4 text-muted-foreground bg-accent/30 p-2',
    pre: 'bg-muted p-4 mb-4 overflow-auto',
    code: 'bg-muted px-1 font-mono text-sm',
};

const PostContent: React.FC<PostContentProps> = ({ content }) => {
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            // Vérifie qu'il s'agit d'un élément HTML avec nom de balise
            if (domNode.type === 'tag' && domNode.attribs) {
                const tagName = domNode.name.toLowerCase();
                const tailwindClass = classMap[tagName];

                if (tailwindClass) {
                    // Extrait et supprime l'attribut 'class' original
                    const { class: existingClass, ...restAttribs } = domNode.attribs;
                    const className = [existingClass, tailwindClass].filter(Boolean).join(' ');

                    return React.createElement(tagName, { ...restAttribs, className }, domToReact(domNode.children as DOMNode[], options));
                }
            }
            return undefined;
        },
    };

    // Si vous ne voyez rien, vérifiez que 'content' contient bien du HTML valide
    return <div>{parse(content, options)}</div>;
};

export default PostContent;
