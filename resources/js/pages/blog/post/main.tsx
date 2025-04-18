import { Props } from '@/types/post';
import { Head } from '@inertiajs/react';
import { Eye, Heart } from 'lucide-react';

export default function postPage(props: Props) {
    return (
        <>
            <Head title={props.post.title} />
            <h1 className="mb-2 text-2xl font-black"> {props.post.title} </h1>
            {props.post.image && <img src={`/storage/${props.post.image}`} alt={props.post.title} className="w-full" />}
            <p className="my-3">{props.post.content}</p>
            <div className="flex justify-between">
                <span className="flex">
                    {props.post.likeCount} <Heart />
                </span>
                <span>
                    {props.post.views} <Eye />
                </span>
            </div>
            {console.log(props)}
        </>
    );
}
