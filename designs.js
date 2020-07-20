var colorPicker, pixelCanvas, table, column, row;

var pixelCanvas = $("#pixelCanvas");

//First pick color
$(pixelCanvas).on("click",function(x){
  colorPicker = $("#colorPicker").val();
  $(x.target).css("background-color",colorPicker);
});

//Then change the size
$("#sizePicker").on("submit",function(x){
   x.preventDefault();
   row = $("#inputHeight").val();
   column = $("#inputWidth").val();

  // When the user has picked color and submitted the size, call the makeGrid function
   makeGrid(row,column);
});
//build the Grid
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
}