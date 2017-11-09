var gridSystem;
var neighborGrid;
var visitedSet;
var width;
var height;
var active = 0;
var autoRun;
var patternSelect = 0;
var generation;
function start() {
    generation = 0;
    width = $('#gridWidth').val();
    height = $('#gridHeight').val();
    console.log("Grid is "+width+" by "+height);
    gridSystem = new Array(height);
    neighborGrid = new Array(height);
    visitedSet = new Array(height);
    for (i = 0; i < height; i++) {
        gridSystem[i] = new Array(width);
        neighborGrid[i] = new Array(width);
        visitedSet[i] = new Array(width);
    }
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            gridSystem[i].push(0);
            neighborGrid[i].push(0);
            visitedSet[i].push(0);
        }
    }
    $('#heading').hide('slow');
    $('#startButton').hide('slow');
    $('#widthInput').hide('slow');
    $('#heightInput').hide('slow');
    drawBoard();
}
function drawBoard() {
    console.log("Drawing board...");
    grid = "<table id=\"potato\">";
    for (i = 0; i < height; i++) {
        grid += "<tr>";
        for (j = 0; j < width; j++) {
            if (gridSystem[i][j] == 1) {
                grid += "<td style=\"background-color: #3dbfff\"></td>";
                visitedSet[i][j] = 1;
            } else if (visitedSet[i][j] == 1) {
                grid += "<td style=\"background-color: greenyellow\"></td>";
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
        if (patternSelect == 0) {
            if (gridSystem[row][col] == 1) {
                gridSystem[row][col] = 0;
            } else {
                gridSystem[row][col] = 1;
            }
        } else if (patternSelect == 1) {
            gridSystem[row][col] = 1;
            gridSystem[row+1][col] = 1;
            gridSystem[row+1][col+1] = 1;
            gridSystem[row][col+1] = 1;
        } else if (patternSelect == 2) {
            gridSystem[row][col+1] = 1;
            gridSystem[row+1][col+2] = 1;
            gridSystem[row+2][col] = 1;
            gridSystem[row+2][col+1] = 1;
            gridSystem[row+2][col+2] = 1;
        } else if (patternSelect == 3) {
            rand = Math.floor(Math.random() * 2);
            if (rand%2 == 0) {
                gridSystem[row][col] = 1;
                gridSystem[row][col+1] = 1;
                gridSystem[row][col+2] = 1;
            } else {
                gridSystem[row][col] = 1;
                gridSystem[row+1][col] = 1;
                gridSystem[row+2][col] = 1;
            }
        } else if (patternSelect == 4) {
            gridSystem[row][col] = 1;
            gridSystem[row][col+1] = 1;
            gridSystem[row+1][col] = 1;
            gridSystem[row+2][col+3] = 1;
            gridSystem[row+3][col+2] = 1;
            gridSystem[row+3][col+3] = 1;
        } else if (patternSelect == 5) {
            gridSystem[row][col+1] = 1;
            gridSystem[row][col+2] = 1;
            gridSystem[row][col+3] = 1;
            gridSystem[row+1][col] = 1;
            gridSystem[row+1][col+1] = 1;
            gridSystem[row+1][col+2] = 1;
        } else if (patternSelect == 6) {
            gridSystem[row][col+4] = 1;
            gridSystem[row][col+10] = 1;
            gridSystem[row+1][col+4] = 1;
            gridSystem[row+1][col+10] = 1;
            gridSystem[row+2][col+4] = 1;
            gridSystem[row+2][col+5] = 1;
            gridSystem[row+2][col+9] = 1;
            gridSystem[row+2][col+10] = 1;
            gridSystem[row+4][col] = 1;
            gridSystem[row+4][col+1] = 1;
            gridSystem[row+4][col+2] = 1;
            gridSystem[row+4][col+5] = 1;
            gridSystem[row+4][col+6] = 1;
            gridSystem[row+4][col+8] = 1;
            gridSystem[row+4][col+9] = 1;
            gridSystem[row+4][col+12] = 1;
            gridSystem[row+4][col+13] = 1;
            gridSystem[row+4][col+14] = 1;
            gridSystem[row+5][col+2] = 1;
            gridSystem[row+5][col+4] = 1;
            gridSystem[row+5][col+6] = 1;
            gridSystem[row+5][col+8] = 1;
            gridSystem[row+5][col+10] = 1;
            gridSystem[row+5][col+12] = 1;
            gridSystem[row+6][col+4] = 1;
            gridSystem[row+6][col+5] = 1;
            gridSystem[row+6][col+9] = 1;
            gridSystem[row+6][col+10] = 1;
            gridSystem[row+8][col+4] = 1;
            gridSystem[row+8][col+5] = 1;
            gridSystem[row+8][col+9] = 1;
            gridSystem[row+8][col+10] = 1;
            gridSystem[row+9][col+2] = 1;
            gridSystem[row+9][col+4] = 1;
            gridSystem[row+9][col+6] = 1;
            gridSystem[row+9][col+8] = 1;
            gridSystem[row+9][col+10] = 1;
            gridSystem[row+9][col+12] = 1;
            gridSystem[row+10][col] = 1;
            gridSystem[row+10][col+1] = 1;
            gridSystem[row+10][col+2] = 1;
            gridSystem[row+10][col+5] = 1;
            gridSystem[row+10][col+6] = 1;
            gridSystem[row+10][col+8] = 1;
            gridSystem[row+10][col+9] = 1;
            gridSystem[row+10][col+12] = 1;
            gridSystem[row+10][col+13] = 1;
            gridSystem[row+10][col+14] = 1;
            gridSystem[row+12][col+4] = 1;
            gridSystem[row+12][col+5] = 1;
            gridSystem[row+12][col+9] = 1;
            gridSystem[row+12][col+10] = 1;
            gridSystem[row+13][col+4] = 1;
            gridSystem[row+13][col+10] = 1;
            gridSystem[row+14][col+4] = 1;
            gridSystem[row+14][col+10] = 1;
        } else if (patternSelect == 7) {
            gridSystem[row][col] = 1;
            gridSystem[row][col+3] = 1;
            gridSystem[row+2][col] = 1;
            gridSystem[row+3][col+1] = 1;
            gridSystem[row+3][col+2] = 1;
            gridSystem[row+3][col+3] = 1;
            gridSystem[row+1][col+4] = 1;
            gridSystem[row+2][col+4] = 1;
            gridSystem[row+3][col+4] = 1;
        } else if (patternSelect == 8) {
            gridSystem[row+4][col] = 1;
            gridSystem[row+4][col+1] = 1;
            gridSystem[row+5][col] = 1;
            gridSystem[row+5][col+1] = 1;
            gridSystem[row+2][col+34] = 1;
            gridSystem[row+2][col+35] = 1;
            gridSystem[row+3][col+34] = 1;
            gridSystem[row+3][col+35] = 1;
            gridSystem[row+4][col+10] = 1;
            gridSystem[row+5][col+10] = 1;
            gridSystem[row+6][col+10] = 1;
            gridSystem[row+3][col+11] = 1;
            gridSystem[row+7][col+11] = 1;
            gridSystem[row+2][col+12] = 1;
            gridSystem[row+8][col+12] = 1;
            gridSystem[row+2][col+13] = 1;
            gridSystem[row+8][col+13] = 1;
            gridSystem[row+5][col+14] = 1;
            gridSystem[row+3][col+15] = 1;
            gridSystem[row+7][col+15] = 1;
            gridSystem[row+4][col+16] = 1;
            gridSystem[row+5][col+16] = 1;
            gridSystem[row+6][col+16] = 1;
            gridSystem[row+5][col+17] = 1;
            gridSystem[row+2][col+20] = 1;
            gridSystem[row+3][col+20] = 1;
            gridSystem[row+4][col+20] = 1;
            gridSystem[row+2][col+21] = 1;
            gridSystem[row+3][col+21] = 1;
            gridSystem[row+4][col+21] = 1;
            gridSystem[row+1][col+22] = 1;
            gridSystem[row+5][col+22] = 1;
            gridSystem[row][col+24] = 1;
            gridSystem[row+1][col+24] = 1;
            gridSystem[row+5][col+24] = 1;
            gridSystem[row+6][col+24] = 1;           
        } else if (patternSelect == 9) {
            gridSystem[row][col] = 1;
            gridSystem[row][col+1] = 1;
            gridSystem[row+1][col] = 1;
            gridSystem[row+1][col+2] = 1;
            gridSystem[row+2][col+1] = 1;
        } else if (patternSelect == 10) {
            gridSystem[row][col+5] = 1;
            gridSystem[row+1][col+6] = 1;
            gridSystem[row+2][col] = 1;
            gridSystem[row+2][col+6] = 1;
            gridSystem[row+3][col+1] = 1;
            gridSystem[row+3][col+2] = 1;
            gridSystem[row+3][col+3] = 1;
            gridSystem[row+3][col+4] = 1;
            gridSystem[row+3][col+5] = 1;
            gridSystem[row+3][col+6] = 1;
            gridSystem[row+26][col+5] = 1;
            gridSystem[row+25][col+6] = 1;
            gridSystem[row+24][col] = 1;
            gridSystem[row+24][col+6] = 1;
            gridSystem[row+23][col+1] = 1;
            gridSystem[row+23][col+2] = 1;
            gridSystem[row+23][col+3] = 1;
            gridSystem[row+23][col+4] = 1;
            gridSystem[row+23][col+5] = 1;
            gridSystem[row+23][col+6] = 1;
            gridSystem[row+6][col] = 1;
            gridSystem[row+6][col+1] = 1;
            gridSystem[row+6][col+2] = 1;
            gridSystem[row+7][col] = 1;
            gridSystem[row+7][col+1] = 1;
            gridSystem[row+20][col] = 1;
            gridSystem[row+20][col+1] = 1;
            gridSystem[row+20][col+2] = 1;
            gridSystem[row+19][col] = 1;
            gridSystem[row+19][col+1] = 1;
            gridSystem[row+8][col+4] = 1;
            gridSystem[row+9][col+4] = 1;
            gridSystem[row+9][col+5] = 1;
            gridSystem[row+10][col+5] = 1;
            gridSystem[row+10][col+6] = 1;
            gridSystem[row+11][col+4] = 1;
            gridSystem[row+11][col+5] = 1;
            gridSystem[row+18][col+4] = 1;
            gridSystem[row+17][col+4] = 1;
            gridSystem[row+17][col+5] = 1;
            gridSystem[row+16][col+5] = 1;
            gridSystem[row+16][col+6] = 1;
            gridSystem[row+15][col+4] = 1;
            gridSystem[row+15][col+5] = 1;
        } else if (patternSelect == 11) {
            gridSystem[row][col+1] = 1;
            gridSystem[row+1][col] = 1;
            gridSystem[row+2][col] = 1;
            gridSystem[row+1][col+2] = 1;
            gridSystem[row+2][col+2] = 1;
            gridSystem[row+3][col+1] = 1;
        } else {
            if (gridSystem[row][col] == 1) {
                gridSystem[row][col] = 0;
            } else {
                gridSystem[row][col] = 1;
            }
        }
        drawBoard();
    });
    
}
function incGen(num) {
    console.log(num);
    generation += num;
    $('#genCounter').html('Gen: '+generation);
    // Iterate per each generation
    for (i = 0; i < num; i++) {
        // Per row in the grid
        for (j = 0; j < gridSystem.length; j++) {
            // Per cell in the row
            for (k = 0; k < gridSystem[j].length; k++) {
                neighbor = 0; // Reset neighbor count
                // Checks if the cell is NOT at the top row.
                if (j > 0) {
                    // Top Left
                    if (k > 0) {
                        if (gridSystem[j-1][k-1] == 1) {
                            neighbor++;
                        }
                    }
                    // Top Right
                    if (k != (width-1)) {
                        if (gridSystem[j-1][k+1] == 1) {
                            neighbor++;
                        }
                    }
                    // Top
                    if (gridSystem[j-1][k] == 1) {
                        neighbor++;
                    }
                }
                // Checks if the cell is NOT at the bottom row
                if (j != (height-1)) {
                    // Bottom Left
                    if (k > 0) {
                        if (gridSystem[j+1][k-1] == 1) {
                            neighbor++;
                        }
                    }
                    // Bottom Right
                    if (k != (width-1)) {
                        if (gridSystem[j+1][k+1] == 1) {
                            neighbor++;
                        }
                    }
                    // Bottom
                    if (gridSystem[j+1][k] == 1) {
                        neighbor++;
                    }
                }
                // Left
                if (k > 0) {
                    if (gridSystem[j][k-1] == 1) {
                        neighbor++;
                    }
                }
                // Right
                if (k != (width-1)) {
                    if (gridSystem[j][k+1] == 1) {
                        neighbor++;
                    }
                }
                neighborGrid[j][k] = neighbor;
            }
        }
        for (j = 0; j < gridSystem.length; j++) {
            for (k = 0; k < gridSystem[j].length; k++) {
                neighbor = neighborGrid[j][k];
                if (gridSystem[j][k] == 1) {
                    if (neighbor < 2 || neighbor > 3) {
                        gridSystem[j][k] = 0;
                    }
                } else {
                    if (neighbor == 3) {
                        gridSystem[j][k] = 1;
                    }
                }
            }
        }
    }
    drawBoard();
}
function reset() {
    generation = 0;
    $('#genCounter').html('Gen: '+generation);
    active = 0;
    $('#realtime').html('Run');
    clearInterval(autoRun);
    for (j = 0; j < gridSystem.length; j++) {
        for (k = 0; k < gridSystem[j].length; k++) {
            gridSystem[j][k] = 0;
            visitedSet[j][k] = 0;
        }
    }
    drawBoard();
}
function realTime() {
    if (active) {
        active = 0;
        $('#realtime').html('Run');
        clearInterval(autoRun);
    } else {
        active = 1;
        $('#realtime').html('Stop');
        autoRun = setInterval(function() {
            console.log("Iterating");
            generation += 1;
            $('#genCounter').html('Gen: '+generation);
            for (j = 0; j < gridSystem.length; j++) {
                // Per cell in the row
                for (k = 0; k < gridSystem[j].length; k++) {
                    neighbor = 0; // Reset neighbor count
                    // Checks if the cell is NOT at the top row.
                    if (j > 0) {
                        // Top Left
                        if (k > 0) {
                            if (gridSystem[j-1][k-1] == 1) {
                                neighbor++;
                            }
                        }
                        // Top Right
                        if (k != (width-1)) {
                            if (gridSystem[j-1][k+1] == 1) {
                                neighbor++;
                            }
                        }
                        // Top
                        if (gridSystem[j-1][k] == 1) {
                            neighbor++;
                        }
                    }
                    // Checks if the cell is NOT at the bottom row
                    if (j != (height-1)) {
                        // Bottom Left
                        if (k > 0) {
                            if (gridSystem[j+1][k-1] == 1) {
                                neighbor++;
                            }
                        }
                        // Bottom Right
                        if (k != (width-1)) {
                            if (gridSystem[j+1][k+1] == 1) {
                                neighbor++;
                            }
                        }
                        // Bottom
                        if (gridSystem[j+1][k] == 1) {
                            neighbor++;
                        }
                    }
                    // Left
                    if (k > 0) {
                        if (gridSystem[j][k-1] == 1) {
                            neighbor++;
                        }
                    }
                    // Right
                    if (k != (width-1)) {
                        if (gridSystem[j][k+1] == 1) {
                            neighbor++;
                        }
                    }
                    neighborGrid[j][k] = neighbor;
                }
            }
            for (j = 0; j < gridSystem.length; j++) {
                for (k = 0; k < gridSystem[j].length; k++) {
                    neighbor = neighborGrid[j][k];
                    if (gridSystem[j][k] == 1) {
                        if (neighbor < 2 || neighbor > 3) {
                            gridSystem[j][k] = 0;
                        }
                    } else {
                        if (neighbor == 3) {
                            gridSystem[j][k] = 1;
                        }
                    }
                }
            }
            drawBoard();
        }, 100);
    }
}
function patternSelection(pattern) {
    switch (pattern) {
        case 'point':
            patternSelect = 0;
            $('#brush').html('<u>Brush</u><br> Point');
            break;
        case 'block':
            patternSelect = 1;
            $('#brush').html('<u>Brush</u><br> Block');
            break;
        case 'glider':
            patternSelect = 2;
            $('#brush').html('<u>Brush</u><br> Glider');
            break;
        case 'blinker':
            patternSelect = 3;
            $('#brush').html('<u>Brush</u><br> Blinker');
            break;
        case 'beacon':
            $('#brush').html('<u>Brush</u><br> Beacon');
            patternSelect = 4;
            break;
        case 'toad':
            $('#brush').html('<u>Brush</u><br> Toad');
            patternSelect = 5;
            break;
        case 'pulsar':
            $('#brush').html('<u>Brush</u><br> Pulsar');
            patternSelect = 6;
            break;
        case 'spaceship':
            $('#brush').html('<u>Brush</u><br> Spaceship');
            patternSelect = 7;
            break;
        case 'gosper':
            $('#brush').html('<u>Brush</u><br> Gosper Gun');
            patternSelect = 8;
            break;
        case 'boat':
            $('#brush').html('<u>Brush</u><br> Boat');
            patternSelect = 9;
            break;
        case 'puffer':
            $('#brush').html('<u>Brush</u><br> Puffer');
            patternSelect = 10;
            break;
        default:
            $('#brush').html('<u>Brush</u><br> Beehive');
            patternSelect = 11;
            break;
            
    }
}

function toggleSection(sectionName) {
    $('#'+sectionName).toggle('fast');
}