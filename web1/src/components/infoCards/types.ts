import type { Track } from '../musicPlayer/types';

export type Card = {
    key?: string;
    title: string;
    year: string;
    date: string;
    description: string;
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
