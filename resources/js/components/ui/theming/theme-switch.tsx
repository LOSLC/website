import { useAppearance } from '@/hooks/use-appearance';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../button';

export default function ThemeSwitch() {
    const { appearance, updateAppearance } = useAppearance();
    return (
        <>
            <Button
                variant={'ghost'}
                onClick={() => {
                    updateAppearance(appearance === 'light' ? 'dark' : 'light');
                }}
            >
                {appearance === 'dark' ? <Sun /> : <Moon />}
            </Button>
        </>
    );
}
