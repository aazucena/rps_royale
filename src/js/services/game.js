
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
        } else {
            this.rules[winningChoice][losingChoice] = 1
        }
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
        ref.learn("rock", "scissors")
        ref.learn("paper", "rock")
        ref.learn("scissors", "paper")
        this.referee = ref
        this.rounds = props.rounds ?? 3
        this.stats = new Array(this.rounds).fill(null).reduce((obj, _, index) => {
            obj[index + 1] = ''
        }, {})
        this.round = 1
    }
    playRound = (player1, player2) => {
        let judgeStatus = this.referee.judge(player1, player2)
        if (this.round <= this.rounds) {
            this.stats[this.round] = judgeStatus
            this.round += 1
            return judgeStatus === null ? 'draw' : judgeStatus
        } else {
            let countRoundStatus = state => Object.values(this.stats).filter((s) => state === s).length
            let wins = {
                [player1.id]: countRoundStatus(player1.id),
                [player2.id]: countRoundStatus(player2.id),
                draw: countRoundStatus(null)
            }
            let winStatus = Object.entries(wins).sort(([_, a], [__, b]) => b - a)[0][0]
            return winStatus
        } 
    }
}