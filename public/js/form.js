$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newFormdata = {
        first_name: $("#firstname").val().trim(),
        last_name: $("#lastname").val().trim(),
        farm_name: $("#farmname").val().trim(),
        description: $("#description").val(),
        option: $("#option").val(),
        deliver: $("#deliver").val(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        website: $("#website").val().trim(),
        farm_address: $("address").val(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        zipcode: $("#zipcode").val().trim()

    };

    $.ajax("/api/farms", {
        type: "POST",
        data: newFormdata
    }).then(
        function(){
            console.log("Profile Created")
            location.reload;
        }
    );


});