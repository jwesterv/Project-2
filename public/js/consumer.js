

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
        console.log(data)
        $("#farmReturn").append("<h1>" + data[0].farm_name + "</h1>" + "<p>" + data[0].zipcode + "</p>"+ "<p>" + data[0].id + "</p>");
      // location.assign("/api/farms/"+ zipcode)
      })
      })
  .catch(
      function(err){
          if (err) throw err;
      }
  )
  
    
