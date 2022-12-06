
class Observer {
    constructor() {
        this.rules = {}
    }
    getChoices = () => Object.keys(this.rules)
    learn = (winningChoice, losingChoice) => {
        // validates the rule for the winner
        if (!(winningChoice in this.rules)) {
            // add new rule for that winner
            this.rules[winningChoice] = {}
        } 
        this.rules[winningChoice][losingChoice] = 1
        
    }
    judge = (player1, player2) => {
        if (player1.choice === player2.choice) {
            return null
        } else {
            return (this.rules[player1.choice][player2.choice] === 1) ? player1.id : player2.id
        }
    } 
}

export default class {
    constructor(props) {
        var ref = new Observer()
        ref.learn("rock", "scissor")
        ref.learn("paper", "rock")
        ref.learn("scissor", "paper")
        this.referee = ref
        this.rounds = props?.rounds ?? 3
        this.history = {}
        this.score = {}
        this.players = {}
        this.round = 0
    }
    playRound = (player1, player2) => {
        this.players = { [player1.id]: player1, [player2.id]: player2 }
        let judgeStatus = this.referee.judge(player1, player2)
        let countRoundStatus = round => Object.values(this.history).filter((r) => round === r).length
        this.history[this.round] = judgeStatus
        this.round += 1
        this.score = {
            [player1.id]: countRoundStatus(player1.id),
            [player2.id]: countRoundStatus(player2.id),
        }
        if (Object.values(this.score).some((v) => v >= this.rounds)) {

            let winner = Object.entries(this.score).sort(([_a, a], [_b, b]) => b - a)[0][0]
            return {
                currentTurn: player1,
                state: 'winner',
                status: {
                    ...this.players[winner],
                    score: this.score,
                },
                totalRounds: this.round + 1,
                round: this.round + 1,
                prevRound: this.round,
                history: this.history,
                winner: judgeStatus,
            }
        }
        return {
            currentTurn: player1,
            state: 'play',
            status: {
                ...this.score,
            },
            round: this.round + 1,
            prevRound: this.round,
            history: this.history,
            winner: judgeStatus,
        }

    }
}