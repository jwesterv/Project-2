

let url = window.location.search;
let zipcode = url.replace("?q=", '');
   console.log(zipcode);

   
  // $.ajax("/consumer/" ,{
  //   type: "GET",
  //   data: zipcode
  // })
  // .then(
  //   function() {
  //       location.assign("consumer.html");
  //     })
  // .catch(
  //     function(err){
  //         if (err) throw err;
  //     }
  // )
  
    
