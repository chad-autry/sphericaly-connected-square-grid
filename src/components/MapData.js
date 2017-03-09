

module.exports = function MapData(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.cells = [];
    this.atRow = Math.floor(row/2);
    this.atColumn = Math.floor(columns/2);
    for (var i = 0; i < rows; i++) {
        this.cells[i] = [];
        for (var j = 0; j < columns; j++) {
            if (Math.floor(rows/2) === i && Math.floor(columns/2) === j) {
                this.cells[i][j] = "";
            } else if (Math.random() < .1) {
                this.cells[i][j] = "fa fa-tree";
            } else {
                this.cells[i][j] = "";
            }
        }
    }

   this.getEntity = function(row, column) {
       if (row === this.atRow && column === this.atColumn) {
           return "fa fa-at";
       } else {
           return this.cells[row][column];
       }
   };

   this.up = function() {
       let nextRow = ((this.atRow - 1) + this.rows) % this.rows;        
       if (this.cells[nextRow][this.atColumn] === "") {
           this.atRow = nextRow;
           return true;
       } else {
           return false;
       }
   };

   this.left = function() {
       let nextColumn = ((this.atColumn - 1) + this.columns) % this.columns;
       if (this.cells[this.atRow][nextColumn] === "") {
           this.atColumn = nextColumn;
           return true;
       } else {
           return false;
       }
   };

   this.right = function() {
       let nextColumn = (this.atColumn + 1) % this.columns;
       if (this.cells[this.atRow][nextColumn] === "") {
           this.atColumn = nextColumn;
           return true;
       } else {
           return false;
       }
   };

   this.down = function() {
       let nextRow = (this.atRow + 1) % this.rows;
       if (this.cells[nextRow][this.atColumn] === "") {
           this.atRow = nextRow;
           return true;
       } else {
           return false;
       }
   };

};
