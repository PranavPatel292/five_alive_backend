import { Result } from './../utility/result';
import { PlayingCards } from './cards';
import { handleCardsInPlayingDeck, handlePlayerTurn } from './common';
import {initialRandomShuffle} from "../utility/random"

const handleEqualToWildCards = (data: PlayingCards, returnObject: Result) => {
    switch  (data.wildCardName){
        case '=21':
            returnObject.runningTotal = 21;
            break;
        case '=0':
            returnObject.runningTotal = 0;
            break;
        case '=10':
            returnObject.runningTotal = 10;
            break
        default:
            return;
    }
    return handlePlayerTurn(returnObject, false);
};

const handlePassMeBy = (returnObject: Result) => {
    return handlePlayerTurn(returnObject, false);
}

const handleSkipNextPlayer = (returnObject: Result) => {
    switch(returnObject.playingDirection){
        case 'CC':
            returnObject.currentPlayerId = returnObject.nextPlayerId - 1 < 0 ? returnObject.totalNumberOfPlayers : returnObject.nextPlayerId - 1;
            returnObject.nextPlayerId = returnObject.currentPlayerId - 1 < 0 ? returnObject.totalNumberOfPlayers : returnObject.currentPlayerId - 1;
        case 'CW':
            returnObject.currentPlayerId = returnObject.nextPlayerId + 1 >= returnObject.totalNumberOfPlayers ? 0: returnObject.nextPlayerId + 1;
            returnObject.nextPlayerId = returnObject.currentPlayerId + 1 >= returnObject.totalNumberOfPlayers ? 0: returnObject.currentPlayerId + 1;
    }
    return returnObject;
}

const handleReverseCard = (returnObject: Result) => {
    returnObject.playingDirection =  returnObject.playingDirection === 'CW' ? 'CC' : 'CW';
    switch(returnObject.playingDirection){
        case 'CC':
            returnObject.currentPlayerId = returnObject.currentPlayerId - 1 <= 0 ? 0 : returnObject.currentPlayerId - 1;
            returnObject.nextPlayerId = returnObject.currentPlayerId - 1 < 0 ? returnObject.totalNumberOfPlayers : returnObject.currentPlayerId - 1;
            break;
        case 'CW':
            returnObject.currentPlayerId = returnObject.currentPlayerId + 1 < returnObject.totalNumberOfPlayers ? returnObject.currentPlayerId + 1: 0;
            returnObject.nextPlayerId = returnObject.currentPlayerId + 1 < returnObject.totalNumberOfPlayers ? returnObject.currentPlayerId + 1 : 0;
            break;
    }
    return returnObject;
};

const handleReDeal = (returnObject: Result) => {
    const currentPlayingDeck: any = []

    for(let i = 0; i < returnObject.players.length; ++i){
        for (let j = 0; j < returnObject.players[i].length; ++j) {
            
            currentPlayingDeck.push(returnObject.players[i][j]);
    }
    }

    const shuffleData = initialRandomShuffle(currentPlayingDeck);

    for (let i = 0; i < shuffleData.length; i++) {
        returnObject.players[i % returnObject.totalNumberOfPlayers]?.push(shuffleData[i]);
    }

    return returnObject;
}
export const isDrawCardPlayed = (returnObject: Result, currentPlayerId: number) => {
        if(returnObject.isDraw1 && currentPlayerId !== returnObject.drawPlayerId){
            handleCardsInPlayingDeck(returnObject)
            returnObject.playedCards[currentPlayerId].push(returnObject.deck?.pop())
        }

        if(returnObject.isDraw2 && currentPlayerId!== returnObject.drawPlayerId){
            handleCardsInPlayingDeck(returnObject)
            returnObject.playedCards[currentPlayerId].push(returnObject.deck?.pop());
            handleCardsInPlayingDeck(returnObject)
            returnObject.playedCards[currentPlayerId].push(returnObject.deck?.pop());
        }

        if(returnObject.currentPlayerId === returnObject.drawPlayerId){
            returnObject.drawPlayerId = null;
            returnObject.isDraw1 = null;
            returnObject.isDraw2 = null;
        }
        handlePlayerTurn(returnObject, false);
    
}
const handleDraw1 = (returnObject: Result) => {
    returnObject.drawPlayerId = returnObject.currentPlayerId;
    returnObject.isDraw1 = true;
    return returnObject;
}

const handleDraw2 = (returnObject: Result) => {
    returnObject.drawPlayerId = returnObject.currentPlayerId;
    returnObject.isDraw2 = true;
    return returnObject;
}

const handleBombCard = (returnObject: Result) => {
    returnObject.isBomb = true;
    returnObject.bombPlayedBy = returnObject.currentPlayerId;
    return handlePlayerTurn(returnObject, false);

}
export const handleWildCard = (data: PlayingCards, returnObject: Result) => {

    if(!data.wildCardName) return;

    if (data.wildCardName[0] === '=')
        return handleEqualToWildCards(data, returnObject);

    if(data.wildCardName === 'Reverse')
        return handleReverseCard(returnObject);
    
    if(data.wildCardName === 'PassMeBy')
        return handlePassMeBy(returnObject);
    // TODO: make skip function
    if(data.wildCardName === 'Skip')
        return handleSkipNextPlayer(returnObject);
    // TODO: make draw1 function
    if (data.wildCardName === 'Draw1')
        return handleDraw1(returnObject);
    // TODO: make draw2 function
    if(data.wildCardName === 'Draw2')
        return handleDraw2(returnObject);
    
    if(data.wildCardName === "Bomb")
        return handleBombCard(returnObject);

    // TODO: make re-deal function
    if(data.wildCardName === "ReDeal")
        return handleReDeal(returnObject);
    
}