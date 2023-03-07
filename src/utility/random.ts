import { PlayingCards } from "../cards/cards";

/**
 * 
 * @param data: Array of cards, cannot be null;
 * @returns shuffled array of cards
 */

export const initialRandomShuffle = (data: Array<PlayingCards>) => {
    const shuffleData: Array<PlayingCards> | [] = data;
    for (let i = 0; i < shuffleData.length; i++) {
        const swap_idx:number = Math.floor(Math.random() * (shuffleData.length - 1));
        const temp:PlayingCards = shuffleData[i];
        shuffleData[i] = shuffleData[swap_idx];
        shuffleData[swap_idx] = temp;
    }
    return shuffleData;
};

// export const shuffle = (data: Array<PlayingCards>) => {
//     return [];
// }
