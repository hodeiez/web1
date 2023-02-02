import type { Track } from '../musicPlayer/types';

export type Card = {
    title: string;
    year: string;
    date: string;
    description: string;
    tracks?: Track[];
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
