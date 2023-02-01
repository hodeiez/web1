import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Card } from '@/components/infoCards/types';

export const useInfoCardsStore = defineStore('infoCards', () => {
    const list = ref([{} as Card] as Card[]);
    const addList = (newList: Card[]) => {
        list.value = newList;
    };
    const addCard = (card: Card) => {
        list.value = list.value.concat(card);
    };
    const removeCard = (card: Card) => {
        list.value = list.value.filter((t) => t !== card);
    };
    return { list, addList, addCard, removeCard };
});
