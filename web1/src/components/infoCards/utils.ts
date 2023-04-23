export const buildTreeByYear = (cards: any[]) => {
    return cards.reduce((result: any, card) => {
        if (card.year != null) {
            result[card.year] === undefined
                ? (result[card.year] = new Array(card))
                : result[card.year].push(card);
        }
        return result;
    }, {});
};

export const setCardColor = (type: string) => {
    switch (type) {
        case 'Professional':
            return 'rgba(84, 101, 255, 1)';
        case 'Personal':
            return 'rgba(0, 145, 77, 1)';
        case 'Creative':
            return 'rgba(170, 50, 7, 1)';
        default:
            return 'transparent';
    }
};
