import { PlayingCards } from './../cards/cards';
export interface Result{
    runningTotal: number;
    playingDirection: "CC" | "CW";
    nextPlayerId: number;
    isWinner: boolean;
    totalNumberOfPlayers: number;
    flipTheCard: boolean;
    currentPlayerId: number;
    isBomb?: boolean;
    bombPlayedBy?: number | null;
    players?: any;
    isReshuffle?: boolean | null;
    playerAliveCards?: Array<number> | null;
    deck: Array<PlayingCards> | null;
    playedCards?: any;
    isDraw1?: boolean | null;
    isDraw2?: boolean | null;
    drawPlayerId: number | null;
}


export const result: Result = {
    "runningTotal": 0,
    "playingDirection": "CW",
    "currentPlayerId": 0,
    "nextPlayerId": 1,
    "isWinner": false,
    "totalNumberOfPlayers": 4,
    "flipTheCard": false,
    "players": [],
    "playerAliveCards" : [],
    "deck" : null,
    "playedCards" : [],
    "isDraw1" : null,
    "isDraw2" : null,
    "drawPlayerId": null,
}