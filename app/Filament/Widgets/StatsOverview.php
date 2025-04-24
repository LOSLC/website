<?php

namespace App\Filament\Widgets;

use App\Models\Post;
use Filament\Support\Enums\IconPosition;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected ?string $heading = 'Posts stats overview';

    protected function getStats(): array
    {
        return [
            Stat::make('All posts', Post::count())
                ->color('info')
                ->description('All posts created')
                ->descriptionIcon('heroicon-m-rectangle-stack', IconPosition::Before),

            Stat::make('Published posts', Post::where('status', 'published')->count())
                ->color('success')
                ->description('Published created posts')
                ->descriptionIcon('heroicon-m-signal', IconPosition::Before),

            Stat::make('Views', Post::sum('views'))
                ->color('info')
                ->description('All views of posts')
                ->descriptionIcon('heroicon-m-eye', IconPosition::Before),
        ];
    }
}
