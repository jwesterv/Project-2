$(document).ready(function () {

    // Gets an optional query string from our url (i.e. ?formData_id=23)
    //Incase you want to do an individual search for person
    var url = window.location.search;
    var formDataId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;

    //To pull out the post id from the url
    // In localhost:3000/cms?formData_id=1, formData is 1
    if (url.indexOf("?formData_id=") !== -1) {
        formDataId = url.split("=")[1];
        getPostData(formDataId);
    };

    //jQuery to Reference body elements of the form

    var firstNameInput = $("#firstname");
    var lastNameInput = $("#lastname");
    var farmNameInput = $("#farmname");
    var descriptionInput = $("#description");
    var optionInput = $("#option");
    var deliverInput = $("#deliver");
    var phoneInput = $("#phone");
    var emailInput = $("#email");
    var websiteInput = $("#website");
    var farmAddressInput = $("#address");
    var cityInput = $("#city");
    var stateInput = $("#state");
    var zipcodeInput = $("#zipcode");

    //Construction for data to be handed into the db
    var newFormdata = {
        first_name: firstNameInput.val().trim(),
        last_name: lastNameInput.val().trim(),
        farm_name: farmNameInput.val().trim(),
        description: descriptionInput.val().trim(),
        option: optionInput.val().trim(),
        deliver: deliverInput.val().trim(),
        phone: phoneInput.val().trim(),
        email: emailInput.val().trim(),
        website: websiteInput.val().trim(),
        farm_address: farmAddressInput.val().trim(),
        city: cityInput.val().trim(),
        state: stateInput.val().trim(),
        zipcode: zipcodeInput.val().trim()
    };

    console.log(newFormdata);

    if (updating) {
        newFormdata.id = formDataId;
        updatePost(newFormdata);
    }
    else {
        submitPost(newFormdata);
    };

    // Submits a form and redirect user to blog page upon completion
    function submitPost(Post) {
        $.post("/api/posts/", Post, function () {
            window.location.href = "/profile";
        });
    };

    // Gets post data for a post if we're editing
    function getPostData(id) {
        $.get("/api/posts/" + id, function (data) {
            if (data) {
                // If this post exists, prefill our cms forms with its data
                firstNameInput.val().trim();
                lastNameInput.val().trim();
                farmNameInput.val().trim();
                descriptionInput.val().trim();
                optionInput.val().trim();
                deliverInput.val().trim();
                phoneInput.val().trim();
                emailInput.val().trim();
                websiteInput.val().trim();
                farmAddressInput.val().trim();
                cityInput.val().trim();
                stateInput.val().trim();
                zipcodeInput.val().trim()
                // If we have a post with this id, set a flag for us to know to update the post
                // when we hit submit
                updating = true;
            }
        });
    }

    // Update a given post, bring user to the profile page when done
    function updatePost(post) {
        $.ajax({
            method: "PUT",
            url: "/api/posts",
            data: post
        })
            .then(function () {
                window.location.href = "/blog";
            });
    }



});