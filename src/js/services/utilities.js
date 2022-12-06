
const randomColor = () => {
    let min = 5117695
    let max = 9201919
    let decimal = Math.floor(Math.random() * (max  - min + 1) + min)
    let hex = decimal.toString(16)
    return "#" + hex
}

export { randomColor }
