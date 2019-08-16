(function(){
    //fadeInUp animation
    var animation = "fadeInDown",
      urlErrorCount = 0;
  
    //generate a random number
   var runAjax = function() {
     var num = Math.floor(Math.random() * 42 + 3);
  
    // reset animation
   $(".output").removeClass(animation);
  
    //JSON call
    $.ajax({
      method: "GET",
      url: "https://swapi.co/api/people/" + num + "/"
    })
    .done(function(data){
      var name = data.name;
    //html output
      var output = 
      "<article>" +
      "<h1>" +
      name +
      "</h1>" +
      "</article>";
    //add html output
    $(".output").html(output);
  
    //animate
    $(".output").addClass("animated " + animation);
    //console.log(output);
  })//.done function close
  .fail(function() {
    
    urlErrorCount++;
    $(".output").html("Searching...");
    console.log(
      "path:" + num + " : url JSON missing data : " + urlErrorCount
    );
    runAjax();
  })
  .always(function(){
  
   });
  };
  
  
    $('#button').on('click', function(){
      runAjax();
    });
  })();