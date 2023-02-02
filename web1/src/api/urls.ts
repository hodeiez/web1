import type { Card } from '@/components/infoCards/types';
import type { Track } from '@/components/musicPlayer/types';

export const MyAPI = {
    baseUrl: 'https://hodei-web1.onrender.com/api/',
    infoCards: 'infocards/',
    audioRef: 'audio/ref/',
    imageRef: 'image/ref/',
};
export const getCardsByRange = async (
    from: string,
    to: string,
    action: Function
) => {
    const res = await fetch(`${MyAPI.baseUrl}${MyAPI.infoCards}${from}/${to}`);
    const ob = await res.json();
    action(ob);
};
export const getImageByRef = async (ref: string, prop: any) => {
    if (ref != undefined) {
        const res = await fetch(`${MyAPI.baseUrl}${MyAPI.imageRef}${ref}`);
        const ob = await res.blob();
        prop.value = URL.createObjectURL(ob);
    } else {
        prop.value = {};
    }
};
export const getAudioByRef = async (track: Track, action: Function) => {
    const res = await fetch(
        `${MyAPI.baseUrl}${MyAPI.audioRef}${track.fileRef}`
    );
    const ob = await res.blob();
    track.fileRef = URL.createObjectURL(ob);
    action(track);
};
