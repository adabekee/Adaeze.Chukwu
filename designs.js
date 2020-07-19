var colorPicker, pixelCanvas, row, column, table, colorPalette, palette1;

var pixelCanvas = $("#pixelCanvas");
var colorPalette = $("#colorPalette");

//pick a color
$(pixelCanvas).on("click",function(x){
  colorPicker = $("#colorPicker").val();
  $(x.target).css("background-color",colorPicker);
});

//change size
$("#sizePicker").on("submit",function(x){
   x.preventDefault();
   row = $("#inputHeight").val();
   column = $("#inputWeight").val();

  // When size is submitted by the user, call makeGrid()
   makeGrid(row,column);
});
//build Grid
function makeGrid() {
  table = "<table class='table'>";
  table+= "<tr></tr>";
 for (var i=0; i<row; i++){
   table+="<tr>";
   for (var y=0; y<column; y++){
     table+="<td class='cell'></td>";
   }
   table+= "</tr>";
 }
 table+= "</table>";
 $(pixelCanvas).html(table);
 palette()
}
//build palette
function palette() {
  palette1 = "<table class='palette'>";
  palette1+= "<tr class='paletteR'></tr>";
 for (var a=0; a<8; a++){
   palette1+="<tr class='paletteR'>";
   for (var b=0; b<6; b++){
     palette1+="<td class='paletteC'></td>";
   }
   palette1+= "</tr>";
 }
 palette1+= "</table>";
 $(colorPalette).html(palette1);
 fillPalette()
}

//fill palette
function fillPalette() {
    var colorArrey = [
    ["rgb(255,128,128)",
    "rgb(255,0,0)",
    "rgb(128,64,64)",
    "rgb(128,0,0)",
    "rgb(64,0,0)",
    "rgb(0,0,0)",],
    ["rgb(255,255,128)",
    "rgb(255,255,0)",
    "rgb(255,128,64)",
    "rgb(255,128,0)",
    "rgb(128,64,0)",
    "rgb(128,128,0)",],
    ["rgb(128,255,128)",
    "rgb(128,255,0)",
    "rgb(0,255,0)",
    "rgb(0,128,0)",
    "rgb(0,64,0)",
    "rgb(128,128,64)",],
    ["rgb(0,255,128)",
    "rgb(0,255,64)",
    "rgb(0,128,128)",
    "rgb(0,255,0)",
    "rgb(0,128,64)",
    "rgb(0,64,64)",],
    ["rgb(128,128,128)",
    "rgb(128,255,255)",
    "rgb(0,255,255)",
    "rgb(0,64,128)",
    "rgb(0,0,255)",
    "rgb(0,0,128)",],
    ["rgb(64,128,128)",
    "rgb(0,128,255)",
    "rgb(0,128,192)",
    "rgb(128,128,255)",
    "rgb(0,0,160)",
    "rgb(0,0,64)",],
    ["rgb(192,192,192)",
    "rgb(255,128,192)",
    "rgb(128,128,192)",
    "rgb(128,0,64)",
    "rgb(128,0,128)",
    "rgb(64,0,64)",],
    ["rgb(255,128,255)",
    "rgb(255,0,255)",
    "rgb(255,0,128)",
    "rgb(128,0,255)",
    "rgb(64,0,128)",
    "rgb(255,255,255)",]
    ];
    var fill;
    for (var a = 0; a<8; a++) {
      for (var b=0; b<6; b++) {
        fill = colorArrey[a][b];
        $(".paletteC:first")
          .css("background-color", fill)
          .removeClass("paletteC")
          .addClass("paletteFilled");
      }
    }
  }

  colorPalette.on("change", ".paletteFilled", function() {
    colorPicker = $(this).css("background-color");
  });

