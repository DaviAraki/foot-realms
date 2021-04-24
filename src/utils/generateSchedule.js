// Schedule single round `j` for 'n' teams:
export default function generateSchedule(G) {
    function round(n, j) {
        let m = n - 1;
        let round = Array.from({ length: n }, (_, i) => (m + j - i) % m); // circular shift
        round[round[m] = j * (n >> 1) % m] = m; // swapping self-match
        return round;
    }
    const teams = [G.players[0], ...G.board.dummies];
    const schedule = []
    for (let z = 0; z < teams.length; z++) {
        const rodadaOriginal = round(8, z + 1);
        const rodada = [];
        const jasaiu = new Set();
        for (let i = 0; i < rodadaOriginal.length; i++) {
            if (!jasaiu.has(rodadaOriginal[i]) && !jasaiu.has(i)) {
                jasaiu.add(rodadaOriginal[i]);
                jasaiu.add(i);
                rodada.push({ a: { id: i }, b: { id: rodadaOriginal[i] } });
            }
        }
        console.log(z)
        console.log(rodada);
        schedule[z] = rodada

    }
    console.log(schedule)
    return schedule
}



