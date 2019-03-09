

let url = window.location.search;
let zipcode = url.replace("?q=", '');
   console.log(zipcode);

   
  $.ajax("/api/posts/" + zipcode,{
    type: "POST",
    data: zipcode
  })
  .then(
    function() {
       console.log("test")
        location.assign("consumer.html");
      })
  .catch(
      function(err){
          if (err) throw err;
      }
  )
  
    
