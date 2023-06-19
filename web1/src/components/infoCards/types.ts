import type { Track } from '../musicPlayer/types';

export type Card = {
    key?: string;
    title: LocaleLang[];
    year: string;
    date: string;
    description: LocaleLang[];
    tracksRef?: Track[];
    albums?: Album[];
    imageRef?: string;
    link?: string;
    type: string;
};
export type Album = {
    title: string;
    year: string;
    description?: string;
    tracks: Track[];
    extra?: string;
};

export type LocaleLang = {
    key?: string;
    locale: string;
    text: string;
};
