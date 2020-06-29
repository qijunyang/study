class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Robot {
    constructor(option) {
        this.board = option.board;
        this.whenMoving = option.whenMoving || function() {};
        this.whenRadar = option.whenRadar || function() {};
    }
    start(x, y, speed, degree, weponDegree) {
        this.moveTo(x, y);
        this.speed = speed;
        this.degree = degree;
        this.weponDegree = weponDegree;
        this.activateMover();
        this.activateRadar();
    }
    activateMover() {
        setInterval(() => {
            this.whenMoving();
            this.move();
        }, 300);
    }
    activateRadar() {
        setInterval(() => {
            this.whenRadar();
        }, 100)
    }
    move() {
        const dx = 10;
        const dy = 20;
        this.moveTo(this.x + dx, this.y + dy);
    }
    moveTo(x, y) {
        if (x < 0) {
            x = 0;
        }
        if (y < 0) {
            y = 0;
        }
        if (x > this.board.x) {
            x = this.board.x;
        }
        if (y > this.board.y) {
            y = this.board.y;
        }
        this.x = x;
        this.y = y;
        console.log(this.x, this.y);
    }
}

class Missle {

}

const robot = new Robot({
    board: new Board(600, 600)
});
robot.start(0, 0, 0, 0);