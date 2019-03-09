

let url = window.location.search;
let zipcode = url.replace("?q=", '');
   console.log(zipcode);

   
  $.ajax("/api/posts/" + zipcode,{
    type: "POST",
    data: zipcode
  })
  .then(
    function(res) {
      $.get("/api/farms/" + zipcode,function(data){
        console.log("test")
      location.assign("/api/farms")
      })
      })
  .catch(
      function(err){
          if (err) throw err;
      }
  )
  
    
