<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePost extends CreateRecord
{
    protected static string $resource = PostResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['slug'] = \Str::slug($data['title']);
        $data['user_id'] = \Auth::id();
        return $data;
    }

    protected function afterCreate(): void
    {
        $this->record->tags()->sync(request()->input('tags', []));
    }

    protected function getRedirectUrl(): string
    {
        return $this->previousUrl ?? $this->getResource()::getUrl('index');
    }
}
