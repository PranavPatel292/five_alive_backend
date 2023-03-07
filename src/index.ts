import { playingCards, PlayingCards } from './cards/cards';
import { initialRandomShuffle } from './utility/random';
import express, { Express, Request, Response } from 'express';
import { handleWildCard, isDrawCardPlayed } from './cards/wildCards';
import { Result, result } from './utility/result';
import { handlePlayerTurn, takeOneAliveCard, handleCardsInPlayingDeck } from './cards/common';

const app: Express = express();
let returnObject:Result = result;

app.use(express.json());

app.get('/shuffle', (_: Request, res: Response) => {
    const shuffleData: Array<PlayingCards> | [] = initialRandomShuffle(playingCards);

    if(shuffleData === undefined) return

    if (returnObject.players.length === 0) {
        for (let i = 0; i < returnObject.totalNumberOfPlayers; i++){   
            returnObject.playerAliveCards?.push(5);
        }
    }

    for (let i = 0; i < returnObject.totalNumberOfPlayers; i++){
        const newArray: Array<PlayingCards> = [];
        returnObject.players?.push(newArray);
    }

    for (let i = 0; i < shuffleData.length; i++) {
        if (i < returnObject.totalNumberOfPlayers * 10){
            returnObject.players[i % returnObject.totalNumberOfPlayers]?.push(shuffleData[i]);
        }else{
            returnObject.deck?.push(shuffleData[i]);
        }
    }

    return res.send(returnObject);
});

app.post("/play", (req: Request, res: Response) => {
    const currentPlayerId = req.body.currentPlayerId;
    if (!req.body && returnObject.isDraw1 || returnObject.isDraw2) {
        // take one alive card of each player, if the current
        // player has won the game.
        
        if (returnObject.players[currentPlayerId].length === 0) takeOneAliveCard(returnObject);

        isDrawCardPlayed(returnObject, currentPlayerId);
        res.send(returnObject);
        return;
    }

    if (!req.body) return;

    if(returnObject.players.length === 0 && returnObject.playerAliveCards?.length === 0 ) return;
    
    const { isWildcard, digit, id } = req.body;

    if (!id) return;

    
    const currentPlayerCards = returnObject.players[returnObject.currentPlayerId];

    const filterCards: PlayingCards = currentPlayerCards.filter((card: PlayingCards) => card.id === id)[0];


    // TODO: send error if player is not allowed to use this card.
    if (!filterCards) return returnObject;

    returnObject.playedCards?.push(filterCards);

    const newCardsArray = currentPlayerCards.filter((card:PlayingCards) => card.id !== id);

    returnObject.players[returnObject.currentPlayerId] = newCardsArray;

    // check if the bomb card has been played or not;
    if (returnObject.isBomb){

        if (returnObject.players[currentPlayerId].length === 0) takeOneAliveCard(returnObject);

        if (digit !== 0) {
            takeOneAliveCard(returnObject);
            res.send(returnObject);
            return;
        } 

        if (returnObject.currentPlayerId === returnObject.bombPlayedBy){
            returnObject.bombPlayedBy = null;
            returnObject.isBomb = false;
        }
        handlePlayerTurn(returnObject, false)
        res.send(returnObject);
        return;
    }

    // if not bomb then check if the wildcard card has been played or not;
    if (isWildcard) {
        if (returnObject.players[currentPlayerId].length === 0) takeOneAliveCard(returnObject);
        const result = handleWildCard(req.body, returnObject);
        res.send(returnObject);
        return;
    }

    // if neither has been true then increment the running total and pass the game to next
    // player depending on the game direction.
    returnObject.runningTotal+= digit;

    if (returnObject.runningTotal > 21){
        returnObject.runningTotal = 0;
        takeOneAliveCard(returnObject);
        handlePlayerTurn(returnObject, false);
        res.send(returnObject);
        return;
    }

    if (returnObject.players[currentPlayerId].length === 0) takeOneAliveCard(returnObject);
    handlePlayerTurn(returnObject, false);
    res.send(returnObject);
})   

app.listen(3000, () => { 
console.log("🚀 the server is running on the port 3000");
});