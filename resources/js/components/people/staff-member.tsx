import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';

export interface StaffProfile {
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    image: string;
    bio: string;
}

export default function StaffMember({ profile }: { profile: StaffProfile }) {
    return (
        <Card className="bg-card min-h-[450px] w-full cursor-default sm:min-h-[500px] sm:w-[300px] md:w-[350px]">
            <CardHeader className="flex flex-col items-center justify-center px-4 pt-4 pb-2 sm:px-6 sm:pt-6">
                <img
                    src={profile.image}
                    alt={profile.lastName + profile.firstName}
                    className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36 md:h-44 md:w-44"
                />
                <CardTitle className="mt-3 text-center text-base sm:text-lg">{profile.firstName + ' ' + profile.lastName}</CardTitle>
                <CardDescription>{profile.title}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
                <div className="flex justify-center">
                    <span className="text-foreground/70 text-center text-sm sm:text-base">{profile.bio}</span>
                </div>
            </CardContent>
            <CardFooter className="h-full px-4 sm:px-6">
                <div className="flex h-full w-full items-end justify-center pb-4">
                    <Link
                        href={`mailto:${profile.email}`}
                        className={`${buttonVariants({ variant: 'default', size: 'sm' })} sm:${buttonVariants({ variant: 'default' })}`}
                    >
                        Contact {profile.firstName}
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
