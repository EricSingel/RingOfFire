export class Game {
    public players: any[] = [];
    public stack: string[] = [];
    public playedCards: any[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 0; i < 14; i++) {
            this.stack.push('ace_'+i)
            this.stack.push('clubs_'+i)
            this.stack.push('diamonds_'+i)
            this.stack.push('hearts_'+i)
        }
        this.stack.sort((a, b) => 0.5 - Math.random());
    }
}