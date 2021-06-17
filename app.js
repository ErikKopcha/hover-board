class HoverBoard {
    constructor(props = {
        squares: 0,
        boardId: '',
        colors: []
    }) {
        this.props = props;
        this.board = document.getElementById(this.props.boardId);
        this.colors = this.props.colors;
        this.SQUARES_NUMBER = this.props.squares;

        if (!this.board) return console.error('board is not defined');
        if (!this.SQUARES_NUMBER || this.SQUARES_NUMBER < 1) return console.error('SQUARES_NUMBER is not defined');
    }

    init() {
        for (let i = 0; i < this.SQUARES_NUMBER; i++) {
            const square = document.createElement('div');
            square.className = `square`;

            square.addEventListener('mouseover', () => this.setColor(square));
            square.addEventListener('mouseleave', () => this.removeColor(square));

            this.board.appendChild(square);
        }
    }

    setColor(square) { 
        square.style.cssText = `
            background-color: ${this.randomColor()};
            box-shadow: 0 0 2px ${this.randomColor()}, 0 0 10px ${this.randomColor()};
        `;
    }

    removeColor(square) {
        square.style.cssText = `
            background-color: #1d1d1d;
            box-shadow: 0 0 5px #000;
        `;
    }

    randomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
}