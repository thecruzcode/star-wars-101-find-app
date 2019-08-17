(function(){
    //fadeInUp animation
    var animation = "fadeInUp",
      urlErrorCount = 0;
  
    //generate a random number
   var runAjax = function() {
     var num = Math.floor(Math.random() * 42 + 3);
  
    // reset animation
   $(".output").removeClass(animation);
  
    //Fetch call
  
   fetch("https://swapi.co/api/starships/" + num + "/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
      done(myJson);
    });
  
  
    let done = (function(data){
      var name = data.name,
              model = data.model,
              manufacturer = data.manufacturer,
              length = data.length,
              maxAtmospheringSpeed = data.max_atmosphering_speed;
    
            // html output
            var output =
              "<article>" +
              "<h1>" +
              name +
              "</h1>" +
              "<p><strong>Model</strong><br>" +
              model +
              "</p>" +
              "<p><strong>Manufacturer:</strong><br>" +
              manufacturer +
              "</p>" +
              "<p><strong>Length:</strong><br>" +
              length +
              "</p>" +
              "<p><strong>Max Atmosphering Speed:</strong><br>" +
              maxAtmospheringSpeed +
              "</p>" +
              "</article>";
    
            // add html output
            $(".output").html(output);
    
            // animate
            $(".output").addClass("animated " + animation);
    
            // console.log(output);
          })
  
  let fail = (function() {
    
    urlErrorCount++;
    $(".output").html("Searching...");
    console.log(
      "path:" + num + " : url JSON missing data : " + urlErrorCount
    );
    runAjax();
  })
  let always = (function(){
  
   });
  };
  
  
    $('#button').on('click', function(){
      runAjax();
    });
  })();
  
  
  