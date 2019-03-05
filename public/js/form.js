$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newFarm = {
        name: $("...").val().trim()

        //form info
    };

    $.ajax("/api/farms", {
        type: "POST",
        data: newFarm
    }).then(
        function(){
            console.log("Profile Updated.")
            location.reload;
        }
    );


});