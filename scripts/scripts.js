var gridSystem;
var width;
var height;
function start() {
    width = $('#gridWidth').val();
    height = $('#gridHeight').val();
    console.log("Grid is "+width+" by "+height);
    gridSystem = new Array(height);
    for (i = 0; i < height; i++) {
        gridSystem[i] = new Array(width);
    }
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            gridSystem[i].push(0);
        }
    }
    drawBoard();
    console.log(gridSystem);
}
function drawBoard() {
    grid = "<table id=\"potato\">";
    for (i = 0; i < height; i++) {
        grid += "<tr>";
        for (j = 0; j < width; j++) {
            if (gridSystem[i][j] == 1) {
                grid += "<td style=\"background-color: #3dbfff\"></td>";    
            } else {
                grid += "<td></td>";
            }
        }
        grid += "</tr>";    
    }
    grid += "</table>";
    $('#board').html(grid);
    $('td').click(function() {
        //alert("clicked");
        var col = $(this).parent().children().index($(this));
        var row = $(this).closest('tr').index();
        console.log("Row: "+row+"; Column: "+col);
        if (gridSystem[row][col] == 1) {
            gridSystem[row][col] = 0;
        } else {
            gridSystem[row][col] = 1;
        }
        drawBoard();
    });
    
}
function incGen(num) {
    for (i = 0; i < num; i++) {
        for (j = 0; j < gridSystem.length; j++) {
            for (k = 0; k < gridSystem[i].length; k++) {
                // Check surrounding cells
            }
        }
    }
}