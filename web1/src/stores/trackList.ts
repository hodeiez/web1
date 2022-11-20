import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Track } from '@/components/musicPlayer/types';

export const useTracksListStore = defineStore('trackList', () => {
    const list = ref([{} as Track] as Track[]);
    const addList = (newList: Track[]) => {
        list.value = newList;
    };
    const addTrack = (track: Track) => {
        list.value = list.value.concat(track);
    };
    const removeTrack = (track: Track) => {
        list.value = list.value.filter((t) => t !== track);
    };
    return { list, addList, addTrack, removeTrack };
});
