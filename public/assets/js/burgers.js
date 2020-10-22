// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-full").on("click", function(event) {
    var id = $(this).data("id");
    var newHunger = $(this).data("newHunger");

    var newHungerState = {
      full: newHunger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newHungerState
    }).then(
      function() {
        console.log("changed hunger to", newHunger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newBurger").val().trim(),
      full: $("[name=full]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});