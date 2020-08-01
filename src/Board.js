import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    border: 1px #bdbbbb solid;
    margin-left: 20%;
    width: 50%;
`;
const Hidden = styled.p`
    border: 1px #bdbbbb solid;
    background-color: lightblue;
    color: lightblue;
    width: 9.3%;
    height: 50px;
    display: inline-block;
    margin: 2px;
`;

const Piece = styled.p`
    border: 1px #bdbbbb solid;
    background-color: lightblue;
    width: 9.54%;
    height: 50px;
    display: inline-block;
    margin: 1px;;
`;



class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
        this.generateBoard = this.generateBoard.bind(this)
        this.updateCss = this.updateCss.bind(this)
    }

    generateBoard () {
        var mines = {};
        var board = [];
        for(var i = 0; i < 10; i++) {
          var randomNum = Math.floor(Math.random()*(10 * 10)) + 1
          if (mines[randomNum] === 1) {

          } else {
              board[randomNum] = 'm';
              mines[randomNum] = 1;
          }
        }
        for(var i = 0; i < 10 * 10; i++) {
            if(board[i] === undefined) {
                board[i] = 's'
            } else {
              continue;
            }
        }
        console.log(board.length)
        this.setState({array: board});
    }

    updateCss(id, square){
        console.log(square)
        var element = document.getElementById(id);

        if (square === 'm') {
            element.innerHTML = square;
            element.style.color = 'black';
            element.style.backgroundColor = 'red';
        } else {
            element.innerHTML = square;
            element.style.color = 'black';
            element.style.backgroundColor = 'green';
        }
    }

    componentDidMount () {
        this.generateBoard()
    }

    render() {
      return (
          <div>
          <Main>
              {this.state.array.map((square, index) => {
                  return (
                      <Hidden id={index} onClick={() => {this.updateCss(index, square)}}></Hidden>
                  )
              })}
          </Main>
          </div>
        );
    }
  }

  export default Board;