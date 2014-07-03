$("#search").keyup(function(){
  var searchField = $("#search").val();
  var myExpression = new RegExp(searchField, "i");  // i means case insensitive.

  $.getJSON('data.json', function(data){
   var output = "<ul class='searchresults'>" ;
   $.each(data, function (k,v){
     if((v.name.search(myExpression) != -1) || (v.year.search(myExpression)) != -1){
      output += "<li>";
      output += "<h2>"+ v.name + "</h2>";
      output += "<p>" + v.year + "</p>";
      output += "<span> $" + v.price + "</span>";
      output += "</li>";
      }
    });
    output += "</ul>";
    $("#update").html(output);
  });
});


