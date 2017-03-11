

module.exports = function MapData(rows, columns) {
    this.wrapStyle = "Traditional";
    this.rows = rows;
    this.columns = columns;
    this.cells = [];
    this.atRow = Math.floor(rows/2);
    this.atColumn = Math.floor(columns/2);
    this.flipped = false;
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

   this.setWrapStyle = function(wrapStyle) {
       this.wrapStyle = wrapStyle;
       this.flipped = false;
   };

   this.getEntity = function(row, column) {
       let mappedRow = row;
       let faFlip = "";
       if (this.wrapStyle === "Spherical Flip" && this.flipped) {
           faFlip = " fa-flip-vertical";
           mappedRow = -1*(row - this.rows + 1);
       }

       if (mappedRow === this.atRow && column === this.atColumn) {
           return "fa fa-at";
       } else {
           return this.cells[mappedRow][column] + faFlip;
       }
   };

   this.up = function(flipOverride) {
       if (!flipOverride && this.wrapStyle === "Spherical Flip" && this.flipped) {
           return this.down(true);
       }

       let nextRow = this.atRow;
       let nextColumn = this.atColumn;
       if (this.wrapStyle === "Traditional") {
           nextRow = ((this.atRow - 1) + this.rows) % this.rows;        
       } else {
           if (nextRow === 0) {
               this.flipped = !this.flipped;
               nextColumn = (this.atColumn + this.columns / 2) % this.columns;
           } else {
               nextRow = this.atRow - 1;
           }
       }

       if (this.cells[nextRow][nextColumn] === "") {
           this.atRow = nextRow;
           this.atColumn = nextColumn;
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

   this.down = function(flipOverride) {
       if (!flipOverride && this.wrapStyle === "Spherical Flip" && this.flipped) {
           return this.up(true);
       }
       let nextRow = this.atRow;
       let nextColumn = this.atColumn;
       if (this.wrapStyle === "Traditional") {
           nextRow = (this.atRow + 1) % this.rows;
       } else {
           if (this.atRow === (this.rows - 1)) {
               this.flipped = !this.flipped;
               nextColumn = (this.atColumn + this.columns/2) % this.columns;
           } else {
              nextRow = this.atRow + 1;
           }
       }
       if (this.cells[nextRow][nextColumn] === "") {
           this.atRow = nextRow;
           this.atColumn = nextColumn;
           return true;
       } else {
           return false;
       }
   };

};
