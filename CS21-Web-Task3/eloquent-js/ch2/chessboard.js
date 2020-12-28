let board = "";
for (let r = 0; r<8; ++r) {
    for (let c = 0; c<8; ++c) {
        if (r % 2 === 0) {
            if (c % 2 === 0) {
                board += " ";
            }
            else {
                board += "#";
            }
        }
        else {
            if (c % 2 === 1) {
                board += " ";
            }
            else {
                board += "#";
            }
        }
    }
    board += "\n";
}
board = board.slice(0, -1);
console.log(board);
