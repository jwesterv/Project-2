

let url = window.location.search;
let zipcode = url.replace("?q=", '');
   console.log(zipcode);

   
  $.ajax("/api/posts/" + zipcode,{
    type: "POST",
    data: zipcode
  })
  .then(
    function() {
      $.get("/api/farms/" + zipcode,function(data){
      console.log(data);
      })
      })
  .catch(
      function(err){
          if (err) throw err;
      }
  )
  
    
