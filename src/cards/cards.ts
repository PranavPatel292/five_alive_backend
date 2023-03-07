import { card1Color, card2Color, card3Color, card4Color, card5Color, card6Color } from "./cardsThemes";

export interface PlayingCards{
    color: string | null;
    isDigit?: boolean;
    isWildcard: boolean;
    digit: number | null;
    wildCardName?: string | null;
    id?:string | null;
}

export const playingCards: Array<PlayingCards> = [
    {
        "id": "1",
        "color": card1Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 1
    },
    {
        "id": "2",
        "color": card1Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 2
    },
    {
        "id": "3",
        "color": card1Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 3
    },
    {
        "id": "4",
        "color": card1Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 4
    },
    {
        "id": "5",
        "color": card1Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 5
    },
    {
        "id": "6",
        "color": card1Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 6
    },
    {
        "id": "7",
        "color": card1Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 7
    },
    {
        "id": "8",
        "color": card2Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 1
    },
    {
        "id": "9",
        "color": card2Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 2
    },
    {
        "id": "10",
        "color": card1Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 3
    },
    {
        "id": "11",
        "color": card2Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 4
    },
    {
        "id": "12",
        "color": card2Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 5
    },
    {
        "id": "13",
        "color": card2Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 6
    },
    {
        "id": "14",
        "color": card2Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 7
    },
    {
        "id": "15",
        "color": card3Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 1
    },
    {
        "id": "16",
        "color": card3Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 2
    },
    {
        "id": "17",
        "color": card3Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 3
    },
    {
        "id": "18",
        "color": card3Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 4
    },
    {
        "id": "19",
        "color": card3Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 5
    },
    {
        "id": "20",
        "color": card3Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 6
    },
    {
        "id": "21",
        "color": card3Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 7
    },
    {
        "id": "22",
        "color": card4Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 1
    },
    {
        "id": "23",
        "color": card4Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 2
    },
    {
        "id": "24",
        "color": card4Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 3
    },
    {
        "id": "25",
        "color": card4Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 4
    },
    {
        "id": "26",
        "color": card4Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 5
    },
    {
        "id": "27",
        "color": card4Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 6
    },
    {
        "id": "28",
        "color": card4Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 7
    },
    {
        "id": "29",
        "color": card5Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 1
    },
    {
        "id": "30",
        "color": card5Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 2
    },
    {
        "id": "31",
        "color": card5Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 3
    },
    {
        "id": "32",
        "color": card5Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 4
    },
    {
        "id": "33",
        "color": card5Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 5
    },
    {
        "id": "34",
        "color": card5Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 6
    },
    {
        "id": "35",
        "color": card5Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 7
    },
    {
        "id": "36",
        "color": card6Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 1
    },
    {
        "id": "37",
        "color": card6Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 2
    },
    {
        "id": "38",
        "color": card6Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 3
    },
    {
        "id": "39",
        "color": card6Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 4
    },
    {
        "id": "40",
        "color": card6Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 5
    },
    {
        "id": "41",
        "color": card6Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 6
    },
    {
        "id": "42",
        "color": card6Color,
        "isDigit": true,
        "isWildcard": false,
        "digit": 7
    },
    {
        "id": "43",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Reverse",
    },
    {
        "id": "44",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Reverse",
    },
    {
        "id": "45",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Draw1",
    },
    {
        "id": "46",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Draw1",
    },
    {
        "id": "47",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Draw2",
    },
    {
        "id": "48",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Draw2",
    },
    {
        "id": "49",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "PassMeBy",
    },
    {
        "id": "50",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "PassMeBy",
    },
    {
        "id": "51",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "PassMeBy",
    },
    {
        "id": "52",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "PassMeBy",
    },
    {
        "id": "53",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Skip",
    },
    {
        "id": "54",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Skip",
    },
    {
        "id": "55",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Skip",
    },
    {
        "id": "56",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Skip",
    },
    {
        "id": "57",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Skip",
    },
    {
        "id": "58",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Skip",
    },
    {
        "id": "59",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=21",
    },
    {
        "id": "60",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=21",
    },
    {
        "id": "61",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=21",
    },
    {
        "id": "62",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=21",
    },
    {
        "id": "63",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=21",
    },
    {
        "id": "64",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=0",
    },
    {

        'id': "65",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=0",
    },
    {
        "id": "66",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=0",
    },
    {
        "id": "67",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=10",
    },
    {
        "id": "68",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "=10",
    },
    {
        "id": "69",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "ReDeal",
    },
    {
        "id": "70",
        "color": null,
        "isDigit": true,
        "isWildcard": true,
        "digit": null,
        "wildCardName": "Bomb",
    },
]