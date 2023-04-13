const board = document.querySelector('#board');

let size = 16;

function createGrid(x){
    let totalSize = x*x;
    //boardDiv.style.gridTemplateColum

    //1fr syntax for determining the divisions for each row/column 
    //eg if x = 4, it would be 25%, 4/100=.25
    board.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    for (let i = 0; i < totalSize; i++) {
        let boardDiv = document.createElement('div');
        boardDiv.className = 'boardD';
        boardDiv.style.background = 'white';
        board.appendChild(boardDiv);
        //will add an event listener 
        boardDiv.addEventListener('mouseover', function(e) {
         //default background of squares are white, checks if this square has been changed yet
           if(this.style.backgroundColor  == 'white')
{       //changes the square to a random color only if it was not done before
            var randomColor = Math.floor(Math.random()*16777215).toString(16);

            this.style.backgroundColor = "#" + randomColor;
        
        }
        });

    }
   
  

}

function clearFunction() {
    //empties the entire board
    board.innerHTML = ''
    //resets by creating a new grid
    createGrid(size);

  }
  function resizeFunction(){

    let value = prompt("enter a number");
    if(value < 101 && value > 0){
        size = value;
        board.innerHTML = ''

        createGrid(size);

    }
    else{
        alert("error can't do that");
    }

  }
  
  // METHOD 2
  btn.onclick = clearFunction;

  btn2.onclick = resizeFunction;



createGrid(size)
