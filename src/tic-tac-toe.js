class TicTacToe {
    constructor() {
        this.player_1='x';
        this.player_2='o';
        this.curr_pl='x';
        /*this.used_sp=Array(3);
        for(let i=0; i<3;i++){
            this.used_sp[i]=Array(3);
        }*/
        this.used_sp=[
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.curr_pl;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.used_sp[rowIndex][columnIndex]==null){
            this.used_sp[rowIndex][columnIndex]=this.curr_pl;
            if(this.curr_pl=='x') this.curr_pl = 'o';
            else this.curr_pl = 'x';
        }
    }

    isFinished() {
        if(this.isDraw() == true) return true;
        if(this.getWinner() != null) return true;
        return false;
    }

    getWinner() {
        if((this.used_sp[0][0]==this.used_sp[1][1])
        &&(this.used_sp[1][1]==this.used_sp[2][2])
        &&(this.used_sp[0][0]==this.used_sp[2][2])
        &&(this.used_sp[0][0]!=null)
        &&(this.used_sp[1][1]!=null)
        &&(this.used_sp[2][2]!=null)) return this.used_sp[1][1];
        if((this.used_sp[0][2]==this.used_sp[1][1])
        &&(this.used_sp[1][1]==this.used_sp[2][0])
        &&(this.used_sp[0][2]==this.used_sp[2][0])
        &&(this.used_sp[0][2]!=null)
        &&(this.used_sp[1][1]!=null)
        &&(this.used_sp[2][0]!=null)) return this.used_sp[1][1];
        if((this.used_sp[0][0]==this.used_sp[0][1])
        &&(this.used_sp[0][1]==this.used_sp[0][2])
        &&(this.used_sp[0][0]==this.used_sp[0][2])
        &&(this.used_sp[0][0]!=null)
        &&(this.used_sp[0][1]!=null)
        &&(this.used_sp[0][2]!=null)) return this.used_sp[0][1];
        if((this.used_sp[1][0]==this.used_sp[1][1])
        &&(this.used_sp[1][1]==this.used_sp[1][2])
        &&(this.used_sp[1][0]==this.used_sp[1][2])
        &&(this.used_sp[1][0]!=null)
        &&(this.used_sp[1][1]!=null)
        &&(this.used_sp[1][2]!=null)) return this.used_sp[1][1];
        if((this.used_sp[2][0]==this.used_sp[2][1])
        &&(this.used_sp[2][1]==this.used_sp[2][2])
        &&(this.used_sp[2][0]==this.used_sp[2][2])
        &&(this.used_sp[2][0]!=null)
        &&(this.used_sp[2][1]!=null)
        &&(this.used_sp[2][2]!=null)) return this.used_sp[2][1];
        if((this.used_sp[0][0]==this.used_sp[1][0])
        &&(this.used_sp[1][0]==this.used_sp[2][0])
        &&(this.used_sp[0][0]==this.used_sp[2][0])
        &&(this.used_sp[0][0]!=null)
        &&(this.used_sp[1][0]!=null)
        &&(this.used_sp[2][0]!=null)) return this.used_sp[1][0];
        if((this.used_sp[0][1]==this.used_sp[1][1])
        &&(this.used_sp[1][1]==this.used_sp[2][1])
        &&(this.used_sp[0][1]==this.used_sp[2][1])
        &&(this.used_sp[0][1]!=null)
        &&(this.used_sp[1][1]!=null)
        &&(this.used_sp[2][1]!=null)) return this.used_sp[1][1];
        if((this.used_sp[0][2]==this.used_sp[1][2])
        &&(this.used_sp[1][2]==this.used_sp[2][2])
        &&(this.used_sp[0][2]==this.used_sp[2][2])
        &&(this.used_sp[0][2]!=null)
        &&(this.used_sp[1][2]!=null)
        &&(this.used_sp[2][2]!=null)) return this.used_sp[1][2];
        return null;
    }

    noMoreTurns() {
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(this.used_sp[i][j]==null) return false;
            }
        }
        return true;
    }

    isDraw() {
        if((this.noMoreTurns()==true)&&(this.getWinner()==null)){
            return true;
        } else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.used_sp[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
