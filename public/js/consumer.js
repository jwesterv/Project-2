$(".searchBtn").on("click", function(event) {
    event.preventDefault();
    var zipcode = $(this).val().trim();
   
  $.ajax("/consumer/" ,{
    type: "GET",
    data: zipcode
  })
  .then(
    function() {
        location.assign("consumer.html");
      })
  .catch(
      function(err){
          if (err) throw err;
      }
  )
  
    
  });