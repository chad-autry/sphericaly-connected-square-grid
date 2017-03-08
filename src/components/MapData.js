

module.exports = function MapData(rows, columns) {
    this.cells = [];

    for (var i = 0; i < rows; i++) {
        cells[i] = [];
        for (var j = 0; j < columns; j++) {
            if (Math.floor(rows/2) === i && Math.floor(columns/2) === j) {
                cells[i][j] = "fa fa-at";
            } else if (Math.random() < .1) {
                cells[i][j] = "fa fa-tree";
            } else {
                cells[i][j] = "";
            }
        }
    }

   this.getEntity = function(row, column) {
       return cells[row][column];
   };

};
