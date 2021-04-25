const fs = require('fs')

function writeCypher() {
    let matchData = "CREATE" +
        "(`T1` : Turn { Number: '1' })," +
        "(`T2` : Turn { Number: '4' })," +
        "(`T3` : Turn { Number: '2' })," +
        "(`T4` : Turn { Number: '3' })," +
        "(`T5` : Turn { Number: '8' })," +
        "(`T6` : Turn { Number: '7' })," +
        "(`T7` : Turn { Number: '6' })," +
        "(`T8` : Turn { Number: '5' })," +
        "(`C1` : Card { Name: 'superStar' })," +
        "(`C2` : Card { Name: 'manager2' })," +
        "(`C3` : Card { Name: 'commonManager' })," +
        "(`C4` : Card { Name: 'commonFoward' })," +
        "(`C5` : Card { Name: 'playerKid' })," +
        "(`C6` : Card { Name: 'bigManager' });"
}