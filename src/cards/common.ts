import { initialRandomShuffle } from '../utility/random';
import { Result } from './../utility/result';
import { PlayingCards } from './cards';

export const takeOneAliveCard = (returnObject: Result) => {
    const currentPlayerId = returnObject.currentPlayerId;
        if (returnObject.playerAliveCards){
            returnObject.playerAliveCards[currentPlayerId] -= 1;
        }
}

const handleNextPlayerTurn = (returnObject: Result) => {
    switch(returnObject.playingDirection){
        case 'CC':
            returnObject.nextPlayerId -= 1;
            returnObject.nextPlayerId = returnObject.nextPlayerId < 0 ? returnObject.totalNumberOfPlayers : returnObject.nextPlayerId;
        
        case 'CW':
            returnObject.nextPlayerId += 1;
            returnObject.nextPlayerId = returnObject.nextPlayerId >= returnObject.totalNumberOfPlayers ? 0 : returnObject.nextPlayerId;

    }
    return returnObject;
}

export const handlePlayerTurn = (returnObject: Result, isReversePlayed: boolean) => {
    switch (returnObject.playingDirection){
        case 'CC':
            if (isReversePlayed){
                returnObject.nextPlayerId = returnObject.currentPlayerId;
                returnObject.currentPlayerId = returnObject.currentPlayerId != 0 ? returnObject.currentPlayerId : returnObject.totalNumberOfPlayers;       
            }
            else{
                returnObject.currentPlayerId = returnObject.nextPlayerId;
            }
            return handleNextPlayerTurn(returnObject);

        case 'CW':
            if(isReversePlayed){
                returnObject.currentPlayerId = returnObject.currentPlayerId >= returnObject.totalNumberOfPlayers ? 0 : returnObject.currentPlayerId + 1;
                returnObject.nextPlayerId = returnObject.currentPlayerId;
            }
            else{
                returnObject.currentPlayerId = returnObject.nextPlayerId;
            }
            return handleNextPlayerTurn(returnObject);
    }
}

const putDiscardCardToDeck = (returnObject: Result) => {

    if (returnObject.playedCards === null) return;

    const playedCards: Array<PlayingCards> = returnObject.playedCards;

    const shufflePlayingCards = initialRandomShuffle(playedCards);

    returnObject.playedCards = [];

    returnObject.deck = shufflePlayingCards;
}

export const handleCardsInPlayingDeck = (returnObject: Result) => {
    if (returnObject.deck?.length !== 0) return;
    putDiscardCardToDeck(returnObject);
}

